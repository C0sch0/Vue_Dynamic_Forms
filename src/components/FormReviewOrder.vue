<template>
  <div>
    <h1 class="title">Wazowski, análisis</h1>

    <h2 class="subtitle">
      Según nuestros calculos, a tu fondo mutuo le ha ido
    </h2>

    <div class="summary">
      <h3>Grafico 1</h3>

      <p class="description">
        Valor cuota a traves del tiempo de tu fondo
      </p>

      <div class="plans">
        <div class="plan active-plan">
          <div class="weight">
            {{wizardData.plan.weight}}
          </div>

          <div class="description">
            <span class="title">
              {{wizardData.plan.name}}
            </span>
            <span class="description">
              {{wizardData.plan.description}}
            </span>
          </div>

          <div class="price">
            <span class="dollar-sign">$</span>
            <span class="number">{{totalPrice}}</span>
          </div>
        </div>
      </div>


      <h3>
        Nos gustaría seguir ayudandote.

      </h3>
      <h3>Quieres ver las proyecciones de estos fondos, pero con nosotros ?</h3>

      <div @change="submit" class="options">
        <div class="option">
          <input v-model="form.chocolate" type="checkbox" value="chocolate" id="chocolate">
          <label for="chocolate">Mandenme mail con mas información</label>
        </div>

        <div class="option">
          <input v-model="form.otherTreat" type="checkbox" value="chocolate" id="other_treat">
          <label for="other_treat">Revisar pagina de Fintual</label>
        </div>
      </div>

      <div class="address">
        <div class="w-2/3">
          <h3>Información</h3>
          <p class="description">
            Comprado hace X días, Y monto
          </p>
        </div>

        <div class="w-1/3">
          <h3>{{wizardData.recipient}}</h3>
          <p class="leading-normal">
            AGF: {{wizardData.addresss}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      wizardData: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        form: {
          chocolate: false,
          otherTreat: false
        },
        funds: [
          {
            realAssetId: 186,
            name: "Risky Norris",
          },
          {
            realAssetId: 187,
            name: "Moderate Pitt",
          },
          {
            realAssetId: 188,
            name: "Conservative Clooney",
          },
        ]
      }
    },
    computed: {
      totalPrice () {
        let total = this.wizardData.plan.price
        if (this.form.chocolate) {
          total += 4
        }
        if (this.form.otherTreat) {
          total += 2
        }
        return total
      }
    },
    validations: {},
    methods: {
      submit () {
        this.$emit('update', {
          data: {
            chocolate: this.form.chocolate,
            otherTreat: this.form.otherTreat
          },
          valid: true
        })
      }
    }
  }
</script>

<style scoped>

</style>
