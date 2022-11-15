<template>
  <div class="container">
    <div class="aside"><Menu/></div>
    <div class="main">
      <router-view/>
      <div id="micro-container"></div>
    </div>
  </div>
</template>

<script setup>
import Menu from './components/Menu.vue'
</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  display: inline-flex;
  .aside {
    width: 200px;
    background-color: #fafafa;
  }
  .main {
    flex-grow: 1;
  }
}
</style>
