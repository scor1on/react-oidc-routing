import React from 'react';
import { AuthConsumer } from '../../providers/authProvider';
import { useHistory } from 'react-router-dom';
import { History } from 'history';

export const Callback = () => {
  const history: History = useHistory();
  return (
    <AuthConsumer>
      {({ signinRedirectCallback }) => {
        signinRedirectCallback && signinRedirectCallback(history);
        return <span>Loading...</span>;
      }}
    </AuthConsumer>
  );
};
