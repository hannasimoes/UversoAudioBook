<template>
  <header class="sticky top-0 z-30 border-t-8 border-safeBlue bg-white">
    <div class="container mb-6 flex items-center justify-between py-4">

        <img
          :src="logoIcon"
          alt="livro com universo e uverso em cima"
          class=" w-16"
        />
    </div>

    <div class="mb-6 flex items-center justify-between py-4">
      <base-button class="button" name='Hanna pistola'/>
      </div>
  </header>
</template>

<script>
import logoIcon from '../../assets/icons/logo.svg'
import BaseButton from '../../components/base-components/BaseButton'
export default {
  name: 'TheHeader',
components:{
  BaseButton,
},
  data() {
    return {
      logoIcon,
    }
 }
}
</script>

