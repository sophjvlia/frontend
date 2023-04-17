<template>
  <div class="container">
    <h1>Currency Converter</h1>

    <div class="currency">
      <div>
        <input type="text" v-model="left.value">

        <select name="" id="" v-model="left.option">
          <option :value="key" v-for="(rate, key) in rates" :key="key">
            {{ key }}
          </option>
        </select>
      </div>

      <span>to</span>

      <div>
        <input type="text" v-model="convertedValue">

        <select name="" id="" v-model="right.option">
          <option :value="key" v-for="(rate, key) in rates" :key="key">
            {{ key }}
          </option>
        </select>
      </div>
    </div>

    <button @click="convertValue">Convert</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      rates: {},
      left: {
        value: '',
        option: ''
      },
      right: {
        value: '',
        option: ''
      },
      convertedValue: null
    }
  },
  methods: {
    fetchData() {
      axios
      .get('https://api.exchangerate.host/latest?base=USD')
      .then((res) => (this.rates = res.data.rates));
    },
    convertValue() {
      axios
      .get('https://api.exchangerate.host/convert?from=' + this.left.option + '&to=' + this.right.option + '&amount=' + this.left.value)
      .then((res) => (this.convertedValue = res.data.result))
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.currency {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

input, select {
  margin: 25px 5px;
  padding: 5px 15px;
  border: 1px solid gray;
  border-radius: 20px;
  box-shadow: 1px 1px 1px gainsboro;
  height: 30px;
}

span {
  margin: 0px 10px;
  font-size: 1rem;
}

button {
  border: none;
  border-radius: 20px;
  background: lightblue;
  padding: 10px 15px;
  font-size: 1rem;
}

</style>
