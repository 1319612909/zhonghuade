import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

  const store = new Vuex.Store({
  state: {
	active:'personInfo'
  },
  mutations: {
    setActive:(state,val)=>{
      state.active = val
    }
  },
  actions: {
    //
  },
  getters: {
    active:state=>{
      return state.active
    }
  }
 
})
export default store