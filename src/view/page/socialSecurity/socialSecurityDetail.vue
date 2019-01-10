<template>
  <div class="socialSecurity">
    <div class="detail">
      <div class="item">
        <div class="labal">所属期</div>
        <div class="items_value">2018-09</div>
      </div>
      <div class="picture">
        <div class="labal">文件</div>
        <div class="items_pic">
            <img src="http://img18.3lian.com/d/file/201710/30/c680bf49cc2234cfa52d480fde0d07c6.jpg" alt="">
            <img src="http://img18.3lian.com/d/file/201710/30/c680bf49cc2234cfa52d480fde0d07c6.jpg" alt="">
            <img src="http://img18.3lian.com/d/file/201710/30/c680bf49cc2234cfa52d480fde0d07c6.jpg" alt="">
        </div>
      </div>
      <div class="item">
        <div class="labal">备注</div>
        <div class="items_value">发票有点多，不太好弄</div>
      </div>
    </div>
    <div class="etit_history">
      <h3>修改记录</h3>
      <div class="item"><div class="labal">创建人</div><div class="item_value">李辞</div></div>
      <div class="item"><div class="labal">创建时间</div><div class="item_value">2018年12月11日 17:32:31</div></div>
      <div class="item"><div class="labal">最后修改人</div><div class="item_value">客户</div></div>
      <div class="item"><div class="labal">最后修改时间</div><div class="item_value">2018年12月11日 17:32:31</div></div>
    </div>
  </div>
</template>
<script>
export default {
  name:"socialSecurityDetail",
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
.detail{
  width: 355px;
  margin: 10px auto 0;
  background: #FFFFFF;
  box-shadow: 0 1px 4px 0 #EFEFEF;
  border-radius: 4px;
}
.picture{
  display: flex;
}
.picture .labal{
  margin-left: 20px;
  margin-right: 11px;
}
.items_pic{
  background: #D8D8D8;
  display: flex;
  padding-bottom: 6px;
  /* justify-content: space-around; */
  width: 265px;
  /* height: 265px; */
}
.items_pic img{
  margin: 6px 0 0 6px;
  display: block;
  width: 80px;
  height: 80px;
}
.etit_history{
  width: 355px;
  margin: 10px auto 0;
  background: #FFFFFF;
  box-shadow: 0 1px 4px 0 #EFEFEF;
  border-radius: 4px;
}
.item{
  display: flex;
  width: 345px;
  margin: 0 auto;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #7D7D7D;
  padding: 14px 0;
}
.labal{
  width: 50px;
  overflow: hidden;
  white-space: pre-wrap;
  margin: 0 14px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #313131;
}
h3{
  height: 36px;
  line-height: 36px;
  margin-left: 10px;
  font-family: PingFangSC-Medium;
  font-size: 12px;
  color: #7D7D7D;
}
</style>
