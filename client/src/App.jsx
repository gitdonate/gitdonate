import React, { Component } from "react";

//import { Router, Route, IndexRoute, browserHistory } from 'react-router';
//import { Router, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

/*
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./utils/getWeb3";
import truffleContract from "truffle-contract";
*/

import { withStyles } from '@material-ui/core/styles';
import withRoot from './withRoot';

import "./App.css";

import GithubApp from './components/github/GithubApp';
import Search from './components/github/Search';
import User from './components/github/User';
import Repos from './components/github/Repos';
/*
class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const Contract = truffleContract(SimpleStorageContract);
      Contract.setProvider(web3.currentProvider);
      const instance = await Contract.deployed();

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check chrome-dev-tools console for details.`
      );
      console.log(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    await contract.set(5, { from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.get();

    // Update state with the result.
    this.setState({ storageValue: response.toNumber() });
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>Good to Go!</h1>
        <p>We were able to conect to Web3, accounts, and deployed contracts</p>
        <h2>Smart Contract Example</h2>
        <p>
          If your contracts compiled and migrated successfully, below will show
          a stored value of 5 (by default).
        </p>
        <p>
          Try changing the value stored on <strong>line 40</strong> of App.js.
        </p>
        <div>The stored value is: {this.state.storageValue}</div>

      </div>
    );
  }
}

export default App;
*/

/*
Rendering a router will output the right component tree based on the current URL.
Nested routes' components will be passed down to the parent as `this.props.children`
If the URL is /, then <App/> will be rendered, and this.props.children will be <Search/> (this is the IndexRoute)
If the URL is /user/ziad-saab then <App/> will be rendered, and this.props.children will be <User/>
The <User/> instance will be passed a prop called `params`. It will be an object with `{username: 'ziad-saab'}`
*/

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

class App extends Component {
  render() { 

    return (
      <Router>
        <div>
          <Route path="/" component={GithubApp}/>
          
          <Route exact path="/" component={Search}/>
          
          <Route path="/user/:username" component={User} />
          <Route path="/repos" component={Repos} />
          <Route path="/:username/repos" component={Repos} />
          <Route path="/user/:username/repos" component={Repos} />
        </div>
      </Router>
    )
  };
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withRoot(withStyles(styles)(App));
//export default App;

/*
const routes = (
  <Router history={browserHistory}>
      <Route path="/" component={GithubApp}>
          <IndexRoute component={Search}/>
          <Route path="user/:username" component={User}>
            <Route path="followers" component={Followers} />
            <Route path="following" component={Following} />
            <Route path="repos" component={Repos} />
         </Route>
      </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
*/