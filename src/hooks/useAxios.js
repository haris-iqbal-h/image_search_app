import { useEffect, useState } from 'react'
import axios from 'axios'

const useAxios = (param) => {
    const [response,setResponse]=useState([])
    const [error,setError]=useState([])
    const [isLoading,setIsLoading]=useState([])

    axios.defaults.baseURL="https://api.unsplash.com"
    
    const fetchData=async (url)=>{
        try{
            setIsLoading(false)
            const res=await axios(url);
            setResponse(res.data.results)
        }catch(err){
            setError(err)
        }finally{
            setIsLoading(false)
        }
    }
    
    useEffect(() => {
        fetchData(param);
    }, [param])
    
    return {
        data:response,
        error,
        isLoading,
        fetchData:url=>fetchData(url)
    }
}

export default useAxios