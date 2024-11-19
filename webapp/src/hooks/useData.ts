import {useState,useEffect} from "react";
import axios from "axios"
import { Data } from "@/types";

export const useData =()=>{
    const [data,setData] =useState<Data>();
    const [isLoading,setisLoading] = useState(true);

    const fetchData=()=>{
        axios.get('https://api.adviceslip.com/advice')
        .then((response)=>{
            const {data} =response;
            const {slip} = data;
            setData(slip)
        }).catch((error)=>console.log(error)).finally(()=>setisLoading(false))

    }
    useEffect((
    )=>{
        fetchData()
    },[])
    console.log({data})
    return {data,isLoading,refetch:fetchData}
}