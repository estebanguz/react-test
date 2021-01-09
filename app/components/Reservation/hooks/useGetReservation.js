import {useState,useEffect} from 'react'
import {getReservation } from "enl-api/reservation";

export const useGetReservation = () => { 
    const [response , setResponse] = useState([]);
    const [request ,setRequest] = useState({ page : 1  , size : 10 , filtro : '' })    
    const [search,setSearch] = useState(true)

    useEffect(() => {                   
        if (request.filtro && search) {
            const _time = setTimeout(() => {
                searchReservation()                
            }, 500);
            
            return () => clearTimeout(_time);
        }
        else {           
            searchReservation()            
        }       
    },[request])

    const searchReservation = async () =>{
        const result = await getReservation({ page : request.page,size : request.size , filtro: request.filtro})
        setResponse(result.data.messange)
    }

    return [
        response ,
        request,
        setRequest ,     
        setSearch        
    ]
}
