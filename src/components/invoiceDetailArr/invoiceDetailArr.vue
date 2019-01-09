<template>
  <div class="invoiceDetailArr">
    <div class="invoiceItem">
      <div class="section_one" v-for="(item,index) in arrContent" :key="index">
        <span :class="key" v-for="(value,key) in item"  v-if="key!=='file' && key!=='arrow'">
          {{value}}
        </span>
        <img :class="key" v-for="(value,key) in item" class="invoiceImg"  v-if="key=='file'" :src="value"/>
        <div  v-if="key=='arrow'" :class="key" v-for="(value,key) in item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-iconfontjiantou5"></use>
          </svg>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
    //这是列表组件（1，2018-06，0，已上传，图片）(适用于1.4.1, 1.5.1, 1.6.1 ,1.7.1, 1.8.1 , 1.9.1,)
    export default {
        props:{
          arrContent:Array //具体内容列表
        },
        data() {
            return {}
        },
        
    }
</script>

<style scoped lang='scss'>
  .invoiceDetailArr{
    width: 94.7%;
    margin: 10px auto;
    .invoiceItem{
      width: 100%;
      .section_one{
        width: 100%;
        height: 60px;
        line-height: 60px;
        display: flex;
        background-color: #fff;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px 0 15px;
        box-sizing: border-box;
        margin-bottom:1px;
        img{
          background: no-repeat ;width:26px;height: 30px
        }
      }
    }
  }
</style>
