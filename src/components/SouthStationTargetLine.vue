<template>
    <div class="southStationTargetLineContainer">
      <!--标题栏-->
      <mt-header title="南站专线">
        <router-link to="/" slot="left">
          <mt-button>
            <img src="../assets/icon/titleBar/left_back_icon.png" height="20" width="20" slot="icon">
          </mt-button>
        </router-link>

        <mt-button slot="right">
          <img src="../assets/icon/titleBar/south_station_title_more_icon.png" height="8" width="30" slot="icon">
        </mt-button>
      </mt-header>

      <!--搜索栏-->
      <mt-search
        class="search"
        cancel-text="取消"
        placeholder="搜索站点、关键字">
      </mt-search>
      <!--专线列表-->
    </div>
</template>

<script>
    export default {
        name: "SouthStationTargetLine"
    }
</script>

<style scoped>
  .southStationTargetLineContainer{
    width: 100%;
  }

  /*搜索框*/
  .southStationTargetLineContainer{

  }
  .search{
    margin-top: 0.02rem;
  }
  .mint-searchbar{
    background-color: #FFFFFF;
    border-bottom: #D4D4D4 0.01rem solid;
  }
</style>
