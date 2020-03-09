<template>
  <view class="study-detail">
    <view class="study-video">
      <video></video>
    </view>
    <view class="study-tabbar">
      <label @click="switchBar(1)" :class="{on:viewType === 1}">评论列表</label>
      <label @click="switchBar(2)" :class="{on:viewType === 2}">课程大纲</label>
    </view>
    <courseComment v-if="viewType === 1" :list="commentList"></courseComment>
    <courseOutline v-if="viewType === 2" :list="outlineList"></courseOutline>
  </view>
</template>
<script>
import courseComment from '../../components/courseComment'
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
      console.log(this.viewType);
      
    }
  },
  components: {
    courseComment,
    courseOutline
  }
}
</script>
<style scoped>
.study-detail{

}
.study-video{
  width: 100%;
  height: 4rem;
  background: #999999;
  overflow: hidden;
}
.study-tabbar{
  display: flex;
  justify-content: center;
  height: 0.8rem;
}
.study-tabbar label{
  font-size: 0.38rem;
  font-weight: bold;
  margin: 0 0.2rem;
  line-height: 0.8rem;
  border-bottom: 2px solid transparent;
}
.study-tabbar .on{
  color: #D9001B;
  border-color: #D9001B;
}
</style>

