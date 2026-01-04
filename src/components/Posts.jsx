import React, { useState } from "react";

const Posts = (props) => {
  const { posts, postId, setPostId, favouritePosts, setFavouritePosts } = props;

  const [isClicked, click] = useState(false)
  
  function getPostsList() {
    click(!isClicked);
  }

  function setFavourite(index) {
    const favourites = [...favouritePosts];
    favourites.push(posts[index])
    setFavouritePosts(new Set(favourites))
  }

  const postsList = posts.map((post, index) => {
      return (
        <div>
          <br />
          <li 
            key={post.id}
            onClick={() => setPostId(index)}
          >
            {index == postId
              ? <strong>{post.id}) {post.title}</strong>
              : <>{post.id}) {post.title}</>
            }
            <button
              onClick={(e) => { e.stopPropagation(); setFavourite(index)}}
            >
              ☆
            </button>
          </li>
          
        </div>
      )
    })

  return (
    <>
      <br/>
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
      <br/>
    </>
  )
}

export default Posts