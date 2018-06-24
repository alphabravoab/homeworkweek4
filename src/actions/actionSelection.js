export const ADD_ITEM = 'ADD_ITEM'


 export const updateSelection=(event)=>{
   console.log('test',event)
   return{
     type:'ADD_ITEM',
      payload:event

   }
 }
