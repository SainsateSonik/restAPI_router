import React, { Component } from 'react';
import axios from 'axios';

import './Blog.css';
import Post from '../../components/Post/Post';

class Blog extends Component {
    state = {
        posts : []
    }

    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Sonik'
                    }
                })
                this.setState({posts : updatedPosts});
            }).catch(error => {
                // console.log(error);
            });
    }

    loadPost = (id) => {
        this.setState({
            selectedPostId : id
        });
    }

    render () {
        const posts = this.state.posts.map(post => {
            return <Post key={post.id}
                         post={post}
                         clicked={() => this.loadPost(post.id)}/>;
        });
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                
            </div>
        );
    }
}

export default Blog;

