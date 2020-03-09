<template>
  <view class="course-detail">
    <view class="course-video"></view>
    <view class="course-info">
      <label class="course-name">PHP从入门到放弃</label>
      <label class="course-remarks">这里是简介简介，这里是简介简介，这里是简介简介，这里是简介简介</label>
      <label class="course-label">共72课时 | 999人学习</label>
    </view>
    <view class="course-tabbar">
      <label @click="switchBar(1)" :class="{on:viewType === 1}">课程介绍</label>
      <label @click="switchBar(2)" :class="{on:viewType === 2}">课程目录</label>
    </view>
    <courseIntroduce v-if="viewType === 1" :list="commentList"></courseIntroduce>
    <courseOutline v-if="viewType === 2" :list="outlineList"></courseOutline>
  </view>
</template>
<script>
import courseIntroduce from '../../components/courseIntroduce'
import courseOutline from '../../components/courseOutline'
export default {
  data(){
    return{
      viewType: 1,
      commentList: [
        {
          id: '1',
          face: '',
          name: 'kim',
          time: '2020-02-08 21:00:00',
          content: '这个课不错，对我很有帮助，哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
        }
      ],
      outlineList: [
        {
          id: '1',
          title: 'css基础介绍',
          children: [
            {
              id: '2',
              pid: '1',
              title: '1.clear的值和特点及伪元素before和after的使用，知道不'
            },
            {
              id: '3',
              pid: '1',
              title: '3.flex布局技巧'
            }
          ]
        }
      ]
    }
  },
  methods: {
    switchBar(type){
      this.viewType = type
    }
  },
  components: {
    courseIntroduce,
    courseOutline
  }
}
</script>
<style scoped>
.course-video{
  width: 100%;
  height: 4rem;
  background: #999999;
  overflow: hidden;
}
.course-info{
  padding: 0.2rem 0.2rem 0;
}
.course-name{
  font-size: 0.36rem;
  color: #333333;
  display: block;
  line-height: 0.4rem;
  margin-bottom: 0.1rem;
}
.course-remarks{
  font-size: 0.30rem;
  color: #666666;
  display: block;
  line-height: 0.4rem;
  margin-bottom: 0.1rem;
}
.course-label{
  font-size: 0.30rem;
  color: #333333;
  display: block;
  line-height: 0.4rem;
  padding-bottom: 0.2rem;
  border-bottom: 1px solid #666666;
}
.course-tabbar{
  display: flex;
  justify-content: center;
  height: 0.8rem;
}
.course-tabbar label{
  font-size: 0.38rem;
  font-weight: bold;
  margin: 0 0.2rem;
  line-height: 0.8rem;
  border-bottom: 2px solid transparent;
}
.course-tabbar .on{
  color: #D9001B;
  border-color: #D9001B;
}
</style>

