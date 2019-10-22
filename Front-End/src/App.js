import React from 'react';
import Student from "./components/Noor/Noor";
import 'bootstrap/dist/css/bootstrap.css';





class App extends React.Component {
  state = {};
  render() {
  
    return (
      
      <div className='container'>
        <h1>Landing Page</h1>
        <Student/>
       
      </div>
     
    );
  }
}

export default App;