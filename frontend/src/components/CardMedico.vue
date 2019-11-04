<script>
export default {
  name: 'CardMedico',
  props: {
    dadosMedico: Object
  },
  data () {
    return {
      badges: ['badge-primary', 'badge-secondary', 'badge-success', 'badge-danger', 'badge-warning', 'badge-info', 'badge-light', 'badge-dark'],
      id: Number,
      specialities: Object,
      name: String,
      crm: String,
      phone: String
    }
  },
  methods: {
    randomClasses () {
      let badge = this.badges[Math.floor(Math.random() * this.badges.length)]
      return `badge mr-1 ${badge}`
    }
  },
  mounted () {
    this.id = this.dadosMedico.id
    this.name = this.dadosMedico.name
    this.crm = this.dadosMedico.crm
    this.phone = this.dadosMedico.phone
    this.specialities = this.dadosMedico.specialities
  }
}
</script>

<template>
  <div class="col col-md-4">
    <router-link :to="{name: 'medicos_editar', params: {'id': this.id}}" title="Clique para editar" class="text-decoration-none">
      <div class="card-medico">
        <p class="m-0 text-truncate">{{this.name}}</p>
        <small class="text-muted crm mt-n5">{{this.phone}} - <strong>{{this.crm}}</strong></small>

        <div>
          <span :class="randomClasses()" class="" :key="s.id" v-for="s in specialities">{{s.name}}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
  .card-medico{
    box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.75);
    padding: 5px;
    margin: 5px;
    transition: transform .2s;
  }

  .card-medico > p {
    color: #000;
  }

  .card-medico:hover{
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.85);
    transform: scale(1.02)
  }

  .crm {
    font-size: 11px;
  }
</style>
