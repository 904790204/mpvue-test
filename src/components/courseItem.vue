<template>
  <div class="course-item" :data-id="data.id">
    <div class="course-face"></div>
    <div class="course-info">
      <p class="course-name">{{data.name}}</p>
      <p class="course-teach">授课人·{{data.teach}}</p>
      <p class="course-time">
        <label v-if="data.hasOwnProperty('total')">{{data.total}}课时</label>
        <label v-if="data.hasOwnProperty('already')"> | 已学{{data.already}}课时</label>
        <label v-if="data.hasOwnProperty('person')"> | {{data.person}}人学习</label>
      </p>
      <p class="course-price" v-if="data.hasOwnProperty('price')">限时{{data.price}}元</p>
      <slot name="btn"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  
}
</script>

<style scoped>
.course-item{
  display: flex;
  padding: 0.2rem;
  margin-bottom: 0.2rem;
  border-bottom: 1px solid #bfbfbf;
}
.course-face{
  width: 2rem;
  height: 2rem;
  border: 1px solid #999999;
}
.course-info{
  flex-grow: 1;
  padding-left: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.course-name{
  color: #333333;
  font-size: 0.3rem;
  line-height: 0.6rem;
  font-weight: bold;
}
.course-teach{
  color: #666666;
  font-size: 0.3rem;
}
.course-time{
  color: #666666;
  font-size: 0.3rem;
}
.course-price{
  color: #666666;
  font-size: 0.3rem;
}
.course-btn{
  color: #169BD5;
  font-size: 0.3rem;
  line-height: 0.5rem;
  margin-top: auto;
}
</style>
