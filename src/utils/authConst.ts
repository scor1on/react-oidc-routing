import { UserManagerSettings, OidcMetadata } from 'oidc-client';

export const IDENTITY_CONFIG: UserManagerSettings = {
  authority: process.env.REACT_APP_AUTH_URL, //(string): The URL of the OIDC provider.
  client_id: process.env.REACT_APP_IDENTITY_CLIENT_ID, //(string): Your client application's identifier as registered with the OIDC provider.
  redirect_uri: process.env.REACT_APP_REDIRECT_URL, //The URI of your client application to receive a response from the OIDC provider.
  automaticSilentRenew: false, //(boolean, default: false): Flag to indicate if there should be an automatic attempt to renew the access token prior to its expiration.
  loadUserInfo: false, //(boolean, default: true): Flag to control if additional identity data is loaded from the user info endpoint in order to populate the user's profile.
  silent_redirect_uri: process.env.REACT_APP_SILENT_REDIRECT_URL, //(string): The URL for the page containing the code handling the silent renew.
  post_logout_redirect_uri: process.env.REACT_APP_LOGOFF_REDIRECT_URL, // (string): The OIDC post-logout redirect URI.
  response_type: 'id_token token', //(string, default: 'id_token'): The type of response desired from the OIDC provider.
  scope: 'openid profile', //(string, default: 'openid'): The scope being requested from the OIDC provider.
};

export const METADATA_OIDC: Partial<OidcMetadata> = {
  issuer: process.env.REACT_APP_AUTH_URL as string,
  jwks_uri:
    process.env.REACT_APP_AUTH_URL + '/.well-known/openid-configuration/jwks',
  authorization_endpoint: process.env.REACT_APP_AUTH_URL + '/connect/authorize',
  token_endpoint: process.env.REACT_APP_AUTH_URL + '/connect/token',
  userinfo_endpoint: process.env.REACT_APP_AUTH_URL + '/connect/userinfo',
  end_session_endpoint: process.env.REACT_APP_AUTH_URL + '/connect/endsession',
  check_session_iframe:
    process.env.REACT_APP_AUTH_URL + '/connect/checksession',
  revocation_endpoint: process.env.REACT_APP_AUTH_URL + '/connect/revocation',
  introspection_endpoint:
    process.env.REACT_APP_AUTH_URL + '/connect/introspect',
};
