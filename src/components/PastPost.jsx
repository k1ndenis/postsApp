import React from "react"

const PastPost = (props) => {
  const { posts, postId, favouritePosts } = props;


  const pastPost = () => {
    if (posts.length == 0) return null;

    const prevPostId = postId == 0
      ? posts.length - 1
      : postId - 1;

    const prevPost = posts[prevPostId];

    return (
      <span 
        style={{
          color: [...favouritePosts].includes(posts[postId - 1])
            ? "gold"
            : ""
          }
        }
      >
        {prevPost.id}) {prevPost.title}
      </span>
    )
  }
    

  return (
    <>
      {pastPost()}
    </>
  )
}

export default PastPost