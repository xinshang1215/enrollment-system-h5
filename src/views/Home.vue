<template>
  <div class="home">
    <Article :imgs="imgs"></Article>
  </div>
</template>

<script>
import Article from "@/components/Article";
export default {
  name: 'Home',
  components: { Article },
  data(){
    return{
      imgs:[
        {
          id:1,
          url:"./img/1.png"
        },        {
          id:2,
          url:"./img/2.png"
        }
      ]
    }
  },
  created() {
  },
  methods:{

  }
}
</script>
