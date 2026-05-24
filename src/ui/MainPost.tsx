import PastPost from "./PastPost";
import NextPost from "./NextPost";
import './MainPost.css'
import loadingGif from './../images/loading.gif'
import { MainPostProps } from './../types/types'

const MainPost: React.FC<MainPostProps> = ({
  posts,
  postId,
  favouritePosts
}) => {

  const pagePost = posts.length > 0 
    ? (
      <>
        <PastPost
          posts={posts}
          postId={postId}
          favouritePosts={favouritePosts}
        />
        <h2>
          <strong
            style={{
              color: [...favouritePosts].includes(posts[postId])
                    ? "gold"
                    : ""
            }}
          >
            {posts[postId].id}) {posts[postId].title}
          </strong>
        </h2>
          <NextPost
            posts={posts}
            postId={postId}
            favouritePosts={favouritePosts}
          />
        </>
    )
    : <img
        width="30" 
        className="loading-gif"
        src={loadingGif}
        alt="Загрузка..."
      />

  return (
    <div className="main-container">
      {pagePost}
    </div>
  )
}

export default MainPost