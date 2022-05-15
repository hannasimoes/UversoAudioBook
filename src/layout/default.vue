<template>
  <section id="app">
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />

    <!-- <TheHeader /> -->
    <router-view />
  </section>
</template>

<script>
// import TheHeader from '../components/header/theHeader'

export default {
  name: 'LayoutDefault',
  components: {
    // TheHeader,
  },
}
</script>
<style>
body {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
