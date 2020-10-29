import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    productType: [
      
    ],
    products: [
      
    ],
  },
  getters: {
    showLast: state => {
      return state.products
    }
  },
  mutations: {
    deleteProductType: state => {
      const type = document.querySelector('#type')
      state.productType = state.productType.filter(x => x != type.value)
    }
  },
  actions: {
    deleteProductType: context => {
      context.commit('deleteProductType')
    }
  }
})