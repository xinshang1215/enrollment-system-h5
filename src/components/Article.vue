<template>
  <div class="article">
    <div v-for="img in imgs" :key="img.id">
      <img :src="img.url" alt="">
    </div>

  </div>
</template>

<script>
export default {
  name: 'Article',
  props: {
    imgs:{
      type:Array,
      default:() => []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
