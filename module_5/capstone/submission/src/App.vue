<template>
  <div class="container mx-auto px-4">
    <h1 class="m-10 text-center text-4xl font-bold text-yellow-400 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">My Pokemons</h1>
    <div class="grid grid-cols-3 gap-4 mb-5">
      <div class="bg-blue-100 px-10 py-5 text-center rounded-2xl capitalize font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]" v-for="(pokemon, key) in pokemons" :key="key">
        <!--unable to fetch pokemon image as it was removed from github-->
        <p class="text-xl my-5">{{ pokemon.name }}</p>

        <p>ID: {{ pokemon.id }}</p>

        <p>Height: {{ pokemon.height }}</p>

        <p>Weight: {{ pokemon.weight }}</p>

        <p>
          Abilities:
          <span v-for="(ability, key) in pokemon.abilities" :key="key" class="m-2 lowercase inline-block"
          :style="`background: ${getColorFromType(pokemon.types[0].type.name)}; border-radius: 20px; padding: 5px 10px;`"
          >
            {{ ability.ability.name }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { colors } from '@/helpers/colors.js'

export default {
  data() {
    return {
      pokemons: []
    }
  },
  methods: {
    async fetchData() {
      let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon')
      data.results.map(async (obj) => {
        let { data } = await axios.get(obj.url)
        this.pokemons.push(data)
      })
    },
    getColorFromType(type) {
      return colors[type]
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>

<style>

</style>
