/* /src/providers/authProvider.jsx */

import React, { Component } from 'react';
import AuthService from '../services/authService';

export const AuthContext = React.createContext<AuthService>(new AuthService());

export const AuthConsumer = AuthContext.Consumer;

export class AuthProvider extends Component {
  authService: AuthService;
  constructor(props: {}) {
    super(props);
    this.authService = new AuthService();
  }
  render() {
    return (
      <AuthContext.Provider value={this.authService}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
