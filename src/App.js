import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import Header from './components/Header';
import { withLDProvider } from 'launchdarkly-react-client-sdk';

class App extends Component {
  render() {
    return (
      <section>
        <Header />
        <Board />
      </section>
    );
  }
}

export default withLDProvider({
  clientSideID: '5d5ca6077fcabc08797c4789',
  user: {
      "key": "user_key",
      "name": "User Name",
      "email": "User@email.com"
  }
})(App);
