<template>
  <div class="bg-gray-700 h-screen">
    <div class="flex" style="height: 88vh">
      <!-- side nav-->
      <div class="w-56 bg-black h-full flex-none">
        <div class="p-3 px-6 flex justify-center">
          <img
            src="../../assets/icons/logo-certo.svg"
            alt="logo uverso"
            class="h-24"
            style="filter: brightness(0) invert(1)"
          />
        </div>
        <div class="mx-3 mb-3">
          <router-link
            v-for="page in pages"
            :key="page.id"
            :to="page.to"
            :class="`w-full text-sm  font-semibold rounded px-3 py-2 flex items-center justify-start ${
              setId === page.id ? 'bg-gray-600 text-white' : 'text-gray-600'
            }`"
            @click="setID = page.id"
          >
            <i class="material-icons mr-3">{{ page.icon }}</i>
            <p>{{ page.name }}</p>
          </router-link>
        </div>
        <div class="mx-5">
          <h1 class="text-sm text-white tracking-widest uppercase mb-3">
            Meu espaço
          </h1>
          <router-link
            to="/checkout"
            class="flex items-center justify-start opacity-75 hover:opacity-100 mb-4"
          >
            <span class="material-icons text-white">shopping_cart</span>
            <p class="text-sm text-white font-semibold ml-4">Carrinho</p>
          </router-link>
          <router-link
            to="/config"
            class="flex items-center justify-start opacity-75 hover:opacity-100"
          >
            <span class="material-icons text-white">settings</span>
            <p class="text-sm text-white font-semibold ml-4">Configurações</p>
          </router-link>
          <div class="h-px w-full bg-gray-600 my-3 mt-4"></div>
        </div>
        <div class="mx-5">
          <div class="w-full h-6 overflow-y-scroll">
            <p
              v-for="book in books"
              :key="book.name"
              class="text-gray-600 hover:text-white text-sm py-1"
            >
              {{ book.name }}
            </p>
          </div>
        </div>
        <div class="relative pt-4">
          <div
            class="w-full h-full flex justify-end items-start p-2 opacity-0 hover:opacity-100 absolute"
          >
            <div class="bg-black rounded-full h-8 w-8 p-1">
              <i class="material-icons text-white">keyboard_arrow_down</i>
            </div>
          </div>
          <img
            src="../../assets/images/anna-karenina.jpg"
            alt="capa livro anna kariênina"
            class="w-56 h-40"
          />
        </div>
      </div>
      <!-- main content -->
      <div class="w-full h-full relative overflow-y-scroll flex justify-center">
        <!--Cards-->
        <div class="flex w-full justify-center">
          <div class="h-full w-full">
            <form>
              <div
                class="flex w-full flex-col items-center bg-black text-center justify-center"
              >
                <div class="w-full justify-center">
                  <span class="flex justify-center">
                    <h4 class="text-center text-2xl text-white mb-2 mt-5">
                      Configurações
                    </h4>
                  </span>

                  <p class="mb-4 text-center text-xl mt-4 text-white">Perfil</p>
                  <p
                    class="mb-3 text-center text-base text-gray-400 hover:text-white"
                  >
                    A Uverso garante a privacidade dos seus dados.
                  </p>
                  <span>
                    <p class="mb-1 text-center text-title text-white">Email</p>
                  </span>
                  <span class="flex justify-center items-center">
                    <BaseInput
                      id="email"
                      name="email"
                      type="email"
                      placeholder="hanna@hanna.com"
                      readonly
                      class="w-1/3 flex justify-center"
                    />
                  </span>
                  <div class="w-100 relative">
                    <p class="mt-4 text-center text-xl text-white">
                      Redefinir senha
                    </p>
                    <p class="mt-8 text-center text-sm text-white">
                      Senha atual
                    </p>
                    <span class="flex justify-center items-center">
                      <BaseInput
                        id="currentPassword"
                        name="currentPassword"
                        type="password"
                        placeholder="Digite sua senha antiga"
                        autocomplete="off"
                        class="md:w-96"
                      />
                    </span>
                    <p class="mt-8 text-center text-sm text-white">
                      Definir uma nova senha
                    </p>
                    <span class="flex justify-center items-center">
                      <BaseInput
                        id="newPassword"
                        name="newPassword"
                        :type="passwordFieldType"
                        placeholder="Digite sua senha"
                        autocomplete="off"
                        class="md:w-96 mb-4"
                      ></BaseInput>
                    </span>
                  </div>
                  <BaseButtonLink
                    to="/login"
                    type="submit"
                    class="button--stay px-4 mt-4 text-center"
                    name="Redefinir senha"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- play bar-->
    <div
      class="w-full flex items-center justify-between px-3 bg-gray-600 border-t border-black"
      style="height: 12vh"
    >
      <div class="flex items-center w-1/4">
        <div>
          <h1 class="text-sm text-white tracking-wide">Anna Kariênina</h1>
          <h2 class="text-xs text-gray-200 tracking-wide">Liev Tolstói</h2>
        </div>
        <i class="material-icons text-base text-white mx-4">favorite</i>
        <i class="material-icons text-base text-white">
          picture_in_picture_alt
        </i>
      </div>

      <div class="flex flex-col justify-center w-2/4 items-center">
        <div class="flex items-center">
          <button class="mx-5 text-white">
            <i class="material-icons text-lg">shuffle</i>
          </button>
          <button class="text-white">
            <i class="material-icons text-lg">skip_previous</i>
          </button>
          <button
            v-for="audio in audios"
            :key="audio.id"
            class="rounded-full h-8 w-8 flex items-center justify-center mx-5 border-white border text-white"
            @click.prevent="audio.isPlaying ? pause(audio) : play(audio)"
          >
            <i class="text-lg material-icons">play_arrow</i>
          </button>
          <button class="text-white">
            <i class="material-icons text-lg">skip_next</i>
          </button>
          <button class="mx-5 text-white">
            <i class="material-icons text-lg">repeat</i>
          </button>
        </div>
        <div class="w-3/4 flex items-center">
          <p class="text-xs text-white mr-1">0:02</p>
          <div
            class="w-full h-1 bg-gray-400 rounded-full mt-4 flex items-center"
          >
            <div class="h-1 rounded-full bg-green-500" style="width: 2%"></div>
            <div class="h-3 w-3 bg-white rounded-full -ml-1 shadow"></div>
          </div>
          <p class="text-xs text-white ml-1">6:00</p>
        </div>
      </div>

      <div class="flex items-center w-1/4 justify-end">
        <i class="material-icons text-lg text-white">playlist_play</i>
        <i class="material-icons text-base text-white mx-3">
          important_devices
        </i>
        <i class="material-icons text-lg text-white">volume_up</i>
        <div class="w-20 ml-1 bg-white rounded-full h-1"></div>
      </div>
    </div>
  </div>
</template>
<script>
import BaseInput from '../../components/base-components/BaseInput.vue'
import BaseButtonLink from '@/components/base-components/BaseButtonLink.vue'

export default {
  name: 'ConfigPage',
  components: {
    BaseInput,
    BaseButtonLink,
  },

  data: function () {
    return {
      pages: [
        { id: 'home', to: '/introduction', name: 'Home', icon: 'home' },
        { id: 'search', to: '/search', name: 'Procurar', icon: 'search' },
        {
          id: 'library',
          to: '/library',
          name: 'Biblioteca',
          icon: 'library_books',
        },
      ],

      setId: 'home',
      audioPress: false,
      books: [
        { name: 'A Culpa É das Estrelas' },
        { name: 'Mensagem a Garcia' },
        { name: 'Dragonlance' },
        { name: 'O Grufalo' },
        { name: 'Game of Thornnes' },
        { name: 'O Segredo' },
      ],
      audios: [
        {
          id: 'ana-karenina',
          name: 'ana-karenina',
          file: new Audio(require('../../assets/audio/ana-karenina.mp3')),
          isPlaying: false,
        },
      ],
    }
  },
  methods: {
    play(audio) {
      audio.isPlaying = true
      audio.file.play()
    },

    pause(audio) {
      audio.isPlaying = false
      audio.file.pause()
    },
  },
}
</script>
<style></style>
