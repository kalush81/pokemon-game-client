import React from 'react';
import './App.css';
import SignUpFormContainer from './components/SignUpFormContainer';


class App extends React.Component {
  state = {
    isLoggedIn: true
  } 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Hi from react pokemon</h2>
         <SignUpFormContainer />
         <hr/>
         {/* <LoginFormContainer /> */}
        
        </header>
      </div>
    );
  }
}

export default App;
