<template>
    <div>
        {{ props.product.name }} - ${{ props.product.price }}
        <button @click="add()">Add to cart</button>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps(['product'])

function add() {

}
</script>
