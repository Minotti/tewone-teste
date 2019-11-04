<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    this.$store.state.token = localStorage.getItem('token') || ''
  }
}
</script>
<style>
</style>
