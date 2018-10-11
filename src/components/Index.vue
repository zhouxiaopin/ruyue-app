<template>
    <div class="indexContainer">
      <!--标题栏-->
      <mt-header class="titleBar" title="" fixed>
        <router-link to="/" slot="left">
          <mt-button>
            <img src="../assets/icon/index/index_titlebar_gps_icon.png" height="20" width="15" slot="icon">
          </mt-button>
          <span class="cityName">广州</span>
        </router-link>
        <mt-button slot="right">
          <img src="../assets/icon/index/index_titlebar_msg_icon.png" height="20" width="20" slot="icon">
        </mt-button>
      </mt-header>
      <!--轮播图-->
      <div class="advertSwipe">
        <mt-swipe :auto="4000" :show-indicators="false">
            <mt-swipe-item>
              <img src="../assets/img/index_swipe_img_1.png">
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="../assets/img/index_swipe_img_1.png">
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="../assets/img/index_swipe_img_1.png">
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="../assets/img/index_swipe_img_1.png">
            </mt-swipe-item>
        </mt-swipe>
      </div>
      <!--卡片、如约巴士、水巴、城际、-->
      <div class="ryCardTab">
        <mt-navbar v-model="ryCardSelected">
          <mt-tab-item id="ryBus">如约巴士</mt-tab-item>
          <mt-tab-item id="ryWaterBus">如约水巴</mt-tab-item>
          <mt-tab-item id="ryCityBus">如约城际</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="ryCardSelected" class="ryCardTabContainer ">
          <mt-tab-container-item id="ryBus">
            <IndexRyCardTab :busTypeOptions="[]" searchBusBtnText="巴士"
                             busTypeCheckClass="waterBusTypeCheck"/>
          </mt-tab-container-item>
          <mt-tab-container-item id="ryWaterBus">
            <IndexRyCardTab :busTypeOptions="ryWaterBusTypeOptions" searchBusBtnText="水巴"
                             busTypeCheckClass="waterBusTypeCheck"/>
          </mt-tab-container-item>
          <mt-tab-container-item id="ryCityBus">
            <IndexRyCardTab :busTypeOptions="ryCityBusTypeOptions" searchBusBtnText="城际"
                             busTypeCheckClass="cityBusTypeCheck"/>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
      <!--如约旅行、羊城通、南站专线、如约包车-->
      <div class="ryModel">
        <ul>
          <li>
            <img src="../assets/icon/index/index_rymodel_icon_1.png"/>
            <span>如约旅行</span>
          </li>
          <li>
            <img src="../assets/icon/index/index_rymodel_icon_2.png"/>
            <span>羊城通</span>
          </li>
          <li>
            <router-link :to="{name:'southStationTargetLine'}">
              <img src="../assets/icon/index/index_rymodel_icon_3.png"/>
              <span>南站专线</span>
            </router-link>
          </li>
          <li>
            <img src="../assets/icon/index/index_rymodel_icon_4.png"/>
            <span>如约包车</span>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    import IndexRyCardTab from './index/IndexRyCardTab'
    export default {
      name: "Index",
      components: {
        IndexRyCardTab
      },
      data(){
        return {
          ryCardSelected:'ryBus',
          ryWaterBusTypeOptions:[
            {
              label: '珠江夜游',
              value: 'A'
            },
            {
              label: '珠江日游',
              value: 'B'
            },
            {
              label: '定制航线',
              value: 'C'
            }
          ],
          ryCityBusTypeOptions:[
            {
              label: '城际大巴车',
              value: 'A'
            },
            {
              label: '城际商务车',
              value: 'B'
            }
          ],
        }
      },
    }
</script>

<style scoped>

  .indexContainer{
    width: 100%;
    /*height: 1000px;*/
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
  }

  /*标题栏*/
  .indexContainer .mint-header{
    background-color: rgba(255,255,255,0.3);
    box-shadow:none;
  }
  .titleBar .cityName{
    color: #FFFFFF;
  }

  /*轮播图*/
  .advertSwipe{
    width: 100%;
    height: 5rem;
  }
  .advertSwipe img{
    width: 100%;
    height: 5rem;
  }

  /*如约卡片布局===选项卡*/
  .ryCardTab{
    position: relative;
    top: -1.5rem;
    width: 90%;
    margin: 0 auto;
    border: 0.01rem #cfcece solid;
    /*左，右，上，下*/
    box-shadow:-1px 0 10px #DFDFDF, 1px 0 10px #DFDFDF, 0 -1px 10px #DFDFDF, 0 1px 10px #DFDFDF;
    /*border-image: -webkit-linear-gradient( #cfcece,#ffffff) 30 30;*/
    /*border-image: -moz-linear-gradient( #cfcece,#ffffff) 30 30;*/
    /*border-image: linear-gradient( #cfcece,#ffffff) 30 30;*/
    border-radius: 0.1rem;
    z-index: 1;
  }
  .ryCardTab>.mint-navbar{
    background-color: rgba(94,94,94,0.5);
  }
  .ryCardTab>.mint-navbar .mint-tab-item{
    color: #FFFFFF;
  }
  /*.ryCardTab>.mint-navbar .mint-tab-item.is-selected{*/
    /*border-bottom: 3px solid #FC9A1F;*/
    /*color: #FC9A1F;*/
  /*}*/
  .ryCardTab>.mint-navbar .mint-tab-item:nth-of-type(2){
    background-color: rgba(42,41,39,0.6);
  }
  .ryCardTabContainer{
    margin-top: 0.06rem;
  }

  /*如约相关模块*/
  .ryModel{
    margin-top: -1rem;
  }
  .ryModel>ul{
    overflow:hidden;
    padding: 0.3rem;
  }
  .ryModel>ul>li{
    width: 25%;
    float: left;
    display: flex;
    flex-direction: column;
    /*text-align: center;*/
    justify-content: center;
    align-items: center;
    padding-top: 0.2rem;
    /*margin:0 auto;*/
  }
  .ryModel>ul>li a{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .ryModel>ul>li img{
    /*transform: translate(-50%, 0);    !* 50%为自身尺寸的一半 *!*/
    width: 0.5rem;
    height: 0.5rem;
    margin-left: 0.1rem;
  }
  .ryModel>ul>li span{
    padding: 0.2rem 0;
    font-size: 0.25rem;
  }
</style>
