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
      <div class="w-full h-full relative overflow-y-scroll">
        <!--Cards-->
        <div class="px-6 py-3">
          <div class="px-6 py-3 flex items-center justify-between">
            <h1
              class="pt-4 pl-2 text-2xl font-bold text-white tracking-wider hover:underline"
            >
              Livros Mais Vendidos
            </h1>
          </div>
          <div class="w-full flex flex-wrap justify-between p-3">
            <div
              v-for="novo in novos"
              :key="novo.title"
              class="p-6 w-72 relative"
            >
              <div
                class="absolute w-full h-full flex items-end justify-end p-16 opacity-0 hover:opacity-100"
              >
                <div
                  class="bg-green-600 rounded-full h-10 w-10 flex items-center"
                >
                  <router-link to="/book">
                    <i class="material-icons p-2 text-white">shopping_bag</i>
                  </router-link>
                </div>
              </div>

              <div class="bg-gray-600 w-full h-auto p-5 rounded-lg shadow">
                <img
                  :src="require(`../../assets/images/${novo.src}`)"
                  :alt="alt"
                  class="h-auto w-full shadow mb-2"
                />

                <h1 class="text-sm font-semibold text-white tracking-wide">
                  {{ novo.title }}
                </h1>

                <h2 class="text-xs text-white tracking-wide">
                  {{ novo.writer }}
                </h2>
              </div>
            </div>
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
          <h1 class="text-sm text-white tracking-wide">
            Anna Karienina - AudioBook
          </h1>
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
export default {
  name: 'IntroductionPage',

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
      novos: [
        {
          src: 'anna-karenina.jpg',
          alt: 'Anna Kariênina',
          title: 'ANNA KARIÊNINA ',
          writer: 'Liev Tolstói',
        },
        {
          src: 'aprenda-ingles.jpg',
          alt: 'INGLÊS EM 30 DIAS',
          title: 'INGLÊS EM 30 DIAS ',
          writer: 'Martins Fontes',
        },
        {
          src: 'aprender-gramatica.jpg',
          alt: 'APRENDER E PRÁTICAR GRAMÁTICA',
          title: 'APRENDER E PRÁTICAR GRAMÁTICA',
          writer: 'Mauro Ferreira',
        },
        {
          src: 'a-rebeliao.jpg',
          alt: 'A REBELIÃO DA PONTUAÇÃO',
          title: 'A REBELIÃO DA PONTUAÇÃO',
          writer: 'William Tucci',
        },
        {
          src: 'camera-na-mao.jpg',
          alt: 'CÂMERA NA MÃO, O GUARANI NO CORAÇÃO',
          title: 'CÂMERA NA MÃO, O GUARANI NO CORAÇÃO',
          writer: 'Moacyr Scliar',
        },
        {
          src: 'contabilidade-de-custos.jpg',
          alt: 'CONTABILIDADE DE CUSTOS',
          title: 'CONTABILIDADE DE CUSTOS',
          writer: 'Eliseu Martins',
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
