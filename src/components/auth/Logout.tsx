import React from 'react';
import { AuthConsumer } from '../../providers/authProvider';

export const Logout = () => (
  <AuthConsumer>
    {({ logout }) => {
      logout && logout();
      return <span>loading</span>;
    }}
  </AuthConsumer>
);
