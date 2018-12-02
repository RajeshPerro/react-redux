import React, {Component} from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../action/postActions'
class PostDetails extends Component {
    // state = {
    //     id : null,
    //     postdetails : []
    // }
    
    // async componentDidMount (){
        
    //     let id = this.props.match.params.post_id
    //     let url = 'https://jsonplaceholder.typicode.com/posts/'+id;
    //     // console.log(url);
    //     let res = await axios.get(url);
        
    //     this.setState({
    //         postdetails : res.data
    //     })
    //     console.log(this.state.postdetails)
    // }
    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }
    render ()
    {
        console.log(this.props)
        const postdetails = this.props.post ? (
            <div className="post center">
                <h4 className="red-text">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <button className="btn grey" onClick={this.handleClick}>Delete Post</button>
            </div>
           
        ):(
            <div className="center">Post is loading..</div>
        )
        return(
            <div className="container">
               {postdetails}
            </div>
        )
    }
}

const mapStateToProps = (state,route_id) =>{
    let id = route_id.match.params.post_id;
    return{
        post : state.posts.find( post => {
            return post.id === id
        })
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => dispatch(deletePost(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostDetails)