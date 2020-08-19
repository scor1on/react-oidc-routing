/* /src/routes/privateRoute.jsx */
import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { AuthConsumer } from '../providers/authProvider';

type ComponentType = RouteProps['component'];

export const PrivateRoute: React.FC<RouteProps> = ({
  component,
  ...rest
}: RouteProps) => {
  const renderFn = (Component: ComponentType) => (props: RouteProps) => (
    <AuthConsumer>
      {({ isAuthenticated, signinRedirect }) => {
        console.log('???');
        if (!!Component && isAuthenticated && isAuthenticated()) {
          return React.createElement(Component, props);
        } else {
          signinRedirect && signinRedirect();
          return <span>loading mm</span>;
        }
      }}
    </AuthConsumer>
  );

  return <Route {...rest} render={renderFn(component)} />;
};
