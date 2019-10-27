import React from 'react';
import Student from "./components/Noor/Noor";
import 'bootstrap/dist/css/bootstrap.css';
<<<<<<< HEAD
import Regist from './components/Raghad/Regist';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import Header from './components/Elias/header';
import AddCopm from './components/Raghad/dashBoardCompany'
=======
>>>>>>> add_form





<<<<<<< HEAD

=======
>>>>>>> add_form
class App extends React.Component {
  state = {};
  render() {
  
    return (
<<<<<<< HEAD
      <div>
      
      <Router>
      <div className='container'>
        <h1>Landing Page</h1>
        <Header/>
       
        <Route path='/register' component={Regist}/>
        <Route path='/student' component={Student}/>
        {/* <Route path='/List' component={ <List  companies={this.state.companies} details={this.details} />}/> */}
         {/* <Search/> */}
       


        {/* <Student/> */}
        {/* <Regist/> */}
        <AddCopm/>
       
      </div>

      </Router>
=======
      
      <div className='container'>
        <h1>Landing Page</h1>
        <Student/>
       
>>>>>>> add_form
      </div>
     
    );
  }
}

export default App;