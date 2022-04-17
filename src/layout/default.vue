<template>
<section> 
    <TheHeader/>
</section>   
</template>

<script>
import TheHeader from '../components/header/theHeader'

export default {
  name: 'LayoutDefault',
  components: {
    TheHeader,
  },
}
</script>
<style>
body {
  font-family: 'FieldWork-Hum-Regular', Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  color: #4d4d4d;
  background: #fcfcfc;
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