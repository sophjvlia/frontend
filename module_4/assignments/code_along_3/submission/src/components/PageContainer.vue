<template>
  <div id="page-container">
    <ClientPage />
  </div>
</template>

<script>
import ClientPage from '@/components/ClientPage.vue'

export default {
    components: { ClientPage },
    beforeCreate() {
        console.log('beforeCreate()')
    },
    created() {
        console.log('created()')
    }
}
</script>

<style>
    #page-container {
        border: 2px solid green;
        padding: 5px;
    }
</style>