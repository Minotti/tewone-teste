<script>
import Select2 from 'v-select2-component'
import { mask } from 'vue-the-mask'

export default {
  name: 'CadMed',
  data () {
    return {
      id: this.$route.params.id,
      erros: {
        has: false,
        especialidade: false,
        crm: false,
        nome: false,
        telefone: false
      },
      form_especialidades: null,
      blockUI: false,
      alertSuccess: false,
      messageAlert: null,
      alertError: false,
      data: {
        name: null,
        crm: null,
        phone: null,
        specialities: null
      }
    }
  },
  methods: {
    editar () {
      this.validarForm()
      if (!this.erros.has) {
        this.blockUI = true
        this.$http.put(`api/doctors/update/${this.id}`, this.data, { headers: { 'Content-Type': 'application/json' } })
          .then(res => {
            this.alertSuccess = true
            this.messageAlert = 'Médico editado com <strong>sucesso!</strong>'
            this.blockUI = false
          })
          .catch(error => {
            let erros = error.response.data.errors
            let msgs = '<ul> Observe os erros abaixo:'
            for (let key in erros) {
              for (let keyMessage in erros[key]) {
                msgs += `<li>${erros[key][keyMessage]}</li>`
              }
            }
            msgs += '</ul>'
            this.alertError = true
            this.messageAlert = msgs
            this.blockUI = false
          })
      }
    },
    deletar () {
      this.$confirm(`Deseja realmente excluir o Médico ${this.data.name}?`, 'Confirme a operação', 'question')
        .then(r => {
          this.blockUI = true
          this.$http.delete(`/api/doctors/delete/${this.id}`, { headers: { 'Content-Type': 'application/json' } })
            .then(resp => {
              this.blockUI = false
              this.$router.push('/')
            })
        })
    },
    validarForm () {
      this.erros.crm = !this.data.crm
      this.erros.telefone = !this.data.phone
      this.erros.especialidade = !this.data.specialities || this.data.specialities.length < 2
      this.erros.nome = !this.data.name
      this.erros.has = this.erros.crm || this.erros.especialidade || this.erros.nome || this.erros.telefone
      this.closeAlert()
    },
    closeAlert () {
      this.alertError = false
      this.alertSuccess = false
    }
  },
  components: {
    Select2
  },
  directives: {
    mask
  },
  mounted () {
    this.$http.get('api/specialities', { headers: { 'Content-Type': 'application/json' } })
      .then(res => {
        this.form_especialidades = res.data
      })

    this.$http.get(`api/doctors/find/${this.id}`, { headers: { 'Content-Type': 'application/json' } })
      .then(res => {
        this.data.name = res.data[0].name
        this.data.crm = res.data[0].crm
        this.data.phone = res.data[0].phone
        this.data.specialities = []

        res.data[0].specialities.map((item, key) => {
          this.data.specialities.push(item.id)
        })
      })
  }
}
</script>

<template>
  <div class="container mt-2">
    <BlockUI v-show="blockUI">
      <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
      <p class="mt-3">Aguarde...</p>
    </BlockUI>
    <div class="row">
      <div class="col-8 offset-2">
      <router-link class="btn btn-info mb-4" to="/">Home</router-link>

        <div v-show="alertSuccess" class="alert alert-success alert-dismissible fade show" role="alert">
          <span v-html="messageAlert"></span>
          <button type="button" class="close" @click.prevent="closeAlert">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div v-show="alertError" class="alert alert-danger alert-dismissible fade show" role="alert">
          <span v-html="messageAlert"></span>
          <button type="button" class="close" @click.prevent="closeAlert">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form @submit.prevent="editar">
          <div class="mb-3">
            <h5 class="mb-4 d-inline">Editar Médico</h5>
            <router-link to="" @click.native="deletar" class="text-muted d-inline float-right"><i class="fa fa-fw fa-trash"></i> Excluir</router-link>
          </div>
          <div class="row">
            <div class="col col-6">
              <div class="form-group">
                <label for="" class="control-label">Nome</label>
                <input type="text" class="form-control" v-model="data.name">
                <span class="help-block text-danger" v-if="erros.nome">O Nome é obrigatório</span>
              </div>
            </div>
            <div class="col col-3">
              <div class="form-group">
                <label for="" class="control-label">CRM</label>
                <input type="text" class="form-control" masked="true" required v-model="data.crm">

                <span class="help-block text-danger" v-if="erros.crm">O CRM é obrigatório</span>
              </div>
            </div>
            <div class="col col-3">
              <div class="form-group">
                <label for="" class="control-label">Telefone</label>
                <input type="text" class="form-control" v-mask="'(##) #####-####'" required v-model="data.phone">
                <span class="help-block text-danger"  v-if="erros.telefone">O Telefone é obrigatório</span>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col col-12">
              <div class="form-group">
                <label for="" class="control-label">Especialidades</label>
                <Select2 v-model="data.specialities" required :settings="{multiple: true}" :options="form_especialidades" />
                <span class="help-block text-danger" v-if="erros.especialidade">Selecione no mínimo 2 (duas) especialidades!</span>
              </div>
            </div>
          </div>

          <button type="submit" class="btn btn-lg btn-primary btn-block">Salvar</button>
        </form>
      </div>
    </div>
  </div>
</template>
