<template>
  <div class="page-my">
    <div class="user-info">
      <img class="user-face" src="res/zhanwei.png" />
      <p class="user-name">kim</p>
    </div>
    <div class="user-operate">
      <label class="user-operate-item">每日签到<label class="icon">></label></label>
      <label class="user-operate-item">我的积分<label class="icon">></label></label>
    </div>
  </div>
</template>

<style scoped>
.user-info{
  text-align: center;
  padding: 0.4rem 0;
  border-bottom: 1px solid #fbfbfb;
}
.user-face{
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}
.user-name{
  font-size: 0.34rem;
  line-height: 0.5rem;
  color: #333333;
}
.user-operate{
  padding: 0 0.4rem;
}
.user-operate-item{
  line-height: 1rem;
  font-size: 0.34rem;
  color: #333333;
  display: block;
  border-bottom: 1px solid #fbfbfb;
}
.user-operate-item .icon{
  float: right;
}
</style>
