import React from 'react';
import axios from 'axios';
import './App.css';
import { server } from './config';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
    }
    this.setUsername = this.setUsername.bind(this)
    this.saveUsername = this.saveUsername.bind(this)
  }

  setUsername(e) {
    this.setState({username: e.target.value});
  }

  saveUsername(e) {
    const username = this.state.username;
    const url = server.url + '/api/save_username';
    axios.post(url, {
      username: username,
    }).then(response => {
      console.log(' * got response', response);
    })
  }

  render() {
    return (
      <div className='App'>
        <h1>{JSON.stringify(this.state)}</h1>

        <h1>Cat Shack</h1>
        <h2>Where Fur Pals Can Get Together</h2>
        <p>We joke about how cats love us when we are needed elsewhere, but in truth, we would not trade that type of demanding behavior for anything in the world; in fact, even when that truth has been stereotypically ingrained in our rationale, we still run to local animal shelters and pet stores to buy these lovable creatures. </p>
        <p>The Cat Shack is designed to help make that transition smoother. After you take our in-depth, under-utilizing scientific quiz, you will be paired with a celebrity cat, who will help you relate to other similar cats available for adoption.</p>
        <div>
          <label>Type Your Name To Begin:</label>
          <input
            id='name'
            type='text'
            onChange={this.setUsername} />
          <button onClick={this.saveUsername}>Start The Quiz</button>

          {[].map((val) => {
            return <h2>Are You Ready To Find Your Next Cat,{val.name}?</h2>
          })}
        </div>
      </div>
    );
  }
}

export default App;