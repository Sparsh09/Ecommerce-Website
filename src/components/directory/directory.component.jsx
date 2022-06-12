import CategoryList from "../category-item/category-item.component";
import "./directory.styles.scss";
const Directory = ({ categories }) => {
    return <div className="directory-container">
        {
            categories.map(item => <CategoryList category={item} />)
        }

    </div>
}

export default Directory;