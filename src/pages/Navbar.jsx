import { NavLink } from "react-router-dom";
import Home from "./Home";
import Favorites from "./Favorites";
import { useContext } from "react";
import { GlobalContext } from "../components/hookcontext";




export default function Navbar(){
    const {searchParam,setSearchParam,handleForm} = useContext(GlobalContext);
    // console.log(searchParam);
    return(
        <div>
            <nav className="navbar">
                <h3>
                <NavLink to={'/'} className={'navd'}>
                        Food Recipe
                    </NavLink>
                </h3>
                <form onSubmit={handleForm}>
                    <input 
                    type="text" 
                    name="search"
                    placeholder="Enter foods......."
                    value={searchParam}
                    onChange={(event)=>{
                        
                            const newparam = event.target.value;
                            setSearchParam(newparam);
                        
                    }}
                    />
                </form>
                <div className="sideButtons">
                    <NavLink to={'/'} className={'navd sidebuttons' } >
                        Home
                    </NavLink>
                    <NavLink to={'/favorites'} className={'navd sidebuttons'}>
                        Favorites
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}