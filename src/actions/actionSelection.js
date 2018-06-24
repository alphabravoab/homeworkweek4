export const ADD_ITEM = 'ADD_ITEM'


 export const updateSelection = (item) => {
   console.log('action creator says',item)
   return{
     type:'ADD_ITEM',
      payload:item
   }
 }
