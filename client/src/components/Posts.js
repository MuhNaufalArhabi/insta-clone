import { useEffect, useState } from "react";

export default function Posts({ post }) {
    const [like, setLike] = useState(0)
    const [iconHeart, setIconHeart] = useState("fa-regular fa-heart")
    const [comments, setComments] = useState([])

    const likeHandler = () => {
        if (like === 0) {
            setIconHeart("fa-solid fa-heart")
            setLike(1)
        } else {
            setIconHeart("fa-regular fa-heart")
            setLike(0)
        }
    }

    const commentHandler = (e) => {
        if (e.key === "Enter") {
            setComments([ e.target.value ,...comments])
            e.target.value = ""
        }
    }

    

    return (<>

    <div class="main-top">
            <div class="main-top-left">
              <img src={post.user.profile_picture} alt="profile picture" />
              <div class="main-top-left-text">
                <h3>{post.user.username}</h3>
              </div>
            </div>
          </div>
          <div class="main-middle">
            <img src={post.images.standard_resolution.url} alt="Images" />
          </div>
          <div class="main-bottom">
            <div class="main-bottom-left">
              <button onClick={likeHandler}>
                <i class={iconHeart}></i>
              </button>
              <button>
                <i class="fa-regular fa-comment"></i>
              </button>
              <button>
                <i class="fa-solid fa-paper-plane"></i>
              </button>
            </div>
            <div class="main-bottom-right">
              <button>
                <i class="fa-solid fa-bookmark"></i>
              </button>
            </div>
          </div>
          <div class="main-bottom-text">
          <div>
            <p>{like} likes</p>
          </div>
          <div>
            <p>{post.user.username} {post.caption.text}</p>
          </div>
          <div className="comments">
            {comments.length > 0 ? (comments.map((comment) => <p>{comment}</p>)): (<p></p>)}
          </div>
          <div>
            <p>view all comments</p>
          </div>
            <p>time</p>
          </div>
          <div class="main-bottom-input">
            <input type="text" placeholder="Add a comment..." onKeyPress={commentHandler}/>
          </div>
    </>)
}