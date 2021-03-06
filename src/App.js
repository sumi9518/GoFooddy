import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Header from './components/Layout/Header';
import Posts from './components/Posts';

import Axios from 'axios';
import {Container, CssBaseline} from "@material-ui/core";
import {ENTRYPOINT} from "./config/entrypoint";

class App extends React.Component {state = {
  posts: []
}

  componentDidMount() {
    this.getPost();

  }

  getPost = async () => {
   await Axios.get(`${ENTRYPOINT}posts`)
        .then(res => {
          this.setState({
            posts: res.data
          })
        })
  };

  render() {
    return (
        <React.Fragment>
          <CssBaseline />
          <Header/>
          <Container maxWidth="lg">

            <div className="row justify-content-center">
              {/*<Navigation/>*/}

              <Switch>
                <Route exact path="/" render={() => {
                  return (
                      <Posts
                          posts={this.state.posts}
                      />
                  );
                }}/>
              </Switch>
            </div>
          </Container>
        </React.Fragment>
    );
  }
}

export default App;
