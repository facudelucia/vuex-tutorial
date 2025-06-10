<template>
  <div>
    <ProductItem
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script setup>
import ProductItem from './ProductItem.vue'

const products = [
  { id: 1, name: 'Shirt', price: 20 },
  { id: 2, name: 'Pants', price: 35 },
  { id: 3, name: 'Shoes', price: 50 }
]
</script>
