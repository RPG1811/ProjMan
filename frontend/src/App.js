import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ProjectList from './components/ProjectList';
import ProjectDetails from './components/ProjectDetails';
import TaskList from './components/TaskList';
import TaskDetails from './components/TaskDetails';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          {/* Public Routes */}
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />

          {/* Private Routes */}
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/projects" component={ProjectList} />
          <Route exact path="/projects/:projectId" component={ProjectDetails} />
          <Route exact path="/projects/:projectId/tasks" component={TaskList} />
          <Route exact path="/projects/:projectId/tasks/:taskId" component={TaskDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
