<template>
  <div class="page-container">
    <div class="box-container">
      <div class="box-item">
        <div class="img-box">
          <img class="img"
               src="~@/assets/imgs/1.jpg"
               alt="">
        </div>

        <div class="text">测试数据</div>
      </div>
      <div class="box-item">
        <div class="img-box"> <img class="img"
               src="~@/assets/imgs/2.jpg"
               alt=""></div>

        <div class="text">测试数据</div>
      </div>
      <div class="box-item">
        <div class="img-box"> <img class="img"
               src="~@/assets/imgs/3.jpg"
               alt=""></div>

        <div class="text">测试数据</div>
      </div>
      <div class="box-item">
        <div class="img-box"><img class="img"
               src="~@/assets/imgs/4.jpeg"
               alt=""></div>

        <div class="text">测试数据</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "imgDemo1",
};
</script>
<style lang="less" scoped>
.box-container {
  width: 1000px;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  .box-item {
    flex: 0 0 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    box-sizing: border-box;
    transition: all 0.4s ease-in-out;
    box-shadow: 0 0 5px #ccc;
    cursor: pointer;
    margin-bottom: 25px;
    border-radius: 4px;
    .img-box {
      position: relative;
      width: 100%;
      height: 200px;
      overflow: hidden;
      border-width: 0;
      .img {
        display: block;
        width: 100%;
        height: 100%;
        transition: all 1s ease-in-out;
      }
    }

    .text {
      width: 100%;
      height: calc(100% - 200px);
      padding: 0 10px;
    }
    &:hover {
      transform: translate3d(0, -10px, 0);
      .img-box {
        img {
          transform: scale(1.2);
        }
      }
    }
  }
}
</style>