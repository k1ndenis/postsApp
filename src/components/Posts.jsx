import { useState } from "react";
import './Posts.css'

const Posts = (props) => {
  const { 
    posts, setPosts, postId, setPostId, favouritePosts, setFavouritePosts
  } = props;

  const [isClicked, click] = useState(false);
  const [isEditingIndex, setEditingIndex] = useState(null);
  const [currentValue, setCurrentValue] = useState("");
  
  const getPostsList = () => {
    click(!isClicked);
  }

  const handleEdit = (index) => {
    setEditingIndex(index);
    setCurrentValue(posts[index].title);
  }

  const handleChange = (e) => {
    const newValue = e.target.value;
    setCurrentValue(newValue);
  }

  const handleSave = (index) => {
    const editedPosts = [...posts];
    editedPosts[index].title = currentValue;
    setPosts(editedPosts);
    setEditingIndex(null);
  }

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter') {
      handleSave(index)
    }
  }

  const setFavourite = (index) => {
    const favouritePost = posts[index]
    const favourites = [...favouritePosts];
    if (favourites.includes(favouritePost)) {
      const updatedFavourites = favourites.filter(post => post.id !== favouritePost.id);
      setFavouritePosts(new Set(updatedFavourites))
    } else {
    favourites.push(favouritePost)
    setFavouritePosts(new Set(favourites))
    }
  }

  const postsList = posts.map((post, index) => {
      const isFavourite = [...favouritePosts].includes(posts[index])
      return (
        <div className="posts-container">
          <li 
            key={post.id}
            className="post"
            onClick={() => setPostId(index)}
          >
            {isEditingIndex === index ? (
              <input
                type="text"
                value={currentValue}
                onChange={handleChange}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onBlur={() => handleSave(index)}
                autoFocus
                className="editing-input"
                style={{
                  color: isFavourite
                    ? "gold"
                    : "white",
                  boxShadow: isFavourite
                    ? "0 0 1.5rem rgb(250, 205, 4)"
                    : "0 0 1.5rem rgb(155, 137, 137)"
                }}
              />) : (
                <span 
                  className={isFavourite
                    ? "favourite-post-title" 
                    : "post-title"}
                  style={{
                    color: isFavourite
                      ? "gold"
                      : "grey"
                  }}
                  onDoubleClick={() => handleEdit(index)}
                  >
                  {index == postId
                    ? <strong
                      style={{
                        color: isFavourite
                          ? "transparent"
                          : "white",
                        background: "linear-gradient(45deg, white, #FFD700)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                      }}
                >
                {post.id}) {post.title}
                </strong>
                : <>{post.id}) {post.title}</>
                }
                </span>
              )
            }
            <button 
              onClick={() => handleEdit(index)}
              className="edit-btn"
            >
              ✎
            </button>
            <button
              onClick={(e) => { 
                e.stopPropagation(); 
                setFavourite(index)}
              }
              className="set-favourite-btn"
              style={{
                color: [...favouritePosts].includes(posts[index])
                  ? "gold"
                  : "grey"
                }
              }
            >
              ☆
            </button>
          </li>
        </div>
      )
    })

  return (
    <div>
      {isClicked 
        ? <div>
            <div className="posts-button-container">
              <button
                className="posts-button"
                onClick={getPostsList}
              >
                Спрятать все посты
              </button> 
            </div>
            {postsList}
          </div>
        : <div>
            <div className="posts-button-container">
              <button
                className="posts-button"
                onClick={getPostsList}
              >
              Показать все посты
              </button>
            </div>
          </div>}
    </div>
  )
}

export default Posts