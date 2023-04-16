<template>
  <div id="app">
    <PageContainer />
  </div>
</template>

<script>
import PageContainer from '@/components/PageContainer.vue'

export default {
  components: { PageContainer }
}
</script>

<style>
  #app {
    border: 2px solid purple;
    padding: 5px;
  }
</style>
