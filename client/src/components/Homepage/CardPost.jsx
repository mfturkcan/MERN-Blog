import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, {Component} from 'react';

export default class CardPost extends Component{

    constructor(props){
        super(props);
        this.state = {
        }  
    }

    render(){
        return(
            <Card style={{width:300}} cover={<img
                alt="example"
                src={this.props.imgUrl}
              />}
            hoverable>
                <Meta title={this.props.title.toUpperCase()} description={this.props.content}/>
            </Card>
        );
    }

}