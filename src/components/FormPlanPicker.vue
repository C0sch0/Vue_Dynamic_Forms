<template>
  <div>
    <h1 class="title">Sherlock</h1>

    <h2 class="subtitle">
      Queremos que inviertas de forma informada
    </h2>
    <h2 class="subtitle">
      Que fondo de la AGF: XXXX compraste ?
    </h2>

    <div class="plans">
      <div
              v-for="plan in plans"
              :key="plan.price"
              @click="pickPlan(plan)"
              :class="{'active-plan': selectedPlan === plan}"
              class="plan"
      >
        <div class="weight">
          {{plan.weight}}
        </div>
        <div class="description">
          <span class="title">
              {{plan.name}}
          </span>
        </div>
        <!--<div class="price">-->
          <!--<span class="dollar-sign">$</span>-->
          <!--<span class="number">{{plan.price}}</span>-->
        <!--</div>-->
      </div>
    </div>
    <div v-if="$v.selectedPlan.$error" class="error">Debes seleccionar tu Fondo</div>
  </div>
</template>

<script>
  import {required} from 'vuelidate/lib/validators'

  export default {
    data() {
      return {
        plans: [
          {
            price: 19,
            weight: 'A',
            name: 'Fondo A arriesgado',
            description: 'Inversiones principalmente en Chile, Asia y Wakanda'
          },
          {
            price: 19,
            weight: 'B',
            name: 'Fondo B moderado',
            description: 'Inversiones principalmente en Chile, Asia y Wakanda'
          },
          {
            price: 19,
            weight: 'C',
            name: 'Fondo C pasivo',
            description: 'Inversiones principalmente en Chile, Asia y Wakanda'
          }
        ],
        selectedPlan: null
      }
    },
    validations: {
      selectedPlan: {
        required
      }
    },
    methods: {
      pickPlan (plan) {
        this.selectedPlan = plan
        this.submit()
      },
      submit () {
        this.$emit('update', {
          data: {
            plan: this.selectedPlan
          },
          valid: !this.$v.$invalid
        })
      }
    }
  }
</script>
