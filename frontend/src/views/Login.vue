<script>

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      alertError: false,
      messageAlert: ''
    }
  },
  mounted () {
    if (this.$store.state.token !== '') {
      this.$router.push('/')
    }
  },
  methods: {
    login () {
      let data = { 'email': this.email, 'password': this.password }
      this.$store.dispatch('LOGIN_USER', data).then(() => { this.$router.push('/') })
        .catch(err => {
          if (err.response.data.message === 'Unauthorized') {
            this.alertError = true
            this.messageAlert = 'Usuário ou senha estão incorretos!'
          }
        })
    },
    closeAlert () {
      this.alertError = false
      this.alertSuccess = false
    }
  }
}
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-4 offset-4">
        <div class="box-login">
          <div class="text-center mb-5">
            <img src="@/assets/tewone.svg" width="180" alt="Logo TewOne">
          </div>
          <form @submit.prevent="login">
            <h5 class="mb-4 text-center">Por favor, faça login</h5>
            <div v-show="alertError" class="alert alert-danger alert-dismissible fade show" role="alert">
              <span v-html="messageAlert"></span>
              <button type="button" class="close" @click.prevent="closeAlert">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" required v-model="email" placeholder="E-mail">
            </div>
            <div class="form-group">
              <input type="password" class="form-control" required v-model="password" placeholder="Senha">
            </div>

            <button type="submit" class="btn btn-lg btn-primary btn-block">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .box-login{
    background-color: #EEE;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    padding: 30px 15px;
  }
</style>
