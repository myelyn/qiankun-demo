<template>
  <div class="menu">
    <div class="menu-title">QIANKUN DEMO</div>
    <ul class="menu-ul">
      <li class="menu-li" v-for="list in menuList" :key="list.id"><router-link :to="list.link">{{list.label}}</router-link></li>
    </ul>
  </div>
</template>

<script setup>
  const menuList = [{
    id: 1,
    label: '看板-主',
    link: '/dashboard'
  },{
    id: 2,
    label: '分析-微',
    link: '/vue2-micro-app/analysys'
  },{
    id: 3,
    label: '分群-主',
    link: '/crowd'
  },{
    id: 4,
    label: '运营-主',
    link: 'operation'
  }]
</script>

<style scoped lang="scss">
  .menu {
    .menu-title {
      height: 56px;
      line-height: 56px;
      text-align: center;
    }
    .menu-li {
      height: 56px;
      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        color: #333;
        font-size: 16px;
        font-weight: bold;
      }
      &:hover {
        color: #000;
      }
    }
  }
</style>