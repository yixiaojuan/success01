<template>
  <div>
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 2" :key="item">
        <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
        <img src="../img/1.webp" alt="" class="img">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>

export default {
  name: "loginView",
};

</script>

<style scoped>
.img{
  /* width: 200px; */
  height: 100%;

}
/* 
.el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background: url(../img/1.webp) no-repeat center;
  height: 500px;
  width: 100%;
  overflow: hidden;
}

.el-carousel__item:nth-child(2n + 1) {
  background: url(../img/2.webp) no-repeat center;
  height: 500px;
  width: 100%;
  overflow: hidden;
} */
</style>