<template>
  <div id="app" class="container mx-auto py-6">
    <header>
      <div>
        <span id="logo">Hecho por Fintual</span>
      </div>
    </header>

    <div class="content">
      <FormWizard/>
    </div>
    <div style="margin-top: 800px;">    <Chart v-for="(fund, index) in funds" :key="`fund-chart-${index}`" :real-asset-id="fund.realAssetId" :name="fund.name" />
    </div>

  </div>
</template>

<script>
import FormWizard from './components/FormWizard.vue'
import Chart from './components/Chart.vue'

export default {
  name: 'app',
  components: {
    FormWizard,
    Chart
  },
  data: function () {
    return {
      baseUrl: process.env.BASE_URL,
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
    };
  }
}
</script>

<style>
  #app {
    font-family: "Open Sans", sans-serif !important;
    text-align: center;
    color: #2c3e50;
  }
  .container {
    margin: 30px 100px;
  }
  .navbar {
    background-color: white;
    margin-bottom: 32px;
  }
  input.highcharts-range-selector {
    height: 32px !important;
  }

  @media (max-width: 768px) {
    .container {
      margin: 10px 20px;
    }
  }
</style>
