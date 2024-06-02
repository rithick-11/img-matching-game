const ImgList = ({imagesList, category, toCheakImg}) => {
  const categoryImg = imagesList.filter(each => each.category === category)
  return (
    <ul className="grid grid-cols-4 md:grid-cols-5 gap-2 md:gap-3 w-fit mx-auto my-5">
      {categoryImg.map(each => (
        <li key={each.thumbnailUrl}>
          <button type="button" onClick={() => toCheakImg(each.id)}>
            <img
              src={each.thumbnailUrl}
              alt="thumbnail"
              className="md:h-[15vh] hover:scale-95"
            />
          </button>
        </li>
      ))}
    </ul>
  )
}
export default ImgList
