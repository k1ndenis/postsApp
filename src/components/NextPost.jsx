import React from "react"

const NextPost = (props) => {
  const { posts, postId } = props;


  const nextPost = () => {
    if (posts.length == 0) return null;

    const nextPostId = postId == posts.length - 1
      ? 0
      : postId + 1;

    const nextPost = posts[nextPostId];

    return (
      <>
        {nextPost.id}) {nextPost.title}
      </>
    )
  }
    

  return (
    <>
      {nextPost()}
    </>
  )
}

export default NextPost