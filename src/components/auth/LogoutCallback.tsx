import React from 'react';
import { AuthConsumer } from '../../providers/authProvider';

export const LogoutCallback = () => (
  <AuthConsumer>
    {({ signoutRedirectCallback }) => {
      signoutRedirectCallback && signoutRedirectCallback();
      return <span>loading</span>;
    }}
  </AuthConsumer>
);
