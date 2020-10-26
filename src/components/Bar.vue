<template>
  <div id="bar">
    <div>
      <span v-if="enrollPrice">￥</span>
      <span>{{price}}</span>
    </div>
    <div>
      <button>立即报名</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "bar",
  data() {
    return {
      enrollPrice:0,
    }
  },
  computed:{
    price:function (val){
      val = this.enrollPrice
      return val === 0 ? "免费" : val
    }
  },
  created() {
    // this.axios.get("/enrollContent")
    //     .then(res => {
    //       console.log(res)
    //     }).catch(err => {
    //   console.log(JSON.stringify(err))
    // })
  }
}
</script>

<style scoped>

</style>