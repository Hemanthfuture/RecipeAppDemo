import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../components/hookcontext";

export default function Details() {
    const { id } = useParams();
    const { recipeItemDetails, setRecipeItemDetails } = useContext(GlobalContext);

    useEffect(() => {
        async function getItemDetails() {
            try {
                const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
                const detail = await res.json();

                if (detail.data.recipe) {
                    setRecipeItemDetails(detail.data.recipe);
                    console.log(recipeItemDetails);
                }
            } catch (e) {
                console.log(e);
            }
        }

        getItemDetails();

    }, [id, setRecipeItemDetails]);

    return (
        <div className="total-box">
            <div className="item-left">
                {recipeItemDetails && (
                    <img src={recipeItemDetails.image_url} alt="image is loading" />
                )}
            </div>
            <div className="item-right">
                
                
                {recipeItemDetails && (
                    <>
                    {/* <h1>Recipe Details </h1> */}
                    <h3>{recipeItemDetails.title}</h3>
                    <p>{recipeItemDetails.publisher}</p>
                    <button>Save As Favorite</button>
                    <h4>Ingredients : </h4>
                    {
                        recipeItemDetails.ingredients.map((item,index)=>(
                            <h5 key={index}>{item.description}</h5>
                            ))
                        }
                    </>
                )}
            </div>
        </div>
    );
}
