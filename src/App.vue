
<template>
  <div id="app">
    <router-view/>
    <Bar></Bar>
  </div>
</template>
<script>
import Bar from "@/components/Bar";

export default {
  name:"app",
  components: {Bar},
  data(){
    return{

    }
  }
}
</script>
<style lang="scss">
@import "styles/base";
@import "styles/public";
</style>
