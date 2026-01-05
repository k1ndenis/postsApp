import { useState } from "react";
import './Posts.css'

const Posts = (props) => {
  const { posts, postId, setPostId, favouritePosts, setFavouritePosts } = props;

  const [isClicked, click] = useState(false)
  
  function getPostsList() {
    click(!isClicked);
  }

  function setFavourite(index) {
    let favourites = [...favouritePosts];
    if (favourites.includes(posts[index])) {
      const removedId = favourites.findIndex(post => postId == posts[index].id)
      favourites.splice(removedId, 1);
      setFavouritePosts(new Set(favourites))
    } else {
    favourites.push(posts[index])
    setFavouritePosts(new Set(favourites))
    }
  }

  const postsList = posts.map((post, index) => {
      return (
        <div className="posts-container">
          <li 
            key={post.id}
            className="post"
            onClick={() => setPostId(index)}
            style={{
              color: [...favouritePosts].includes(posts[index])
                ? "gold"
                : "grey"
            }
          }
          >
            <span className="post-title">
              {index == postId
                ? <strong>{post.id}) {post.title}</strong>
                : <>{post.id}) {post.title}</>
              }
            </span>
            <button
              onClick={(e) => { e.stopPropagation(); setFavourite(index)}}
              className="set-favourite-btn"
              style={{
              color: [...favouritePosts].includes(posts[index])
                ? "gold"
                : "grey"
            }}
            >
              ☆
            </button>
          </li>
        </div>
      )
    })

  return (
    <>
      {isClicked 
        ? <div>
            <button
              onClick={getPostsList}
            >
              Спрятать все посты
            </button> 
            {postsList}
          </div>
        : <div>
            <button
              onClick={getPostsList}
            >
            Показать все посты
            </button>
          </div>}
    </>
  )
}

export default Posts