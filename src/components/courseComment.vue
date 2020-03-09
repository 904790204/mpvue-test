<template>
  <view class="course-comment">
    <view class="comment-list">
      <view class="comment-item" v-for="item in list" :key="item.id">
        <view class="comment-face"></view>
        <view class="comment-info">
          <text class="comment-name">{{item.name}}</text>
          <text class="comment-time">{{item.time}}</text>
          <text class="comment-content">{{item.content}}</text>
        </view>
      </view>
    </view>
    <view class="comment-edit">
      <input class="comment-input" type="text" v-model="commentValue" placeholder="评论" />
      <button class="comment-btn" @click="submit">发送</button>
    </view>
  </view>
</template>

<script>
export default {
  props: ['list'],
  data() {
    return {
      commentValue: ''
    }
  },
  methods: {
    submit(){
      
    }
  }
}
</script>

<style scoped>
.course-comment{
}
.comment-list{
  padding-top: 0.2rem;
}
.comment-item{
  display: flex;
  border-bottom: 1px solid #bfbfbf;
  margin-bottom: 0.2rem;
  padding: 0.1rem 0.2rem;
}
.comment-face{
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: #999999;
}
.comment-info{
  flex: 1;
  padding: 0 0.2rem;
}
.comment-name{
  font-size: 0.28rem;
  line-height: 0.4rem;
}
.comment-time{
  font-size: 0.24rem;
  line-height: 0.4rem;
  color: #666666;
  margin-bottom: 0.1rem;
}
.comment-content{
  font-size: 0.28rem;
  line-height: 0.4rem;
  color: #333333;
}
.comment-edit{
  position: fixed;
  width: 100%;
  height: 0.8rem;
  left: 0;
  bottom: 0;
  background-color: rgba(242, 242, 242, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 0 0.2rem; */
}
.comment-input{
  flex: 4;
  height: 0.4rem;
  margin: 0 0.2rem;
  border-radius: 4px;
  padding-left: 0.2rem;
}
.comment-btn{
  flex: 1;
  height: 0.4rem;
  border: none;
  background-color: #ffffff;
  border-radius: 4px;
  font-size: 0.28rem;
  margin-right:0.2rem;
}
</style>
