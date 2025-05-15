import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:"mycart",
    initialState:{
        cart:[]
    },
    reducers:{
        addtoCart:(state,actions)=>{
            console.log(actions.payload)
          let data=state.cart.filter((item)=>item.id==actions.payload.id);
          if(data.length>=1){
            
               alert("Product Already Added")
          }
          else{
            state.cart.push(actions.payload);
          }
        },
        cartrecDel:(state, actions)=>{
          state.cart=state.cart.filter((key)=>key.id!=actions.payload);
        
        },


        addQnty:(state, actions)=>{

          for(var i=0; i<state.cart.length; i++)
          {
              if (state.cart[i].id==actions.payload)
              {
                  state.cart[i].qnty+=1;
                  //state.cart[i].qnty= state.cart[i].qnty+1;

              }
          }
      },

      DelQnty:(state, actions)=>{

        for(var i=0; i<state.cart.length; i++)
        {
            if (state.cart[i].id==actions.payload)
            {
                if (state.cart[i].qnty<=1)
                {
                   message.error("Quantity not less than 1");
                }
                else 
                {
                    state.cart[i].qnty-=1;
                    //state.cart[i].qnty= state.cart[i].qnty-1;
                }
               

            }
        }
    }
    }
})
export default cartSlice.reducer;
export const {addtoCart,cartrecDel,addQnty,DelQnty}=cartSlice.actions;