<template>
  <div class="page-tabbar">
    <div class="page-wrap">
      <!--<div class="page-title">Tabbar</div>-->
      <!--<div>-->
      <!--<mt-cell class="page-part" title="当前选中" :value="selected"/>-->
      <!--</div>    &lt;!&ndash; tabcontainer &ndash;&gt;-->
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="indexTab">
          <Index/>
        </mt-tab-container-item>
        <mt-tab-container-item id="myTab" >
          <My/>
          <!--<div class="page-part">           &lt;!&ndash; cell &ndash;&gt;-->
          <!--<mt-cell v-for="n in 12" :title="'我的 ' + n"/>-->
          <!--</div>-->
          <!--<router-link to="/">           &lt;!&ndash; button &ndash;&gt;-->
          <!--<mt-button type="danger" size="large">退出</mt-button>-->
          <!--</router-link>-->
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <BottomTab @bottomTabChange="bottomTabChange"/>
    <!--   <mt-tabbar v-model="selected" fixed>
          <mt-tab-item id="indexTab"><img slot="icon" src="./assets/index-icon-selected.png"> 首頁</mt-tab-item>
          <mt-tab-item id="myTab"><img slot="icon" src="./assets/index-icon-selected.png"> 我的</mt-tab-item>
      </mt-tabbar> -->
  </div>
</template>

<script>
  import BottomTab from './BottomTab'
  import Index from './Index'
  import My from './My'
    export default {
      name: "Main",
      components: {
        BottomTab,
        Index,
        My
      },
      data() {
        return {
          selected: 'indexTab',
          // active:1
        }
      },
      methods: {
        bottomTabChange:function (val) {
          this.selected = val;
        },
      },
    }
</script>

<style scoped>

</style>
