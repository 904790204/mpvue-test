<template>
  <div class="page-1">
    <div class="page-section">
      <div class="search-section">
        <!-- 搜索区域 -->
        <icon class="search-icon" type="search"></icon>
        <input class="search-input" type="text" placeholder="搜索课程">
        <!-- 轮播图 -->
      </div>
      <div class="swiper-section">
         <Swiper :data="swiperList"></Swiper>
      </div>
      <div class="hori-scroll-view" v-if="tabList.length">
        <!-- 横向scrollview区域 -->
        <label v-for="item in tabList" :class="{on:tabId == item.id}" @click="switchTabs(item.id)" :key="item.id">{{item.name}}</label>
      </div>
      <div class="course-list" v-if="courseList.length">
        <courseItem v-for="item in courseList" :key="item.id" :data="item" @click.native="toCourseDetails(item.id)"></courseItem>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from '@/components/swiper/index.vue';
import courseItem from '../../components/courseItem';
export default {
  components: {
    Swiper,
    courseItem
  },
  data() {
    return {
      tabId: 1,
      swiperList: [],
      tabList:[],
      courseList: []
    };
  },
  methods: {
    // 切换tabbar
    switchTabs(id){
      this.tabId = id
      console.log(id)
    },
    // 去课程详情页
    toCourseDetails(id){
      wx.navigateTo({
          url:'pages/courseDetail/courseDetail',
          parameter:{
              course_id:id
          }
      })
    },
    // 获取用户信息
    getUser(){
      wx.$ajax.getUser()
      .then(res=>{
        getApp().globalData.userName = res.userName
        getApp().globalData.userId = res.userId
        getApp().globalData.userFace = res.userFace
      })
    },
    // 获取banner列表
    getBanner(){
      wx.$ajax.getBanner()
      .then(res=>{
        this.swiperList = res
      })
    },
    // 获取tabbar列表
    getTabbar(){
      wx.$ajax.getTabbar()
      .then(res=>{
        this.tabList = res
      })
    },
    // 获取课程列表
    getCourse(){
      wx.$ajax.getCourse()
      .then(res=>{
        console.log(res);
        
        this.courseList = res
      })
    }
  },
  created(){
    this.getUser()
    this.getBanner()
    this.getTabbar()
    this.getCourse()
  }
};
</script>
<style scoped>
.search-section{
  margin-bottom: 0.1rem;
}
.search-section .search-icon{
  font-size: 0.5rem;
  color: #ccc; 
  position: absolute;
  top: 0.25rem;
  left: 0.25rem;
}
.search-section .search-input{
  background: rgba(242, 242, 242, 1);
  height: 0.8rem;
  border-radius: 0.38rem;
  padding-left: 0.7rem;
  box-sizing: border-box;
}
.hori-scroll-view{
  height: 0.6rem;
  line-height: 0.6rem;
  overflow-x: auto;
}
.hori-scroll-view label{
  margin: 0 0.2rem;
  font-size: 0.32rem;
  color: #333333;
}
.hori-scroll-view label.on{
  font-weight: 700;
  color: red;
}
</style>
