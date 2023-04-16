<template>
  <AppContainer />
</template>

<script>
import AppContainer from '@/components/AppContainer.vue'

export default {
  components: { AppContainer },
  provide: {
    inputStyle: {
      "margin-left": "5px",
      background: "lightgreen",
      color: "blue",
      border: "1px solid purple",
      padding: "5px 10px",
      "border-radius": "20px"
    }
  }
}
</script>

<style>

</style>
