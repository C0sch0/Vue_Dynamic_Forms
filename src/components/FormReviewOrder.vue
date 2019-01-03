<template>
  <div>
    <h1 class="title">Wazowski, análisis</h1>

    <h2 class="subtitle">
      Según nuestros calculos, tu fondo:
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
          </div>
        </div>
      </div>

      <div>
        <p>Ha tenido una rentabilidad promedio de:</p>
        <span class="dollar-sign">% </span>
        <span class="number">3.45</span>
      </div>
      <div>
        <p>Lo que equivale a que tu monto total actual es aproximadamente:</p>
        <span class="dollar-sign">$ </span>
        <span class="number">2.453.293</span>   <!--<{{totalPrice}}-->
      </div>
      <div>
        <p>En comisión has pagado una horrorosidad de:</p>

        <span class="dollar-sign">$ </span>
        <span class="number">203.392</span>
        <p class="wow">(Wow! Acaso no sabías que Fintual es harto más barato ? Pensabamos que eras más viv@)</p>
      </div>
      <div style="height: 80px;"></div>



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
        <div class="w-1/3">
          <h3>Información</h3>

          <p class="description">
            Días: 90
          </p>
          <p class="description">
            Monto: 1.000.000
          </p>
          <p class="description">
            Valor cuota inicial: 9.234
          </p>
          <p class="description">
            Valor cuota final: 1.234
          </p>
        </div>

        <div class="w-1/3">
          <h3>{{wizardData.recipient}}</h3>
          <p class="leading-normal">
            AGF: {{wizardData.address}}
          </p>
          <p>
            Fondo: Fondo A Serie Jackie Chan
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
.wow {
  font-size: 0.3cm;
}
</style>
