# react-routing-oidc

> OIDC Client with React Routing

[![NPM](https://img.shields.io/npm/v/react-routing-oidc.svg)](https://www.npmjs.com/package/react-routing-oidc) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-routing-oidc
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
import { AuthProvider } from 'react-routing-oidc'

const App = () => {
  return <AuthProvider>
    ...
  </AuthProvider>
}

export default App
```

```tsx
import { Callback, Logout, LogoutCallback, SilentRenew } from 'react-routing-oidc';

<Route exact={true} path='/signin-callback.html' component={Callback}/>
<Route exact={true} path='/silent-callback.html' component={SilentRenew} />
<Route exact={true} path='/logout' component={Logout} />
<Route exact={true} path='/logout/callback' component={LogoutCallback} />
```
Put Routes to your <Switch></Switch>

```tsx
import { PrivateRoute } from 'react-routing-oidc';
<PrivateRoute path='/' component={HomePage} />
```
use PrivateRoute to check OIDC authentification 

## License

MIT © [scor1on](https://github.com/scor1on)
