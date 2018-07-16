import React from 'react';
import {withRouter} from 'react-router-dom'; // HOC: A higher order component
import './Post.css';

const post = (props) => {
    console.log(props);    
    return(
        <article className="Post" onClick={props.clicked}>
            <h1>{props.title}</h1>
            <div className="Info">
                <div className="Author">{props.author}</div>
            </div>
        </article>
    );
}
export default withRouter(post); // by wrapping with withRouter, we are making this component route aware and then it will get the props containg information from the nearest containing loaded route