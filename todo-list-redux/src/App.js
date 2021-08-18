import './App.css';
import TodoList from './features/todos/components/TodoList';
import {Route, Link, BrowserRouter, Switch, HashRouter} from "react-router-dom"
import NotFoundPage from './features/notfound/NotFoundPage';
import DoneList from './features/todos/components/DoneList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <ul>
        <Link to="/todos">To-do List</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/done">Done List</Link>
        </ul>
        <Switch>
          <Route exact path="/todos" component={TodoList}></Route>
          <Route path="/done" component={DoneList}></Route>
          <Route path="*" component={NotFoundPage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
