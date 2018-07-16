import React, { Component } from 'react';
// import axios from 'axios';
//import axios from '../../axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import './Blog.css';
import Posts from '../../containers/Blog/Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                activeClassName="my-active"
                                activeStyle={{ color: '#fa923f', fontWeight: 'bold', textDecoration: 'underline' }}
                                to="/" exact>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                search:   '?quick-submit=true', // query string
                                hash:     '#submit' // To jumb to the element
                            }}>New post</NavLink></li>
                        </ul>
                    </nav>
                </header>

                { /*<Route path="/" exact render={ () => { return(<h1>Home</h1>); } } />*/ }
                <Route path="/" exact component={Posts} />
                <Switch> { /*The orde is important especially when using switch*/ }
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/posts/:id" exact component={FullPost} />
                    { /*<Redirect from="/" to="/posts" />*/ }

                    <Route component={ () => <h1 style={{'textAlign':'center'}}>Not found!</h1> }/>
                </Switch>
            </div>
        );
    }
}

export default Blog;