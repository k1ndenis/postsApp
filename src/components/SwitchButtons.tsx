import './SwitchButtons.css'
import { PostsProps } from './../types/types'

const SwitchButtons: React.FC<PostsProps> = ({
  posts,
  postId,
  setPostId
}) => {

  const getNextPost = () => {
    if (postId != posts.length - 1) {
      setPostId(postId + 1)
    } else {
      setPostId(0)
    }
  }
  const getPastPost = () => {
    if (postId != 0) {
      setPostId(postId - 1)
    } else {
      setPostId(posts.length - 1)
    }
  }

  return (
    <div className="switch-buttons">
      <button
        className='past-button'
        onClick={() => setTimeout(getPastPost, 100)}
      >
        Предыдуший пост
      </button>
      <button
        className='next-button'
        onClick={() => setTimeout(getNextPost, 100)}
      >
        Следующий пост
      </button>
    </div>
  )
}

export default SwitchButtons