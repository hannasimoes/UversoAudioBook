<template>
  <div class="mb-10 flex justify-center">
    <form @submit.prevent="signIn">
      <div
        class="flex w-full flex-col items-center rounded-card bg-white p-8 text-center shadow md:p-12"
      >
        <div class="w-full">
          <p
            class="mb-8 text-center font-fieldworkDemiBold text-title text-safeBlue"
          >
            Para finalizar sua compra,
            <br />
            entre no seu espaço
          </p>

          <BaseInput
            id="email"
            v-model="credentials.email"
            name="email"
            type="email"
            placeholder="Digite seu e-mail "
            class="md:w-80"
          />
          <div class="w-100 relative">
            <BaseInput
              id="password"
              v-model="credentials.password"
              name="password"
              :type="passwordFieldType"
              placeholder="Digite sua senha"
              autocomplete="off"
              class="md:w-80"
            />
            <button class="fieldPassword__icon" @click.prevent="togglePasswd">
              <BaseIcon name="IconEye" :is-open="isShowingPassword" />
            </button>
          </div>
          <BaseButton
            :disabled="isInvalidCredentials"
            type="submit"
            class="btn-blue my-4 px-6"
            name="enviar"
          />

          <p class="mt-4 text-center text-sm">
            Não possui ou esqueceu a senha?
          </p>

          <BaseButtonLink
            name="Primeiro acesso"
            to="/auth/firstAccess"
            btn-style="mt-4 border-2 border-safeBlue text-safeBlue px-6"
          />
        </div>
      </div>
    </form>

    <BaseLoading v-if="loading" />
  </div>
</template>

<script>
import BaseButton from '../../components/base-components/BaseButtonLink.vue'
import BaseButtonLink from '../../components/base-components/BaseButtonLink.vue'
import BaseInput from '../../components/base-components/BaseInput.vue'
import BaseLoading from '../../components/base-components/BaseLoading.vue'
import BaseIcon from '../../components/base-components/BaseIcon.vue'

export default {
  name: 'AuthLoginForm',
  components: {
    BaseButton,
    BaseButtonLink,
    BaseInput,
    BaseLoading,
    BaseIcon,
  },

  data() {
    return {
      credentials: {
        email: '',
        password: '',
      },

      loading: false,
      passwordFieldType: 'password',
    }
  },

  computed: {
    isInvalidCredentials() {
      const { email, password } = this.credentials
      return !email && !password
    },
    isShowingPassword() {
      return this.passwordFieldType !== 'password'
    },
  },

  methods: {
    async signIn() {
      try {
        if (this.isInvalidCredentials) {
          throw new Error('Invalid credentials')
        }
        await this.$store.dispatch('auth.store/signIn', this.credentials)
        this.$router.push('/')
      } catch (err) {
        this.credentials.password = ''
        // console.error(err.message)
      } finally {
        this.loading = false
      }
    },
    togglePasswd() {
      this.passwordFieldType =
        this.passwordFieldType === 'password' ? 'text' : 'password'
    },
  },
}
</script>

<style scoped>
.fieldPassword__icon {
  @apply absolute right-4 top-4;
  height: 19.46px;
}
</style>
