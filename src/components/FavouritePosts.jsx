import './FavouritePosts.css'

const FavouritePosts = (props) => {
  const { favouritePosts, setFavouritePosts } = props;

  const removeFavourite = (index) => {
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
    <div className='favourites-container'>
      {favourites.length > 0
        ? (
          <>
            <h2 className='header'>Избранные посты</h2>
            {favourites}
          </>
        )
        : (
          <h4 className='header'>
            Вы пока что не добавили ни одного поста в избранное
          </h4>
        )
      }
      
    </div>
  )
}

export default FavouritePosts