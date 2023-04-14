<script>
export default {
  data() {
    return {
      selectedNumber: 1,
      selectedOption: '',
      searchOptions: ['planets', 'people'],
      data: {}
    }
  },
  methods: {
    getData() {
      fetch(`https://swapi.dev/api/${this.selectedOption}/${this.selectedNumber}`)
      .then(res => res.json())
      .then(data => {
        console.log('SUCCESS')
        this.data = data
      })
      .catch(err => console.log(err))
    }
  }
}
</script>

<template>
  <select v-model="selectedOption">
    <option v-for="(option, key) in searchOptions" :key="key" :value="option">
      {{ option }}
    </option>
  </select>

  <input type="number" v-model="selectedNumber">

  <button @click="getData">Submit</button>

  <div class="data" v-for="(obj, index, key) in data" :key="key">
    <p>{{ index }}: {{ obj }}</p>
  </div>
</template>

<style scoped>
input, select {
  margin: 0 8px;
  width: 100px;
}

div.data {
  background: gainsboro;
  margin: 15px;
  padding: 10px;
  border-radius: 20px;
}
</style>
