import React from 'react';
import RecipeList from './RecipeList';
// import {getUserById,getId} from '../../services/auth_service';


const Main=({recipes})=>{
    // const [user,setUser]=useState([]);
    

// useEffect(()=>{
//     let id=getId();
//     getUserById(id).then(res =>{
//         setUser(res.data.user);
//     });
// },[])
// console.log(user)

    return(
    
        <div className='main'>
            <RecipeList recipes={recipes}/>
        </div>
    )
}

export default Main;