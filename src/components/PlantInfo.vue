<template>
  <div class="plant">
  
    <h2>Plant Component</h2>

    <p>This component uses two filters that are defined in another file</p>

    <p>Care instructions: it is very important to 
      {{ instruction | uppercase }} 
      to keep your plants healthy.</p>

    <p>Detailed instructions follow {{ details | truncate(40) }}.</p>

    <button v-on:click="seeMessage">See a message</button>

  </div>
</template>

<script>

import { uppercase, truncate } from '@/utilities/filters.js'

export default {
  name: 'PlantInfo',
  props: {
    instruction: String,
    details: String
  },
  filters: {
    uppercase,
    truncate
  },
  methods: {
    seeMessage() {
      // use the filter, from the utilities.js file, in code
      let message = truncate(this.details, 60)
      alert(message)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.plant {
  background: lightblue;
}
</style>
