import React,{PureComponent} from 'react';
import dom from 'react-dom';
import {hashHistory,Router,Route,IndexRoute,IndexRedirect,Link} from 'react-router';

import Login from './components/login.jsx';

import Index from './components/index.jsx'; 

import PostList from './components/postList.jsx';
import PostAdd from './components/postAdd.jsx';
import CategoryList from './components/categoryList.jsx';
import CategoryAdd from './components/categoryAdd.jsx';
import Users from './components/users.jsx';
import UserEdit from './components/userEdit.jsx';
import Setting from './components/setting.jsx';
import SliderList from './components/sliderList.jsx';

class App extends PureComponent{
	render(){
		return (
			<Router history={hashHistory}>
				<Route path="/">
					<IndexRedirect to='/index'/>
					<Route path="index" component={Index}>
						<IndexRedirect to='/index/post'/>
						<Route path="post">
							<IndexRedirect to="/index/post/list"/>
							<Route path="list" component={PostList}/>
							<Route path="add" component={PostAdd}/>
							<Route path="edit/:id" component={PostAdd}/>
						</Route>
						<Route path="category">
							<IndexRedirect to="/index/category/list"/>
							<Route path="list" component={CategoryList}/>
							<Route path="add" component={CategoryAdd}/>
							<Route path="edit/:id" component={CategoryAdd}/>
						</Route>
						<Route path="users">
							<IndexRedirect to="/index/users/list"/>
							<Route path="list" component={Users}/>
							<Route path="edit/:id" component={UserEdit}/>
							<Route path="add" component={UserEdit}/>
						</Route>
						<Route path="slider">
							<IndexRedirect to="/index/slider/list"/>
							<Route path="list" component={SliderList}/>
						</Route>
						<Route path="setting" component={Setting}/>
					</Route>
					<Route path="login" component={Login}/>
				</Route>
			</Router>
		)
	}
}

const app = document.getElementById('app');
dom.render(<App/>,app);

