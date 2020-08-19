import { IDENTITY_CONFIG, METADATA_OIDC } from '../utils/authConst.js';
import { UserManager, WebStorageStateStore, Log } from 'oidc-client';
import { History } from 'history';

export default class AuthService {
  private UserManager?: UserManager;

  constructor() {
    this.UserManager = new UserManager({
      ...IDENTITY_CONFIG,
      userStore: new WebStorageStateStore({ store: window.sessionStorage }),
      metadata: {
        ...METADATA_OIDC,
      },
    });

    // Logger
    Log.logger = console;
    Log.level = Log.NONE;
    this.UserManager.events.addUserLoaded(() => {
      if (window.location.href.indexOf('signin-oidc') !== -1) {
        this.navigateToScreen && this.navigateToScreen();
      }
    });
    this.UserManager.events.addSilentRenewError((e) => {
      console.log('silent renew error', e.message);
    });

    this.UserManager.events.addAccessTokenExpired(() => {
      console.log('token expired');
      this.signinSilent && this.signinSilent();
    });
  }

  signinRedirectCallback = (history: History) => {
    console.log(this.UserManager);
    this.UserManager?.signinRedirectCallback().then(() => {
      history.push('/');
    });
  };

  getUser? = async () => {
    const user = await this.UserManager?.getUser();
    if (!user) {
      return await this.UserManager?.signinRedirectCallback();
    }
    return user;
  };

  parseJwt? = (token: string) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  };

  signinRedirect = () => {
    localStorage.setItem('redirectUri', window.location.pathname);
    this.UserManager?.signinRedirect({});
  };

  navigateToScreen? = () => {
    window.location.replace('/en/dashboard');
  };

  isAuthenticated = () => {
    const oidcStorage = JSON.parse(
      sessionStorage.getItem(
        `oidc.user:${process.env.REACT_APP_AUTH_URL}:${process.env.REACT_APP_IDENTITY_CLIENT_ID}`
      ) as string
    );

    return !!oidcStorage && !!oidcStorage.access_token;
  };

  signinSilent? = () => {
    this.UserManager?.signinSilent()
      .then((user) => {
        console.log('signed in', user);
      })
      .catch((err) => {
        this.signinRedirect();
        console.log(err);
      });
  };
  signinSilentCallback = () => {
    this.UserManager?.signinSilentCallback();
  };

  createSigninRequest = () => {
    return this.UserManager?.createSigninRequest();
  };

  logout = () => {
    this.UserManager?.signoutRedirect({
      id_token_hint: localStorage.getItem('id_token'),
    });
    this.UserManager?.clearStaleState();
  };

  signoutRedirectCallback = () => {
    this.UserManager?.signoutRedirectCallback().then(() => {
      localStorage.clear();
      window.location.replace(process.env.REACT_APP_PUBLIC_URL || '/');
    });
    this.UserManager?.clearStaleState();
  };
}
