import {useState,useEffect} from 'react'
import {getReservation } from "enl-api/reservation";

export const useGetReservation = () => { 
    const [data , setData] = useState([]);
    const [request ,setRequest] = useState({page : 1  , size : 10 })
    useEffect(()=>{         
        console.log("se llamo ")      
        llamar()               
    },[request])

    const llamar = async () =>{
        const result = await getReservation({ page : request.page,size : request.size})        
        setData(result.data.messange)
    }

    return [data ,setRequest ,setData]
}
