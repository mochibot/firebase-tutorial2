import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import ProjectDetails from './pages/ProjectDetails';
import CreateProject from './pages/CreateProject';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Route path='/signup' component={SignUp}/>
        <Route path='/signin' component={SignIn}/>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/create' component={CreateProject}/>
        <Route path='/projects/:id' component={ProjectDetails}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
