import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Icon from '../icon-18.png'
import {connect} from 'react-redux'
import { axios } from 'axios'

class Home extends Component {
    // state = {
    //     posts :[],

    // }

//     async componentDidMount() {
//         var res = await axios.get('https://jsonplaceholder.typicode.com/posts');
//         // var data = await res.json();
//         this.props.updatePost(res);
     
//   }
    // componentDidMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then( res =>{
    //         //console.log(res)
    //         // let posts = res.data.slice(0,10);
    //         this.setState({
    //             posts: res.data.slice(0, 10)
    //         })
    //     })
    // }
    render() {
        const {posts} = this.props;
        console.log("my data : ",this.props);
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="posts card" key={post.id}>
                        <img src={Icon} alt="Post Background"/>
                        <div className="card-item apost">
                            <Link to={'/'+post.id}>
                            <span className="card-title green-text open">{post.title.toUpperCase()}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>    
                    </div>
                )
            })
        ):(
            <div className="center">No posts yet!</div>
        )
        return (
            <div className="container center home" >
                <h3 className="blue-text center">Home Page</h3>
                {postList}
            </div>
        )
    }   
}
const mapStateToProps = (state) =>{
   return{
       posts: state.posts
   }   
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         updatePost : (allpost) =>{dispatch({type:'ADD_POST',posts:allpost}) }
//     }
// }

export default connect(mapStateToProps)(Home)
