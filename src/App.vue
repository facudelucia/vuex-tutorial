<template>
  <h1>Mini Cart</h1>
  <the-login v-if="store.getters['auth/isLoggedIn'] === false"></the-login>
  <template v-else>
    <product-list></product-list>
    <the-cart></the-cart>
  </template>
</template>

<script setup>
import { useStore } from 'vuex'
import ProductList from './components/ProductList.vue'
import TheCart from './components/TheCart.vue'
import TheLogin from './components/TheLogin.vue'

const store = useStore()

</script>