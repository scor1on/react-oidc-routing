# react-oidc-routing

> OIDC Client with React Routing

[![NPM](https://img.shields.io/npm/v/react-oidc-routing.svg)](https://www.npmjs.com/package/react-oidc-routing) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-oidc-routing
```

## Usage

```bash
REACT_APP_AUTH_URL = 'https://identity.com'
REACT_APP_IDENTITY_CLIENT_ID = 'js2'
REACT_APP_REDIRECT_URL = 'http://localhost:5004/signin-callback.html'
REACT_APP_SILENT_REDIRECT_URL = 'http://localhost:5004/silent-callback';
REACT_APP_LOGOFF_REDIRECT_URL = 'https://identity.com/account/SignOut';
REACT_APP_REPONSE = 'id_token token'
```

```tsx
import { Callback, Logout, LogoutCallback, SilentRenew } from 'react-oidc-routing';

<Route exact={true} path='/signin-callback.html' component={Callback}/>
<Route exact={true} path='/silent-callback.html' component={SilentRenew} />
<Route exact={true} path='/logout' component={Logout} />
<Route exact={true} path='/logout/callback' component={LogoutCallback} />
```
Put Routes to your <Switch></Switch>

```tsx
import { PrivateRoute } from 'react-oidc-routing';
<PrivateRoute path='/' component={HomePage} />
```
use PrivateRoute to check OIDC authentification 

## License

MIT © [scor1on](https://github.com/scor1on)
