import React from "react";
import posts from "../assets/img/posts-icon.png";
import friends from "../assets/img/friends-icon.png";

class PostsAmigos extends React.Component {
    render() {
        return (
            <div className="Posts-Amigos">
                <button type="button" className="Btn-Posts-Amigos"><img className="Posts-Amigos-Item" src={posts} alt="posts"/> <h4>100 Posts</h4></button>
                <button type="button" className="Btn-Posts-Amigos"><img className="Posts-Amigos-Item" src={friends} alt="friends"/>300 Amigos</button>
            </div>
        )
    }
}
export default PostsAmigos;