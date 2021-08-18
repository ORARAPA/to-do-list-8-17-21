import './App.css';
import TodoList from './features/todos/components/TodoList';
import {Route, Link, BrowserRouter, Switch, HashRouter} from "react-router-dom"
import NotFoundPage from './features/notfound/NotFoundPage';
import DoneList from './features/todos/components/DoneList';
import { Layout, Menu, Breadcrumb } from 'antd';
import Home from './features/todos/components/Home';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Layout className="layout">
        <Content style={{ padding: '0 50px' }}>
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key={1}><Link to="/">Home</Link></Menu.Item>
              <Menu.Item><Link to="/todos">To-do List</Link></Menu.Item>
              <Menu.Item><Link to="/done">Done List</Link></Menu.Item>
            </Menu>
          </Header>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/todos" component={TodoList}></Route>
            <Route path="/done" component={DoneList}></Route>
            <Route path="*" component={NotFoundPage}></Route>
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center', paddingTop: 300 }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </BrowserRouter>
      
     
    </div>
  );
}

export default App;

 

