<template>
    <div class="wrap">
      <div class="topHeader"></div>
      <div class="selectCompany">
        <span class="text">当前选择:</span>
        <span class="selectedItem">深圳水务财务公司</span>
        <div class="triangle"></div>
      </div>
      <div class="coopapationItem">
        <p>协作事项</p>
        <div class="wrapper">
          <ul class="coopapationList content">
            <li class="coopapationItem">
              <div class="itemImg"></div>
              <span class="itemText">员工工资</span>
            </li>
            <li class="coopapationItem">
              <div class="itemImg"></div>
              <span class="itemText">员工社保</span>
            </li>
            <li class="coopapationItem">
              <div class="itemImg"></div>
              <span class="itemText">银行流水</span>
            </li>
            <li class="coopapationItem" @click="toNewPage('invoice')">
              <div class="itemImg"></div>
              <span class="itemText">发票采集</span>
            </li>
            <li class="coopapationItem" @click="toNewPage('auth')">
              <div class="itemImg"></div>
              <span class="itemText">发票认证</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="companyForm">
        <p class="compangText">企业报表</p>
        <div class="formList">
          <van-row type="flex" justify="space-around">
            <van-col span="6" >
              <div  @click="toNewPage('assets')">
                <div class="itemImg"></div>
                <p class="itemText">企业负债表</p>
              </div>
            </van-col>
            <van-col span="6">
              <div  @click="toNewPage('assetsProfit')">
                <div class="itemImg"></div>
                <p class="itemText">利润表</p>
              </div>
            </van-col>
          </van-row>
          <van-row type="flex" justify="space-around">
            
            <van-col span="6">
              <div  @click="toNewPage('tax')">
                <div class="itemImg"></div>
                <p class="itemText">纳税表</p>
              </div>
            </van-col>
            
            <van-col span="6">
              <div  @click="toNewPage('finance')">
                <div class="itemImg"></div>
                <p class="itemText">提示表</p>
              </div>
            </van-col>
          </van-row>
        </div>
      </div>
      <div class="progressSpeed">
        <p class="title">任务进度</p>
        <div class="progressWrap">
          <div class="progressContent">
            <div class="progressImg">
              <span class="img_text">16</span>
            </div>
            <p class="progressText">财务业务</p>
          </div>
          <div class="progressContent">
            <div class="progressImg">
              <span class="img_text">4</span>
            </div>
            <p class="progressText">综合业务</p>
          </div>
        </div>
      </div>
      <vFooter></vFooter>
    </div>
</template>

<script>
    import BScroll from "better-scroll";
    export default {
        data() {
            return {
              scroll:""
            }
        },
        mounted() {
          this.$nextTick(() =>{
            //动态获取ul的宽度
            let totalWidth=0;
            let div=document.querySelector(".coopapationList")
            let array=Array.from(div.children);
            array.forEach(function (element,index) {
              let style=window.getComputedStyle(element,null)
              index!==array.length-1 ? totalWidth+=parseInt(style.width)+parseInt(style.marginRight) : totalWidth+=parseInt(style.width)
            });
            div.style.width=totalWidth+"px";
            this.$nextTick(()=>{
              if (!this.scroll) {
                this.scroll = new BScroll(".wrapper", {
                  click: true,
                  scrollX: true,
                });
              } else {
                this.scroll.refresh();
              };
            });
          })
        },
        methods:{
          toNewPage:function (path) {
            this.$router.push({
              path
            })
          }
        }
    }
</script>

<style scoped lang='scss'>
  .wrap{
    padding-bottom: 60px;
    width: 100%;
    background-color: #f6faff;
    .topHeader{
      width: 100%;
      height: 186px;
      background: url("../../assets/img/home_page_bg.png")  no-repeat;
      background-size: contain;
    }
    .selectCompany{
      width: 94.7%;
      height: 38px;
      line-height: 38px;
      margin: -19px auto;
      background: #FFFFFF;
      box-shadow: 0 1px 4px 0 #E4E4E4;
      border-radius: 4px;
      box-sizing: border-box;
      padding:0 15px 0 15px;
      span{
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #7D7D7D;
        letter-spacing: 0;
        text-align: left;
      }
      .selectedItem{
        color: #000000;
      }
      .triangle{
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 8px solid #d8d8d8;
        float: right;
        margin-top: 13px;
      }
    }
    .coopapationItem{
      width: 94.7%;
      margin: 30px auto 6px;
      p{
        font-family: PingFangSC-Semibold;
        font-size: 14px;
        color: #8c8d8e;
        padding-left: 12px;
        letter-spacing: 0;
        text-align: left;
      }
      .wrapper{
        overflow: hidden;
        .coopapationList{
          display: flex;
          white-space: nowrap;
          .coopapationItem{
            flex-shrink: 0;
            float: left;
            width: 120px;
            height: 120px;
            box-sizing: border-box;
            padding:15px 0 15px 0;
            background: #FFFFFF;
            margin: 10px 16px 10px 0;
            box-shadow: 0 1px 4px 0 #E4E4E4;
            border-radius: 4px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            flex-wrap: wrap;
            .itemImg{
              width: 41px;
              height: 48px;
              background: url("../../assets/img/salary.svg") no-repeat;
            }
            &:nth-child(2){
              .itemImg{
                background: url("../../assets/img/social_security.svg") no-repeat;
              }
            };
            &:nth-child(3){
              .itemImg{
                background: url("../../assets/img/coopaption_item_bg.svg") no-repeat;
              }
            };

          }
        }
      }
    }
    .companyForm{
      width: 355px;
      height: 218px;
      margin: 10px auto;
      background-color: #fff;
      box-shadow: 0 1px 4px 0 #E4E4E4;
      border-radius: 4px;
      .compangText{
        padding-left: 12px;
        font-family: PingFangSC-Semibold;
        height: 36px;
        line-height: 36px;
        font-size: 14px;
        color: #8c8d8e;
        letter-spacing: 0;
        text-align: left;
        border: 1px solid #EDEDED;
      }
      .formList{
        padding-top: 10px;
        .van-row{
          &:nth-child(1){
            margin-bottom: 24px;
          }
        }
        .itemImg{
          margin: 0 auto 5px;
          width: 50px;
          height: 40px;
          background: url("../../assets/img/tax_bg.png") no-repeat;
          background-size: cover;
        }
        .itemText{
          text-align: center;
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #313131;
          letter-spacing: 0;
        }
      }
    }
    .progressSpeed{
      width: 355px;
      height: 157px;
      margin: 10px auto;
      background: #fff;
      box-shadow: 0 1px 4px 0 #E4E4E4;
      border-radius: 4px;
      .title{
        height: 36px;
        line-height: 36px;
        padding-left: 10px;
        font-family: PingFangSC-Semibold;
        font-size: 14px;
        color: #7D7D7D;
        letter-spacing: 0;
        text-align: left;
        border-bottom: 1px solid #EDEDED;
      }
      .progressWrap{
       
        height: 121px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .progressContent{
          width: 56px;
          height: 80px;
          .progressImg{
            box-sizing: border-box;
            width: 56px;
            height: 56px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            border: 2px solid #3ECBE7;
            .img_text{
              font-family: PingFangSC-Regular, sans-serif;
              color:#313131;
              font-size: 23px;
            }
          }
          .progressText{
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #313131;
            letter-spacing: 0;
            text-align: left;
            width: 56px;
            text-align: center;
            margin-top: 10px;
          }
        }
      }
    }
  }
</style>
