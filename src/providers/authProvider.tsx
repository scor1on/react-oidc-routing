/* /src/providers/authProvider.jsx */

import React, { Component } from 'react';
import AuthService from '../services/authService';

const context: Partial<AuthService> = {};

export const AuthContext = React.createContext(context);

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
