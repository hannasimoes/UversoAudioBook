<template>
<div>
  <TheHeader />
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  </div>
</template>

<script>

import TheHeader from  './components/header/theHeader'
export default {
  name: 'App',
  components: {
    TheHeader,
  }
}
</script>

<style>

</style>
