import React, {Component} from 'react';
import { Paper } from '@material-ui/core';


class Post extends Component{
    render() {
        const{title} =this.props.info;
    return(
        <Paper className="post">
            <p className="post_tittle" cols="10">
            <b>
                <span className="post-preview">
                    {title.rendered.length >25 ? `${title.rendered.substr(0,25)}...`:title.rendered}
                </span>
            </b>
            </p>
        </Paper>
    );
    }
}
export default Post;