<template>
  <div class="flex flex-wrap justify-center">
    <div v-for="(card, index) in cards" :key="index" class="card-books">
      <BaseCard>
        <div class="w-full">
          <div :class="['card-books__image']">
            <img
              :src="require(`../../assets/images/${card.imgPath}`)"
              :alt="card.title"
              :class="['mx-auto', card.imgStyle]"
            />
          </div>

          <div class="px-6 py-8 md:p-8">
            <h2 :class="[card.btnStyle, 'card-books__title']">
              {{ card.title }}
            </h2>

            <p class="my-2 text-center text-sm md:text-base">
              {{ card.subtitle }}
            </p>

            <BaseButtonLink
              :name="card.btnLabel"
              :to="card.btnLink"
              :btn-style="`button--${card.btnStyle} mt-4 px-8`"
            />
          </div>
        </div>
      </BaseCard>
    </div>
  </div>
</template>

<script>
import BaseCard from '../base-components/BaseCard.vue'
import BaseButtonLink from '../base-components/BaseButtonLink.vue'

export default {
  name: 'CardBooks',

  components: {
    BaseCard,
    BaseButtonLink,
  },

  data() {
    return {
      cards: [
        {
          title: 'Anna Kariênina',
          subtitle: 'Liev Tolstói',
          btnLabel: 'Comprar agora',
          btnStyle: 'black',
          btnLink: '/compra',
          imgPath: '-anna-karenina.svg',
          imgBgColor: 'bg-white',
          imgStyle: 'self-end w-7/12',
        },
        {
          title: 'Afinal, o que é má conduta?',
          subtitle: 'Acesse a nossa página de conteúdos',
          btnLabel: 'Acessar',
          btnStyle: 'black',
          btnLink: '/compra',
          imgPath: '-aprenda-ingles.svg',
          imgBgColor: 'bg-white',
          imgStyle: 'self-center w-7/12',
        },
        {
          title: 'Quero fazer um relato',
          subtitle: 'Faça um relato com segurança',
          btnLabel: 'Fazer relato',
          btnStyle: 'black',
          btnLink: '/compra',
          imgPath: 'aprenda-gramatica.svg',
          imgBgColor: 'bg-white',
          imgStyle: 'self-end w-7/12',
        },
        {
          title: 'Afinal, o que é má conduta?',
          subtitle: 'Acesse a nossa página de conteúdos',
          btnLabel: 'Acessar',
          btnStyle: 'black',
          btnLink: '/compra',
          imgPath: 'a-rebeliao.svg',
          imgBgColor: 'bg-white',
          imgStyle: 'self-center w-7/12',
        },
        {
          title: 'Quero fazer um relato',
          subtitle: 'Faça um relato com segurança',
          btnLabel: 'Fazer relato',
          btnStyle: 'gray',
          btnLink: '/compra',
          imgPath: 'camera-na-mao.svg',
          imgBgColor: 'bg-white',
          imgStyle: 'self-end w-7/12',
        },
        {
          title: 'Afinal, o que é má conduta?',
          subtitle: 'Acesse a nossa página de conteúdos',
          btnLabel: 'Acessar',
          btnStyle: 'black',
          btnLink: '/compra',
          imgPath: 'contabilidade-de-custos.svg',
          imgBgColor: 'bg-white',
          imgStyle: 'self-center w-7/12',
        },
      ],
    }
  },
}
</script>

<style scoped>
.card-books {
  @apply mx-6 mb-10 md:w-card;
}

.card-books__image {
  @apply flex h-32 w-full items-baseline rounded-t-2xl;
}

.card-books__title {
  @apply text-center font-fieldworkDemiBold text-lg leading-6 md:text-xl;
}
</style>
