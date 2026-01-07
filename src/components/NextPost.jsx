import React from "react"

const NextPost = (props) => {
  const { posts, postId, favouritePosts } = props;


  const nextPost = () => {
    if (posts.length == 0) return null;

    const nextPostId = postId == posts.length - 1
      ? 0
      : postId + 1;

    const nextPost = posts[nextPostId];

    return (
      <span
        style={{
          color: [...favouritePosts].includes(posts[postId + 1])
            ? "gold"
            : ""
          }
        }
      >
        {nextPost.id}) {nextPost.title}
      </span>
    )
  }
    

  return (
    <>
      {nextPost()}
    </>
  )
}

export default NextPost