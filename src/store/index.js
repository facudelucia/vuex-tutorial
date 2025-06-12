import { createStore } from 'vuex'

export default createStore({
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
  getters: {
    totalItems(state) {
      return state.cart.reduce((sum, p) => sum + p.quantity, 0)
    },
    totalPrice(state) {
      return state.cart.reduce((sum, p) => sum + p.quantity * p.price, 0)
    }
  }
})
