import { createContext, useState } from "react";


export const GlobalContext = createContext('null');

export default function GlobalState({ children }) {
    const [searchParam, setSearchParam] = useState('');
    const [loading, setLoading] = useState(false);
    const [recipesData,setRecipesData] = useState([]);
    const [recipeItemDetails,setRecipeItemDetails] = useState();
    async function handleForm(event) {
        event.preventDefault();
        try {
            setLoading(true);
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);
            const data = await res.json();
            console.log(data);
            if(data?.data?.recipes){
                setRecipesData(data?.data?.recipes);
                setLoading(false);
                setSearchParam('');
            }

        } catch (e) {
            console.log(e);
            setLoading(false);
            setSearchParam('');
        }
    }
    console.log(loading,recipesData);



    return (
        <GlobalContext.Provider value={{ searchParam, setSearchParam, handleForm,loading,recipesData,recipeItemDetails,setRecipeItemDetails}}>
            {children}
        </GlobalContext.Provider>
    );
}


