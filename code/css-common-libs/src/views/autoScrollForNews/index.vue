<template>
  <div class="container">
    <div class="news-box">
      <div class="news-title">CSS3新闻无缝滚动</div>
      <div class="news-cotent">
        <div class="inner">
          <div class="news-item"
               v-for="item in list"
               :key="'news'+item.id">
            <span class="desc">{{item.name}}</span>
            <span class="time">{{item.time}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          id: 0,
          name: "无缝滚动无缝滚动",
          time: "2020-12-12",
        },
        {
          id: 2,
          name: "无缝滚动无缝滚动",
          time: "2020-12-12",
        },
        {
          id: 3,
          name: "无缝滚动无缝滚动",
          time: "2020-12-12",
        },
        {
          id: 4,
          name: "无缝滚动无缝滚动",
          time: "2020-12-12",
        },
        {
          id: 5,
          name: "无缝滚动无缝滚动",
          time: "2020-12-12",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  .news-box {
    margin: 30px auto;
    width: 320px;
    height: 180px;
    background: #fff;
    box-shadow: 0 0 10px rgb(235, 183, 183);
    border-radius: 10px;
    .news-title {
      height: 48px;
      line-height: 48px;
      color: #000;
      font-size: 16px;
      font-weight: 400;
      margin-bottom: 10px;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      background-color: #fff;
      border-bottom: 1px solid #ccc;
    }
    .news-cotent {
      width: 100%;
      position: relative;
      height: calc(100% - 48px - 10px);
      padding: 10px;
      box-sizing: border-box;
      overflow: hidden;
      background-color: #fff;

      .inner {
        width: 100%;
        position: absolute;
        left: 0;
        padding: 10px;
        box-sizing: border-box;
        -webkit-animation: 10s rowUp linear infinite;
        animation: 10s rowUp linear infinite;
        animation-play-state: running;
        &:hover {
          animation-play-state: paused;
        }
      }
    }
    .news-item {
      height: 28px;
      line-height: 28px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      cursor: pointer;
      span {
        font-size: 14px;
        color: #666;
        &.time {
          text-align: right;
        }
      }
      &:hover {
        .desc {
          color: #00a0e6!important;
          text-decoration: underline;
        }
      }
    }
  }
}
@keyframes rowUp {
  0% {
    transform: translate3d(0, 0, 0);
  }

  100% {
    transform: translate3d(0, -100%, 0);
  }
}
</style>