<template>
  <div class="socialSecurity">
    <nav class="tabbar"></nav>
    <div class="social_header">
      <div class="num">序号</div>
      <div class="time">所属期</div>
      <div class="status">状态</div>
      <div class="document">文件</div>
    </div>
    <ul class="social_body">
      <router-link class="social_item"  :to="{name: 'socialSecurityDetail'}" tag="li">
        <div class="num">1</div>
        <div class="time">2018-06</div>
        <div class="status">未上传</div>
        <div class="document"><van-icon name="photo-o" /></div>
      </router-link>
      <router-link class="social_item"  :to="{name: 'socialSecurityDetail'}" tag="li">
        <div class="num">1</div>
        <div class="time">2018-06</div>
        <div class="status">未上传</div>
        <div class="document"><van-icon name="photo-o" /></div>
      </router-link>
      <router-link class="social_item"  :to="{name: 'socialSecurityDetail'}" tag="li">
        <div class="num">1</div>
        <div class="time">2018-06</div>
        <div class="status">未上传</div>
        <div class="document"><van-icon name="photo-o" /></div>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name:"socialSecurity",
  data() {
    return {
      // active:1
    }
  }
}
</script>
<style scoped>
html,body{
    height: 100%;
}
.socialSecurity{
    background-color: #f9f9f9;
    height: 600px;
    flex: 1;
    overflow: auto;
}
.tabbar{
  background-image: linear-gradient(-90deg, #3EECAE 0%, #09AED1 100%);
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
.social_header{
  width: 355px;
  height: 50px;
  background: #FFFFFF;
  box-shadow: 0 1px 4px 0 #EFEFEF;
  border-radius: 4px;
  margin: -25px auto 0;
  line-height: 50px;
  display: flex;
  justify-content: space-around;
}
.social_body{
  width: 355px;

  margin: 10px auto 0;
}
.social_item{
  background: #FFFFFF;
  width: 355px;
  border-top: 1px solid #EFEFEF;
  display: flex;
  justify-content: space-around;
  height: 60px;
  line-height: 60px;
}
</style>
