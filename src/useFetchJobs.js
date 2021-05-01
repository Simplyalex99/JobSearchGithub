import React,{useReducer,useEffect} from 'react'
import axios from "axios";
export const ACTIONS = {
MAKE_REQUEST:'make-request',
GET_DATA :  'get-data',
ERROR: 'error'

}

//google custom hooks react tutorial

const BASE_URL =
  "https://secret-ocean-49799.herokuapp.com/https://jobs.github.com/positions.json";

function reducer(state,action){


switch(action.type){

case ACTIONS.MAKE_REQUEST:
    return {jobs:[],loading:true}
  
case ACTIONS.GET_DATA:
    return {...state, loading:false,jobs:action.payload.jobs}

case ACTIONS.ERROR:
     return { ...state, loading: false, error: action.payload.error }


default:
    return state


}

}


 const useFetchJobs = (params,page) => {
   const [state,dispatch] = useReducer(reducer,{jobs:[],loading:true})


useEffect(()=>{
const cancelToken = axios.CancelToken.source();
dispatch({type:ACTIONS.MAKE_REQUEST})
axios.get(BASE_URL,{
cancelToken: cancelToken.token,
params: {markdown:true,page,...params}


}).then( res=> dispatch({type:ACTIONS.GET_DATA,payload:{jobs:res.data}}))


.catch(error=>{
    
    if(axios.isCancel(error)) return;

    dispatch({type:ACTIONS.ERROR,payload:{error}})})


return () =>{

cancelToken.cancel()

}

},[params,page])

return state;

}



export default useFetchJobs;
