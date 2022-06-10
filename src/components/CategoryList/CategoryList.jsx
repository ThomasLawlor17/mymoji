// css
import './CategoryList.css'


// Components
import CategoryListItem from "../CategoryListItem/CategoryListItem"

export default function CategoryList() {
  return (
    <div className='CategoryList'>
        <h1>Category List</h1>
        <CategoryListItem />
        <CategoryListItem />
        <CategoryListItem />
        <CategoryListItem />
    </div>
  )
}
