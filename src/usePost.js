
import {useReducer,useEffect} from 'react'
import axios from 'axios'

const reducer = (state,action)=> {
    if(action.type ==='REQUEST'){
      return{
      ...state,
      loading: true
     }
    }
     if(action.type === 'SUCCESS') {
       return{
        ...state,
        loading: false,
        data:action.data
       }
    
     }
      return state
     }
    
    export default usePost