import './FavouritePosts.css'
import { PostsProps } from './../types/types'

const FavouritePosts: React.FC<PostsProps> = ({
  favouritePosts,
  setFavouritePosts
}) => {

  const removeFavourite = (index: number) => {
    const updatedFavourites = [...favouritePosts];
    updatedFavourites.splice(index, 1);
    setFavouritePosts(new Set(updatedFavourites))
  }

  const favourites = [...favouritePosts].map((post, index) => {
      return (
        <>
          <li
            key={post.id}
            className='favourite-post'
          >
            <strong>
              {post.id}) {post.title}
            </strong>
            <button 
              onClick={() => removeFavourite(index)}
              className='removeBtn'
            >
              x
            </button>
          </li>
        </>
      )
    })

  return (
    <>
      {favourites.length > 0
        ? (
          <div className='favourites-container'>
            <h2 className='header'>Избранные посты</h2>
            {favourites}
          </div>
        )
        : (
          <h4 
            className='header'
            style={{
              width: '50%',
              fontSize: '2.5vw'
            }}
          >
            Вы пока что не добавили ни одного поста в избранное
          </h4>
        )
      }
    </>
  )
}

export default FavouritePosts