<template>
    <button @click="login()">
        Login
    </button>
</template>
<script setup>
import { useStore } from 'vuex';

const store = useStore()
function login() {
    store.dispatch('auth/login')
}
</script>