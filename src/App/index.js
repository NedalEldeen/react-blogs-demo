import React from 'react';
import Navbar from 'App/Components/Navbar';
import Home from 'App/Containers/Home';
import BlogPage from 'App/Containers/BlogPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="app-width-wrapper main-container">
          <Switch>
            <Route path="/blog/:blogId">
              <BlogPage />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
