import React, {Component} from 'react';
import {useParams} from 'react-router-dom';

export default class Post extends Component{
    constructor(props){
        super(props);
        this.state = {}


    }

    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <img src={this.props.imgUrl} alt="postImg"/>
                <p>
                    {this.props.content}
                </p>
            </div>
        );
    }
}

