<template>
  <div class="fish">
    <h2>Fish Component</h2>

        <p>This component uses one filter that is defined in another file, and 
        the same filter is also used by another component.
        </p>


    <p>This page is about {{ name | uppercase }}!</p>

    <p>{{ 'This text uses a local filter' | fishify }} </p>
    
  </div>
</template>

<script>

// import the filter(s) needed from their file 
import { uppercase } from '@/utilities/filters.js'

export default {
  name: 'FishInfo',
  props: {
    name: String
  },
  filters: { 
    // list the names of imported filters here
    uppercase,
    // if this component has a specific filter, define as usual 
    // I couldn't think of anything useful :)
    fishify(data) {
      return `FISH FISH FISH - ${data} - FISH FISH FISH`
    }
  }
}
</script>

<style scoped>

.fish {
  background: palegoldenrod;
}

</style>
