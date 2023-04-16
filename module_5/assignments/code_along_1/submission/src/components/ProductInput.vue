<template>
  <input type="text" v-model="message">
  <button @click="emitData">Emit data</button>
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

  button {
    margin-left: 5px;
    background: lightblue;
    border: none;
    border-radius: 20px;
    padding: 5px 10px;
    box-shadow: 1px 2px 1px gainsboro;
  }

  button:hover {
    background: lightskyblue;
    color: white;
  }
</style>
