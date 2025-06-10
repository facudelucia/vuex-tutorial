<template>
  <div>
    <h2>Cart</h2>
    <div v-for="item in store.state.cart" :key="item.id">
      {{ item.name }} x{{ item.quantity }} - ${{ item.price * item.quantity }}
      <button @click="remove(item.id)">Delete</button>
    </div>
    <p>Items: {{ store.getters.totalItems }}</p>
    <p>Price: ${{ store.getters.totalPrice }}</p>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()

function remove(id) {
  //store.commit('removeFromCart', id)
  store.dispatch('removeFromCart', id)
}
</script>
