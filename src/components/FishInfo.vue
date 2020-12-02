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

// no { } in this import
import TextFilterMixin from '@/mixins/TextFilterMixin.js'

export default {
  name: 'FishInfo',
  props: {
    name: String
  },
  mixins: [ TextFilterMixin ],   // an array - can have many mixins
  filters: { 
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
