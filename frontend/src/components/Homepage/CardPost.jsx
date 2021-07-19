import { Card, Image } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class CardPost extends Component{

    constructor(props){
        super(props);
        this.state = {
        }  
    }

    render(){
        return(
            <Card cover={
                <Image src={this.props.imgUrl} width={200} height={200}>
                    
                </Image>
            } hoverable>
                <Meta title={this.props.title} description={this.props.content}/>
            </Card>
        );
    }

}