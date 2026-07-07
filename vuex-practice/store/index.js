import{ createStore } from 'vuex'
const store =  createStore({
    state:{
        num:0,
        data:100,
    },
    mutations:{
         add(state){
            state.num++;
         },

         reduc(state){
            state.data--;
         }
    }
})
export default store