<template>
  <div>
    <section class="overflow-hidden text-gray-700">
      <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-20">
        <div class="flex flex-wrap -m-1 md:-m-2">
          <div
            v-for="book in books"
            :key="book"
            class="book flex relative flex-wrap w-1/3"
          >
            <div
              class="book-title bg-white rounded-lg absolute w-full h-full px-5 flex justify-center py-8 opacity-0"
            >
              <div class="card-text">
                <h1 class="text-title font-bold w-full mb-2 text-center">
                  <router-link to="/checkout">Aleatorio</router-link>
                </h1>
                <p class="text-base w-full leading-5">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words
                </p>
              </div>
            </div>
            <div class="card-image w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block object-cover object-center w-full h-full rounded-lg"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IntroductionPage',

  data() {
    return {
      books: [1, 2, 3, 4, 5, 6],
    }
  },
}
</script>

<style>
.book:hover .book-title {
  @apply opacity-100;
}
</style>
