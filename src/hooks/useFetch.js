import { useEffect, useState } from 'react'

    const useFetch = (url) => {
    const [data,setData]=useState(null)
    const [isPending,setIsPending]=useState(true)
    const [error,setError]=useState(null)

useEffect(() => {
        //for unmonunted state change
        const abortCont=new AbortController();
        //delay for display loading for 1 second
        setTimeout(() => {
            fetch(url,{signal:abortCont.signal})
                .then(res=>{
                    if(!res.ok){
                        throw Error('Could not Fetch the Data for Response')
                    }
                    return res.json()
                })
                .then(data=>{
                    setData(data)
                    setIsPending(false)
                    setError(null)
                })
                .catch((e)=>{
                    if(e.name === "AbortError"){
                        console.log('fetch aborted');
                    }
                    setIsPending(false)
                    setError(e.message)
            })
        }, 1000);
        return () => abortCont.abort()
    }, [url]);
    return {data,isPending,error}
}
export default useFetch;