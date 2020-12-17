import{createLead} from 'api/leads/index.js'

export const useCreateLead = () => {
  const addNewLead = async ({data}) =>{
      return await createLead({data})  
  } 
    return [addNewLead]
}