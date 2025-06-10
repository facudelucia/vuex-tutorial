import { createStore } from 'vuex'
import { authModule } from './auth'

export default createStore({
  modules: {
    auth: authModule
  },
  state: () => ({
    cart: []
  }),
  mutations: {
    addToCart(state, product) {
      const existing = state.cart.find(p => p.id === product.id)
      if (existing) {
        existing.quantity++
      } else {
        state.cart.push({ ...product, quantity: 1 })
      }
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter(p => p.id !== productId)
    }
  },
  actions: {
    addToCart(context, product) {
      context.commit('addToCart', product)
    },
    removeFromCart(context, productId) {
      context.commit('removeFromCart', productId)
    }
  },
  getters: {
    totalItems(state) {
      return state.cart.reduce((sum, p) => sum + p.quantity, 0)
    },
    totalPrice(state) {
      return state.cart.reduce((sum, p) => sum + p.quantity * p.price, 0)
    }
  }
})
