<template>
  <div class="BottomTabContainer">
    <!--<div class="hLine"></div>-->
    <mt-tabbar class="bottomTab" v-model="selected" fixed>
      <mt-tab-item id="indexTab">
        <img slot="icon" :src="indexTabImg">
        首页
      </mt-tab-item>
      <mt-tab-item id="myTab">
        <img slot="icon" :src="myTabImg">
        我的
      </mt-tab-item>
    </mt-tabbar>
    <div class="checkTicket">
      <img src="../assets/icon/bottomTab/check_ticket_qr_icon_small.png"/>
      <p>检票</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BottomTab',
    data() {
      return {
        selected: 'indexTab',
        indexTabImg: require('../assets/icon/bottomTab/index-icon-selected.png'),
        myTabImg:require('../assets/icon/bottomTab/my-icon-normal.png')
        // active:1
      }
    },
    methods: {

    },
    watch: {
      selected: function (val, oldVal) {
        this.$emit('bottomTabChange',val);//select事件触发后，自动触发bottomTabChange事件
        // console.log(val)
        switch (val) {
          case 'indexTab':
            this.indexTabImg = require('../assets/icon/bottomTab/index-icon-selected.png')
            this.myTabImg = require('../assets/icon/bottomTab/my-icon-normal.png')
          break;
          case 'myTab':
            this.indexTabImg = require('../assets/icon/bottomTab/index-icon-normal.png')
            this.myTabImg = require('../assets/icon/bottomTab/my-icon-selected.png')
          break;
        }
        // click后打印出当前mt-tab-item的id
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bottomTab{
    border-top: #cecdcd  0.011rem solid;
  }
  div.checkTicket{
    position: fixed;
    width: 1.5rem;
    height: 1.5rem;
    border-radius:0.75rem;
    bottom: 0.4rem;
    left: 50%;
    /*top: 50%;*/
    transform: translate(-50%, 0);    /* 50%为自身尺寸的一半 */
    background-color: #FC9A1D;
    z-index: 1;
    text-align: center;
  }
  div.checkTicket>img{
    display: block;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);    /* 50%为自身尺寸的一半 */
    margin-top: 0.3rem;
    width: 0.5rem;
    height: 0.5rem;
  }
  div.checkTicket>p{
    margin-top: 0.1rem;
    font-size: 0.4rem;
    color: #ffffff;
  }

  a.mint-tab-item:nth-of-type(1){
    text-align: start;
    padding-left: 1.2rem;
  }
  a.mint-tab-item:nth-of-type(2){
    text-align: end;
    padding-right: 1.2rem;
  }
</style>
