<template>
  <view class="container">
    <page-section >
      <swiper
        :indicator-dots="showDots"
        :autoplay="isAutoPlay"
        :duration="durationData"
        :interval="intervalData"
        :vertical="isVertical"
        :circular="circular"
        @change="swiperChange"
        style=" height: 2.8rem;"
      >
        <swiper-item @click="handleItemClick" v-for="item in data" :key="item.id" style="border: none" class="box frame1">
          <img style="width: 100%;height:auto" :src="item.url" alt="">
        </swiper-item>
      </swiper>
      
    </page-section>
  </view>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      showDots: true,
      isAutoPlay: true,
      durationData: 500,
      intervalData: 2000,
      isVertical: false,
      circular: false,
      current: 0
    };
  },
  methods: {
    dotsChange(e) {
      this.showDots = e.detail.value;
    },
    autoPlayChange(e) {
      this.isAutoPlay = e.detail.value;
    },
    verticalChange(e) {
      this.isVertical = e.detail.value;
    },
    intervalChange(e) {
      this.intervalData = e.detail.value;
    },
    durationChange(e) {
      this.durationData = e.detail.value;
    },
    circularChange(e) {
      this.circular = e.detail.value;
    },
    currentChange(e) {
      this.current = 2;
    },
    swiperChange(e) {
      console.log(e.detail);
    },
    handleItemClick() {
      // wbx.navigateTo({
        
      // })
    }
  }
};
</script>

<style>

.box{
  width: 100%;
  height: auto;
  border:1px solid #333;
  background: #333;
}
.operate {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.operate > view {
  width: 7.5rem;
}

.operate .page-cell-section {
  display: flex;
  justify-content: space-between;
}
.operate .page-cell-section .wbx-switch {
  margin-right: 0.1rem;
}
.operate .page-cell-section .slider {
  flex-grow: 1;
}

</style>