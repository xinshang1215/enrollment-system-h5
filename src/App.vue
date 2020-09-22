
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
  comments:[
    Bar
  ],
  data(){
    return{

    }
  }
}
</script>
<style lang="scss">
@import "styles/base.scss";
</style>
