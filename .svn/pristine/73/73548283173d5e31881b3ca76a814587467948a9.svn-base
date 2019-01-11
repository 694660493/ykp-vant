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
            <li class="coopapationItem">
              <div class="itemImg"></div>
              <span class="itemText">员工社保</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="companyForm">
        <p>企业报表</p>
        <div class="formList">
          <div class="formItem">
            <div class="fromImg"></div>
            <p>企业负债表</p>
          </div>
          <div class="formItem">
            <div class="fromImg"></div>
            <p>利润表</p>
          </div>
          <div class="formItem">
            <div class="fromImg"></div>
            <p>纳税表</p>
          </div>
          <div class="formItem">
            <div class="fromImg"></div>
            <p>提示表</p>
          </div>
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
        mounted:function () {
          this.$nextTick(function () {
            //动态获取ul的宽度，但是还是不能滑动
            let totalWidth=0;
            let div=document.querySelector(".coopapationList")
            Array.from(div.children).forEach(function (element,index) {
              let style=window.getComputedStyle(element,null)
              totalWidth+=parseInt(style.width)
            });
            console.log(totalWidth);
            div.style.width=totalWidth+"px";
            this.$nextTick(()=>{
              if (!this.scroll) {
                this.scroll = new BScroll(".wrapper", {
                  click: true
                });
              } else {
                console.log("进入刷新方法");
                this.scroll.refresh();
              };
            });
            console.log(this.scroll);
          })
          
        }
    }
</script>

<style scoped lang='scss'>
  .wrap{
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
      margin: 30px auto;
      p{
        font-family: PingFangSC-Semibold;
        font-size: 14px;
        color: #7D7D7D;
        letter-spacing: 0;
        text-align: left;
      }
      .wrapper{
        width: 100%;
        .coopapationList{
          display: flex;
          flex-wrap: nowrap;
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
              background: url("../../assets/img/coopaption_item_bg.svg");
            }
          }
        }
      }
    }
    .companyForm{
      width: 355px;
      height: 218px;
      margin: 10px auto;
      background-color: #fff;
      p{
        font-family: PingFangSC-Semibold;
        padding-left: 10px;
        height: 36px;
        line-height: 36px;
        font-size: 14px;
        color: #7D7D7D;
        letter-spacing: 0;
        text-align: left;
      }
      .formList{
        border-top: 1px solid #f6faff;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 30px 0px 30px;
        flex-wrap: wrap;
        .formItem{
          flex-shrink: 0;
          width: 70px;
          height: 70px;
          margin-right: 70px;
          .fromImg{
            background: url("../../assets/img/tax.png") no-repeat;
            background-size: cover;
            width: 48px;
            height: 37px;
          }
          p{
            padding-left: 0;
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #313131;
            letter-spacing: 0;
            text-align: left;
          }
        }
      }
    }
    .progressSpeed{
      width: 355px;
      height: 157px;
      margin: 10px auto 80px;
      background: #fff;
      .title{
        height: 36px;
        line-height: 36px;
        padding-left: 10px;
        font-family: PingFangSC-Semibold;
        font-size: 14px;
        color: #7D7D7D;
        letter-spacing: 0;
        text-align: left;
      }
      .progressWrap{
        border-top: 1px solid #f6faff;
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
            text-align: center;
            line-height: 56px;
            border-radius: 50%;
            border: 2px solid #3ECBE7;
            .img_text{
              font-size: 18px;
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
