import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import ProjectList from './pages/ProjectList';
import ProjectDetails from './pages/ProjectDetails';
import TaskList from './pages/TaskList';
import TaskDetails from './pages/TaskDetails';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  const isAdmin = true; 
  const isLoggedIn = true;
  return (
    <Router>
      <div className="App"> 
      <Header isAdmin={isAdmin} isLoggedIn={isLoggedIn} />

        <Routes>
          {/* Public Routes */}
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />

          {/* Private Routes */}
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/projects" component={ProjectList} />
          <Route exact path="/projects/:projectId" component={ProjectDetails} />
          <Route exact path="/projects/:projectId/tasks" component={TaskList} />
          <Route exact path="/projects/:projectId/tasks/:taskId" component={TaskDetails} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
