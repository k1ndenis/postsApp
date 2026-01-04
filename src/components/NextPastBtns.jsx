const NextPastBtns = (props) => {
  const { posts, postId, setPostId } = props;

  function getNextPost() {
    if (postId != posts.length - 1) {
      setPostId(postId + 1)
    } else {
      setPostId(0)
    }
  }
  function getPastPost() {
    if (postId != 0) {
      setPostId(postId - 1)
    } else {
      setPostId(posts.length - 1)
    }
  }

  return (
    <>
      <button
        onClick={getPastPost}
      >
        Предыдуший пост
      </button>
      <button
        onClick={getNextPost}
      >
        Следующий пост
      </button>
    </>
  )
}

export default NextPastBtns