<script>
import CardMedico from '../components/CardMedico'

export default {
  name: 'home',
  data () {
    return {
      nome: String,
      dados: Array,
      condicao: '',
      next_page_url: null,
      blockUI: false
    }
  },
  mounted () {
    this.nome = this.$store.state.nome
    this.$http.get('api/doctors', { headers: { 'Content-Type': 'application/json' } })
      .then(res => {
        this.dados = res.data.data
        this.next_page_url = res.data.next_page_url
      })
      .catch(err => {
        if (err.response.data.message === 'Unauthenticated.') {
          this.$store.dispatch('UNAUTHENTICATED_USER')
            .then(() => {
              this.$router.push('/login')
            })
        }
      })
  },
  methods: {
    logout () {
      this.$store.dispatch('LOGOUT_USER', {})
        .then(() => {
          this.$router.push('/login')
        })
    },
    search () {
      this.blockUI = true
      this.$http.get(`api/doctors?search=name:${this.condicao};crm:${this.condicao}`, { headers: { 'Content-Type': 'application/json' } })
        .then(res => {
          this.dados = res.data.data
          this.next_page_url = res.data.next_page_url
          this.blockUI = false
        })
    },
    nextPage () {
      this.blockUI = true
      this.$http.get(`${this.next_page_url}`)
        .then(res => {
          for (let d in res.data.data) {
            this.dados.push(res.data.data[d])
            this.next_page_url = res.data.next_page_url
          }
          this.blockUI = false
        })
    }
  },
  components: {
    CardMedico
  }
}
</script>

<template>
<div class="container">
  <div class="row">
    <div class="col col-10 offset-1">
      <header class="mb-2 pt-2">
        <div class="row">
          <div class="col col-8">
            <form @submit.prevent="search">
              <div class="input-group">
                <input type="text" v-model="condicao" class="form-control" placeholder="CRM ou Nome" aria-label="Buscar Médico">
                <div class="input-group-append">
                  <button class="btn btn-info" type="submit"><i class="fa fa-fw fa-search"></i></button>
                </div>
              </div>
            </form>
          </div>

          <div class="col col-4">
            <p class="mt-2 float-right">Bem vindo! <router-link to="" @click.native="logout" class="text-muted"><i class="fa fa-fw fa-sign-out"></i> Sair</router-link></p>
          </div>
        </div>
      </header>
    </div>
  </div>
  <div class="row">
    <div class="col col-md-10 offset-1">
      <div class="row">
        <div class="col-md-4">
          <h4>Lista de Médicos</h4>
        </div>

        <div class="col-md-8">
          <router-link :to="{name: 'medicos_novo'}" class="btn btn-primary float-right"><i class="fa fa-fw fa-plus"></i> Novo</router-link>
        </div>
      </div>
      <hr>
      <div class="row">
        <BlockUI v-show="blockUI">
          <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
          <p class="mt-3">Aguarde...</p>
        </BlockUI>
        <card-medico :dadosMedico="d" v-bind:key="d.id" v-for="d in dados"></card-medico>

        <div class="col col-6 offset-3">
          <button @click="nextPage" v-show="next_page_url" type="button" class="btn btn-lg btn-primary btn-block mt-5">Veja <i class="fa fa-fw fa-plus"></i></button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style>
  .bartop {
    width: 100%;
    height: 45px;
    display: flex;
    flex-direction: row;
    flex: 10;
    background-color: #e3e3e3
  }
</style>
