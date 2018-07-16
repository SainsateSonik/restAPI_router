import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Blog from './containers/Blog/Blog';
import NewPost from './containers/NewPost/NewPost';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Blog} />
          <Route path="/new-post" component={NewPost} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
