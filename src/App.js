import React, { Component} from 'react';
import Layout from '@/Layout';
import { Router} from './router'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Router>
        <Layout />
      </Router>
    );
  }
}

export default App;