<template>
  <div id="app">
    
    <h1>{{ appName }}</h1>

    <fish-info v-bind:name="fishName"/>

    <plant-info 
    v-bind:instruction="plantCareInstructions"
    v-bind:details="plantInstructionDetails"></plant-info>
  </div>
</template>

<script>

import FishInfo from '@/components/FishInfo.vue'
import PlantInfo from '@/components/PlantInfo.vue'

import { APP_NAME } from '@/utilities/data.js'

// if you need only one item from the file, list as follows
// import { double } from '@/utilties/math_utils.js'
import { double, tripleArrayValues } from '@/utilities/math_utils.js'

export default {
  name: 'App',
  components: {
    FishInfo,
    PlantInfo
  },
  data() {
    return {
      appName: APP_NAME,
      fishName: 'Goldfish',
      plantCareInstructions: 'water your plants frequently',
      plantInstructionDetails: 'Ensure that your plants are watered frequently so that they don\'t dry out, but avoid overwatering.'
    }
  },
  mounted() {
    
    // calling general utility functions from vue component
    let twoTimesFour = double(4)
    alert(`Two times four is ${twoTimesFour}`)

    alert(tripleArrayValues([1, 3, 4]))
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
</style>
