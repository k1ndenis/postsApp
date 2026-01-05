import React from "react"

const PastPost = (props) => {
  const { posts, postId } = props;


  const pastPost = () => {
    if (posts.length == 0) return null;

    const prevPostId = postId == 0
      ? posts.length - 1
      : postId - 1;

    const prevPost = posts[prevPostId];

    return (
      <>
        {prevPost.id}) {prevPost.title}
      </>
    )
  }
    

  return (
    <>
      {pastPost()}
    </>
  )
}

export default PastPost