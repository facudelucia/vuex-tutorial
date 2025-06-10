<template>
    <div>
        {{ props.product.name }} - ${{ props.product.price }}
        <button @click="add()">Add to cart</button>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const props = defineProps(['product'])

function add() {
    //store.commit('addToCart', props.product)
    store.dispatch('addToCart', props.product)
}
</script>
