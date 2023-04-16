<template>
  <input type="text" v-model="message">
  <button @click="emitData" :style="inputStyle">Emit data</button>
</template>

<script>
export default {
  emits: ['message'],
  data() {
    return {
      message: 'Hello, there!'
    }
  },
  methods: {
    emitData() {
      let message = this.message;
      this.$emit('message', message)
    }
  },
  inject: ["inputStyle"]
}
</script>

<style>
  input {
    border-radius: 20px;
    padding: 5px 10px;
  }
</style>
