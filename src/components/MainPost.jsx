import PastPost from "./PastPost";
import NextPost from "./NextPost";
import './MainPost.css'

const MainPost = (props) => {
  const { posts, postId, setPostId } = props;

  const pagePost = posts.length > 0 
    ?
      <h2>
        <strong>
          {posts[postId].id}) {posts[postId].title}
        </strong>
      </h2>
    : <img 
        width="30" 
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fusagif.com%2Fwp-content%2Fuploads%2Floading-96.gif&f=1&nofb=1&ipt=227d70e6346e0c32bce2c013778adffad150676d4a9baf6c1f356ae62377ab4b"
        alt="Загрузка..."
      />

  return (
    <div className="main-container">
      <PastPost
        posts={posts}
        postId={postId}
      />
      {pagePost}
      <NextPost
        posts={posts}
        postId={postId}
      />
    </div>
  )
}

export default MainPost