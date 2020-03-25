<template>
  <div id="app">
      <div class="list">
      <router-view/>
      </div>
      <footnav/>
  </div>
</template>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
display: flex;
flex-direction: column;
  color: #2c3e50;
}
#nav {

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
