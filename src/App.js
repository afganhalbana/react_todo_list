import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginPage from './pages/auth/login'
import RegisterPage from './pages/auth/register'
import ListTodoPage from './pages/todo'
import DetailTodoPage from './pages/todo/detail'
import AddTodoPage from './pages/todo/add'
import DeleteTodoPage from './pages/todo/delete'
import UpdateTodoPage from './pages/todo/update'
import NotFoundPage from './pages/notfound'
import ProtectedLayout from './components/protectedLayout'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layout';

function App() {
  return (
    <div className="App">
        <Router>
          <Layout>
            <Switch>
                <Route component={LoginPage} path="/login"/>
                <Route component={RegisterPage} path="/register"/>

                <ProtectedLayout component={DetailTodoPage} path="/todo/:id"/>
                <Route component={ListTodoPage} exact path="/"/>
                <ProtectedLayout component={AddTodoPage} path="/todo/add"/>
                <ProtectedLayout component={UpdateTodoPage} path="/todo/:id/update"/>
                <ProtectedLayout component={DeleteTodoPage} path="/todo/:id/delete"/>
                <ProtectedLayout component={NotFoundPage} />
            </Switch>
          </Layout>
        </Router>
    </div>
  );
}

export default App;
