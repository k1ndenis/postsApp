import React, { useState } from "react";
import './Posts.css';
import { PostsProps } from '../types/types.ts';

const Posts: React.FC<PostsProps> = ({
  posts,
  setPosts,
  postId,
  setPostId,
  favouritePosts,
  setFavouritePosts
}) => {

  const [isClicked, setClicked] = useState(false);
  const [isHovered, setHovered] = useState(false);
  const [isEditingIndex, setEditingIndex] = useState<number | null>(null);
  const [currentValue, setCurrentValue] = useState<string>("");

  type InputChange = React.ChangeEvent<HTMLInputElement>;
  type InputKeyDown = React.KeyboardEvent<HTMLInputElement>;

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setCurrentValue(posts[index].title);
  };

  const handleChange = (e: InputChange) => setCurrentValue(e.target.value);

  const handleSave = (index: number) => {
    const updatedPosts = [...posts];
    updatedPosts[index].title = currentValue;
    setPosts(updatedPosts);
    setEditingIndex(null);
  };

  const handleKeyDown = (e: InputKeyDown, index: number) => {
    if (e.key === 'Enter') handleSave(index);
  };

  const toggleFavourite = (index: number) => {
    const post = posts[index];
    const favourites = [...favouritePosts];
    if (favourites.includes(post)) {
      setFavouritePosts(new Set(favourites.filter(p => p.id !== post.id)));
    } else {
      favourites.push(post);
      setFavouritePosts(new Set(favourites));
    }
  };

  const handleClick = () => setClicked(prev => !prev);
  const handleMouseEnter = () => !isClicked && setHovered(true);
  const handleMouseLeave = () => !isClicked && setHovered(false);

  const shouldShowPosts = isClicked || (!isClicked && isHovered);

  const postsList = posts.map((post, index) => {
    const isFavourite = favouritePosts.has(post);

    return (
      <div key={post.id} className="posts-container">
        <li 
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
                color: isFavourite ? "gold" : "white",
                boxShadow: isFavourite
                  ? "0 0 1.5rem rgb(250, 205, 4)"
                  : "0 0 1.5rem rgb(155, 137, 137)"
              }}
            />
          ) : (
            <span
              className={isFavourite ? "favourite-post-title" : "post-title"}
              style={{ color: isFavourite ? "gold" : "grey" }}
              onDoubleClick={() => handleEdit(index)}
            >
              {index === postId ? (
                <strong
                  style={{
                    color: isFavourite ? "transparent" : "white",
                    background: "linear-gradient(45deg, white, #FFD700)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text"
                  }}
                >
                  {post.id}) {post.title}
                </strong>
              ) : (
                <>{post.id}) {post.title}</>
              )}
            </span>
          )}
          <button onClick={() => handleEdit(index)} className="edit-btn">✎</button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleFavourite(index);
            }}
            className="set-favourite-btn"
            style={{ color: isFavourite ? "gold" : "grey" }}
          >
            ☆
          </button>
        </li>
      </div>
    );
  });

  return (
    <div>
      <div className="posts-button-container">
        <button
          className="posts-button"
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isClicked ? "Спрятать все посты" : "Показать все посты"}
        </button>
      </div>

      {shouldShowPosts && postsList}
    </div>
  );
};

export default Posts;