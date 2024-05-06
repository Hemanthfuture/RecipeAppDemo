import { useContext } from "react"
import { GlobalContext } from "../../components/hookcontext"
import RecipeItem from "../../components/recipeitem";

export default function Home(){

    const {loading,recipesData} = useContext(GlobalContext);
    console.log(recipesData);
    if(loading){
        return(

            <div><h3> Loading Data , Please Wait.....</h3></div>
        )
    }

    return(
        <div className="recipeContainer">
        {
            recipesData&&recipesData.length>0?
            recipesData.map((item ,index)=>(

                <RecipeItem key={index} item={item}/>
            )
            )

            : <div className="noData"> <h3 className="noData">No Data . Please enter any food item...</h3></div>
        } 
        

        </div>
    )
}