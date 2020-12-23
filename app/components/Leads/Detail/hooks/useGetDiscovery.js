import {useState,useEffect} from 'react'
import {getDiscovery} from '../../../../api/discovery/index'

export const useGetDiscovery = ({id_lead}) => {
    const[discovery,setDiscovery] = useState([])    
    useEffect(() => {
        if (discovery.length <= 0) {
            getData()                
        }
    },[discovery])

    const getData = async () => {
        const data = await getDiscovery()        
        setDiscovery(data.data.message)      
    };     
    return [discovery]
}