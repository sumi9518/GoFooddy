import React, {Component} from 'react';
import Post from './Post';

class Listing extends Component{
    showPosts = () => {
        const posts = this.props.posts;

        if(posts.length===0){
            return null;
        }
        return (
            <div className="post_list_item">
                <React.Fragment>
                    {Object.keys(posts).map(post => (
                        <Post key={post.id}
                        info={this.props.posts[post]} />
                    ))}
                </React.Fragment>
            </div>
        );
    }
    render() {
        return(
            <div className="post_list">
                {this.showPosts()}
            </div>

        );
     
    }
    }

export default Listing;