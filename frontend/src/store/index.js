import { createStore } from 'vuex'
import axios from 'axios'
const BASE_URL='http://localhost:8090'

export default createStore({
  state: {
    fruit:[]
  },
  getters: {
  },
  mutations: {
    setFruits(state,data){
      state.fruit=data
    }
    // setAddFruit(state,data){
    //   state.addFruit=data
    // }
  },
  actions: {
    async getFruits({commit}) {
      let {data} = await axios.get(BASE_URL+'/products');
       console.log(data);
      commit("setFruits", data);
    },
    async addFruit({commit},newfruit){
      let {data} =await axios.post(BASE_URL+'/products',newfruit);
      console.log(data);
      window.location.reload()
      // commit ("addFruit")
    },
    async delFruit({commit},id){
     await axios.delete(BASE_URL+'/products/'+id)
     window.location.reload()
    },
    async updateFruit({commit},update){
      await axios.patch(BASE_URL+'/products/'+update.id,update)
      window.location.reload()
    }
  },
  modules: {

  }
})
