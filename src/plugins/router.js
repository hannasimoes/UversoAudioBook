import VueRouter from 'vue-router'

//hanna
import IntroductionPage from '../pages/introduction/index.vue'
import homePage from '../pages/Home/index.vue'
import BookPage from '../pages/book/index.vue'
import CheckoutPage from '../pages/checkout/index.vue'
import LoginPage from '../pages/login/index.vue'
import PaymentPage from '../pages/payment/index.vue'
import SucessPage from '../pages/sucess/index.vue'
import TestePage from '../pages/teste/index.vue'
import ConfigPage from '../pages/config/index.vue'

const routes = [
  { path: '/', component: homePage },
  { path: '/introduction', component: IntroductionPage },
  { path: '/book', component: BookPage },
  { path: '/checkout', component: CheckoutPage },
  { path: '/login', component: LoginPage },
  { path: '/payment', component: PaymentPage },
  { path: '/sucess', component: SucessPage },
  { path: '/teste', component: TestePage },
  { path: '/config', component: ConfigPage },
]

const router = new VueRouter({
  routes,
})

export default router
