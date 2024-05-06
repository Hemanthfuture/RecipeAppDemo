import { Link } from "react-router-dom";




export default function RecipeItem({item}){
    // console.log(item.id);
    return(
        <div className="recipeItem">
            <img src={item.image_url} className="recipeImage" alt="" />
            <p className="item-publisher">{item.publisher}</p>
            <h3 className="item-title">{item.title}</h3>
            <Link to={`/details/${item.id}`} className="detail-button">Recipe Details</Link>
        </div>
    )
}