<template>
  <div id="app">
    <myheader></myheader>
    <!-- ここにvueのコンポーネントが挿入される -->
    <router-view/>
    <!-- コンポーネントおわり -->
  </div>
</template>

<script>
import myheader from './components/myheader'

export default {
  name: 'App',
  components: {
    myheader
  }
}
</script>

<style>
@import "./style.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
