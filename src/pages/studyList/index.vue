<template>
  <div class="study-list">
    <div class="page-title">
      <p>正在学习</p>
    </div>
    <div class="course-list" @tap="toStudy" >
      <courseItem v-for="item in itemList" :key="item.id" :data="item">
        <template slot="btn">
         <p class="course-btn">继续学习>></p>
        </template>
      </courseItem>
    </div>
  </div>
</template>
<script>
import courseItem from '../../components/courseItem'
export default {
  data(){
    return{
      itemList: [
        {
          name: 'PHP从入门到放弃',
          teach: 'kim',
          total: 30,
          already: 21,
          id: 1
        },
        {
          name: 'JavaScript高级程序设计',
          teach: 'tom',
          total: 72,
          already: 45,
          id: 2
        }
      ]
    }
  },
  components: {
    courseItem
  },
  methods: {
    toStudy(e){
      console.log(e);
      
      let id = e.currentTarget.dataset['id']
      console.log(id);
      
      wx.navigateTo({
          url:'pages/studyDetail/main',
          parameter:{
              course_id:id
          }
      })
    }
  }
}
</script>
<style scoped>
.page-title{
  font-size: 0.32rem;
  color: #333333;
  font-weight: bold;
  line-height: 0.3rem;
  margin-bottom: 0.1rem;
  padding-left: 0.2rem;
}
</style>

