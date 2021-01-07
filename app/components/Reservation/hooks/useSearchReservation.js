import {useState,useEffect} from 'react'
import {getSaearchReservation } from "enl-api/reservation";

export const useSearchReservation = () => { 
    const [response, setResponse] = useState([]);
    const [filtro,setFiltro] = useState('')
    useEffect(()=>{                
        llamar()               
    },[filtro])

    const llamar = async () =>{
        const result = await getSaearchReservation({filtro : filtro})        
        setResponse(result.data.messange)        
    }

    return [response,filtro,setFiltro]
}
