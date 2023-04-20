<template>
  <div class="product">
    <AppContainer />
  </div>
</template>

<script>
import AppContainer from '@/components/AppContainer.vue'

export default {
  name: 'Product',
  components: {
    AppContainer
  }
}
</script>

<style scoped>
  .product {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 30px;
  }
</style>
