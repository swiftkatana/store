import history from '../history';

import server from '../api/myserver';
import {SIGN_IN,SIGN_OUT, CREATE_USER, LOGIN,CREATE_ITEM,FETCH_ITEM,FETCH_ITEMS,EDIT_ITEM,DELETE_ITEM,ADD_ITEM_CART,DELETE_ITEM_CART}  from '../actions/types';


export const signIn =(userId)=>{
    return {
        type:SIGN_IN,
        payload:userId
    };
}
export const signOut =()=>{
    return {
        type:SIGN_OUT,
    };
}

export const createItem =formValues => async (dispatch) =>{
 
const res = await server.post("/additem",formValues,{
    onUploadProgress:ProgressEvent=>{
        console.log("upload progres :" + Math.floor(ProgressEvent.loaded /ProgressEvent.total*100))
    }
    
});
console.log(res.data)

dispatch({type:CREATE_ITEM,payload:res.data});
// setTimeout(()=>{history.push("/")},100) ;

};


export const fetchItems =(whatToTake)=> async dispatch =>{
    const res = await server.get('/items'+whatToTake,{
        onUploadProgress:ProgressEvent=>{
            console.log("upload progres :" + Math.floor(ProgressEvent.loaded /ProgressEvent.total*100))
        }
        
    });
    dispatch({
        type:FETCH_ITEMS,
        payload:res.data
    });

}

export const fetchItem =(ITEMId)=> async dispatch =>{
    const res = await server.get(`/item${ITEMId}`);

    dispatch({
        type:FETCH_ITEM,
        payload:res.data
    });
}



export const editItem =(ITEMId,formValues)=> async dispatch=>{
    const res = await server.put(`/ITEM/edit`,{id:ITEMId,formValues});
    dispatch({type:EDIT_ITEM,payload:res.data}) 
    setTimeout(()=>{history.push("/")},50) ;

}

export const deleteStream = rendId =>  dispatch =>{
     server.delete(`/streams/delete/${rendId}`);
    dispatch({type:DELETE_ITEM,payload:rendId});
   setTimeout(()=>{history.push("/")},40) ;
}
export const createUser=(formValues,signIn)=> async dispatch=>{
 const res = await server.post('/register',formValues);
 dispatch({type:CREATE_USER,payload:res.data})
 if(res.data!=='eror'&&res.data!=='dup'){
    signIn(res.data._id);
    history.push('/');
}
}
export const loginUser=(formValues,signIn)=> async dispatch=>{
    console.log("login")
    const res = await server.post('/login',formValues);
    dispatch({type:LOGIN,payload:res.data})
console.log(res.data)
    if(res.data!=='eror'&&res.data!=='not found'&&res.data!=='not good'){
        signIn(res.data._id);

        history.push('/');

    }


   }


   export const addItemToStore=(item)=>dispatch=>{
    dispatch({
        type:ADD_ITEM_CART,
        payload:item
    })

   }

   
   export const deleteItemFromStore=(item)=>dispatch=>{

   }