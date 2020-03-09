<template>
  <div class="course-outline">
    <div class="outline-box" v-for="(one,i) in list" :key="one.id">
      <p class="outline-title">{{one.title}}</p>
      <div class="outline-item" v-for="(two,j) in one.children" :key="two.id" @click="toVideo(two.id)">{{two.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props:['list'],
  data() {
    return {
      commentValue: ''
    }
  },
  methods: {
    toVideo(id){
      this.$emit('switch',id)
    }
  }
}
</script>
<style scoped>
.course-outline{
  padding: 0.2rem 0.4rem;
}
.outline-box{
  margin-bottom: 0.1rem;
}
.outline-title{
  font-size: 0.32rem;
  font-weight: bold;
  line-height: 0.6rem;
}
.outline-item{
  font-size: 0.28rem;
  color: #333333;
  padding-left: 0.4rem;
  line-height: 0.4rem;
  margin-bottom: 0.1rem;
}
</style>

