<template>
    <div class="IndexRyCardTabContainer">
      <div class="address">
        <ul>
          <li>出发地点</li>
          <li><img src="../../assets/icon/index/index_rumodel_search_addr_icon.png" /></li>
          <li>到达地点</li>
        </ul>
      </div>
      <div class="date">
        <span>9月25日</span>
        <span>今天</span>

      </div>
      <!--查询按钮-->
      <mt-button type="primary" size="normal">
        查询{{searchBusBtnText}}
      </mt-button>
      <!--车类型-->
      <mt-checklist :class="busTypeCheckClass"
                    v-model="busTypeSelectValue"
                    :options="busTypeOptions" @change="busTypeCheckOn($event)">
      </mt-checklist>
      <div class="notice">
        <img src="../../assets/icon/index/index_notice_icon.png" />
        <span>应国庆节日普天同庆</span>
      </div>

    </div>
</template>

<script>
    export default {
      name: "IndexRyCardTab",
      props : ['busTypeOptions','searchBusBtnText','busTypeCheckClass'],
      data(){
          return{
            //存放所选车选项
            busTypeSelectValue:[],
            // busTypeOptions:[
            //   {
            //     label: '城际大巴车',
            //     value: 'A'
            //   },
            //   {
            //     label: '城际商务车',
            //     value: 'B'
            //   }
            // ]
          }
      },
      methods:{
        busTypeCheckOn:function () {
          // console.log(this.busTypeSelectValue);
        }
      },
      watch:{
        busTypeSelectValue:{
          //注意：当观察的数据为对象或数组时，curVal和oldVal是相等的，因为这两个形参指向的是同一个数据对象
          handler(curVal,oldVal){
            console.log(curVal);
          },
          deep:true
        }
      },
    }
</script>

<style scoped>
  .IndexRyCardTabContainer{
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    padding: 0.3rem;
  }

  /*地址*/
  .address>ul>li{
    float: left;
    font-size: 0.3rem;
    color: #BABABC;
    padding: 0.2rem 0;
    height: 0.85rem;
  }
  .address>ul>li:nth-of-type(odd){
    width: 43%;
    border-bottom: #E5E5E5  0.015rem solid;
  }
  .address>ul>li:nth-of-type(even){
    width: 14%;
  }
  .address>ul>li:nth-of-type(1){
    padding-left: 0.1rem;
  }
  .address>ul>li:nth-of-type(2){
    vertical-align: center;
    text-align: center;
    padding-top: 0.2rem;
  }
  .address>ul>li:nth-of-type(2)>img{
    width: 0.5rem;
    height: 0.5rem;
  }
  .address>ul>li:nth-of-type(3){
    padding-right: 0.1rem;
    text-align: end;
  }

  /*日期*/
  .date{
    display: flex;
    flex-direction: row;
    margin: 0.3rem 0;
  }
  .date>span{
    color: #4D4949;
    font-size: 0.3rem;
    margin-left: 0.1rem;
  }
  .date>span:nth-of-type(1){
    margin-left: 0.1rem;
  }
  .date>span:nth-of-type(2){
    margin-left: 0.3rem;
  }


  /*公告*/
  .notice{
    display: flex;
    flex-direction: row;
    /*justify-content: center;*/
    align-items: center;
    padding-top: 0.3rem;
    padding-left: 0.1rem;
  }
  .notice>img{
    width: 0.4rem;
    height: 0.4rem;
  }
  .notice>span{
    font-size: 0.2rem;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
    padding-left: 0.3rem;
  }

</style>
