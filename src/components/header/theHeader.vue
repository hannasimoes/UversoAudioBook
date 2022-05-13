<template>
  <header
    class="sticky top-0 z-30 border-t-8"
    :class="isHomePage ? 'hidden' : ''"
  >
    <div
      class="container mb-6 flex items-center py-4 w-full px-4"
      :class="
        isHomePage
          ? 'justify-center bg-white rounded-full w-32'
          : 'justify-between bg-white'
      "
    >
      <img
        :src="logoIcon"
        alt="livro com universo e uverso em cima"
        :class="isHomePage ? ' w-16' : 'w-16'"
      />
      <div
        class="flex relative justify-between text-black bg-transparent border-button border-gray-300 rounded-button w-64 pl-4 pr-8 py-1"
        :class="isHomePage ? ' hidden' : ''"
      >
        <input
          class="w-56 pl-2 pr-6 rounded-button outline-none"
          name="hanna"
        />
        <button class="w-60">
          <img
            :src="logoPesquisa"
            alt="livro com universo e uverso em cima"
            class="w-5 absolute top-1 right-2"
          />
        </button>
      </div>
      <button :class="isHomePage ? ' hidden' : ''">
        <img
          :src="logoCarrinho"
          alt="livro com universo e uverso em cima"
          class="w-6"
        />
      </button>
    </div>
  </header>
</template>

<script>
import logoIcon from '../../assets/icons/logo.svg'
import logoCarrinho from '../../assets/icons/carrinho.svg'
import logoPesquisa from '../../assets/icons/pesquisa-header.svg'

export default {
  name: 'TheHeader',

  data() {
    return {
      logoIcon,
      logoPesquisa,
      logoCarrinho,
    }
  },

  computed: {
    isHomePage() {
      return this.$route.path === '/teste'
    },
  },
}
</script>

<style scoped>
.input-header {
  background: url('../../assets/icons/pesquisa-header.svg') no-repeat;
  background-size: 20px;
  background-position: 97% 10%;
  background-position-y: 30%;
}
</style>
