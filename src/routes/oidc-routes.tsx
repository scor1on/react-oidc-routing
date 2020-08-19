import React from 'react'
import { Route, Switch } from 'react-router-dom';

import { Callback } from '../components/auth/Callback';
import { Logout } from '../components/auth/Logout';
import { LogoutCallback } from '../components/auth/LogoutCallback';
import { SilentRenew } from '../components/auth/SilentRenew';


// export const OidRoutes = (
//   <Switch>
//     <Route exact={true} path='/assets/signin-callback.html' component={Callback}/>
//     <Route exact={true} path='/logout' component={Logout} />
//     <Route exact={true} path='/logout/callback' component={LogoutCallback} />
//     <Route exact={true} path='/assets/silent-callback.html' component={SilentRenew} />
//   </Switch>
// );

export const OidRoutes = ( props: {match: {url: string}} ) => {
  console.log(props.match);
  return(
    <Switch>
      <Route exact={true} path={`${props.match.url}assets/signin-callback.html`} component={Callback}/>
      <Route exact={true} path={`${props.match.url}logout`} component={Logout} />
      <Route exact={true} path={`${props.match.url}logout/callback`} component={LogoutCallback} />
      <Route exact={true} path={`${props.match.url}assets/silent-callback.html`} component={SilentRenew} />
    </Switch>
  );
};