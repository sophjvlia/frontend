<script>
export default {
  data() {
    return {
      selectedNumber: 1,
      selectedOption: '',
      searchOptions: ['planets', 'people', 'films', 'starships', 'species'],
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

  <div class="card">
      <div v-for="(obj, index, key) in data" :key="key">
        <div>
          <div v-if="typeof obj === 'string'">
            {{ index }}: {{ obj }}
          </div>
          <div v-else>
            Data not available
          </div>
        </div>
      </div>
  </div>
</template>

<style scoped>
input, select {
  margin: 0 8px;
  width: 100px;
  text-align: center;
}

.card {
  background: darkslategrey;
  color: whitesmoke;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  border-radius: 20px;
  width: 300px;
  padding: 30px;
  line-height: 25px;
  position: absolute;
  top: 15%;
  left: 35%;
}
</style>
