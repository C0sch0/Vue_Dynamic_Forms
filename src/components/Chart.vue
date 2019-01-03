<template>
    <div class="chart">
        <h1 class="highcharts-title">Valor cuota fondo {{name}}</h1>
        <h2 class="highcharts-subtitle">{{ profit }}</h2>
        <highcharts :constructor-type="'stockChart'" :options="options"></highcharts>
    </div>
</template>
<script>
    /* eslint-disable */

    import _ from 'lodash';

    export default {
        name: 'Chart',
        props: {
            name: String,
            realAssetId: Number,
        },
        data: function () {
            return {
                days: [],
                startDate: null,
                endDate: null,
            };
        },
        created: function () {
            this.fetchDays();
        },
        methods: {
            fetchDays() {
                fetch(`https://fintual.cl/api/real_assets/${this.realAssetId}/days`)
                    .then(data => data.json())
                    .then(data => {
                        this.days = data['data']
                            .map(day => [Date.parse(day["attributes"]["date"]), day["attributes"]["price"]])
                            .sort((a, b) => a[0] - b[0])
                    });
            },
            setExtremes(e) {
                this.startDate = e.min;
                this.endDate = e.max;
            }
        },
        computed: {
            options() {
                return {
                    series: [{
                        name: 'Valor Cuota',
                        data: this.days
                    }],
                    xAxis: {
                        events: {
                            afterSetExtremes: this.setExtremes,
                        },
                    },
                };
            },
            profit() {
                if (!this.startDate || !this.endDate) { return '' }
                const sortedDays = _.cloneDeep(this.days).sort((a, b) => a[0] - b[0])
                const startElement = sortedDays.find(day => _.inRange(day[0], this.startDate, this.endDate + 1))
                const endElement = _.reverse(sortedDays).find(day => _.inRange(day[0], this.startDate, this.endDate + 1))
                return `(Rentabilidad del periodo seleccionado: ${_.round(((endElement[1] - startElement[1]) / startElement[1]) * 100, 4)}%)`
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1.highcharts-title, h3.highcharts-subtitle {
        font-family: "Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif;
    }
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
    @media (max-width: 768px) {
        h1, h2, h3, h4, h5, h6 {
            font-size: .8em;
        }
    }

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
    .navbar .navbar--brand {
        max-width: 150px;
    }
    .navbar .navbar--brand__logo {
        width: 100%;
    }
    .chart {
        margin-bottom: 32px;
    }
    .chart .highcharts-container .highcharts-root {
        width: 100%;
    }
    .chart .highcharts-container .highcharts-root .highcharts-range-selector-group .highcharts-range-selector-buttons text {
        fill: #dae0e5 !important;
    }
    .chart .highcharts-container .highcharts-root .highcharts-range-selector-group .highcharts-range-selector-buttons .highcharts-button .highcharts-button-box {
        border-radius: 50%;
        color: #3DADE2;
        cursor: pointer;
        height: 32px;
        rx: 20px;
        ry: 20px;
        stroke: #3DADE2;
        width: 32px;
    }
    .chart .highcharts-container .highcharts-root .highcharts-range-selector-group .highcharts-range-selector-buttons .highcharts-button text {
        color: #3DADE2 !important;
        fill: #3DADE2 !important;
        transform: translateY(6px);
    }
    .chart .highcharts-container .highcharts-root .highcharts-range-selector-group .highcharts-range-selector-buttons .highcharts-button-disabled .highcharts-button-box {
        color: #dae0e5;
        stroke: #dae0e5;
    }
    .chart .highcharts-container .highcharts-root .highcharts-range-selector-group .highcharts-range-selector-buttons .highcharts-button-disabled text {
        color: #dae0e5;
        cursor: default !important;
        stroke: #dae0e5;
    }
    .chart .highcharts-container .highcharts-root .highcharts-range-selector-group .highcharts-range-selector-buttons .highcharts-button-pressed .highcharts-button-box {
        fill: #3DADE2;
        stroke: #3DADE2;
    }
    .chart .highcharts-container .highcharts-root .highcharts-range-selector-group .highcharts-range-selector-buttons .highcharts-button-pressed text {
        color: white !important;
        cursor: default !important;
        fill: white !important;
    }
    .chart .highcharts-container .highcharts-root .highcharts-range-selector-group text {
        transform: translateY(6px);
    }
    .chart .highcharts-container .highcharts-root .highcharts-input-group .highcharts-label .highcharts-label-box {
        height: 32px;
        rx: 5px;
        ry: 5px;
        stroke: #4D4D4D;
        stroke-width: 2;
    }
    input.highcharts-range-selector {
        height: 32px !important;
    }
    .chart .highcharts-container .highcharts-root .highcharts-input-group .highcharts-label text {
        fill: #dae0e5 !important;
        transform: translateY(6px);
    }
    .chart .highcharts-container .highcharts-root .highcharts-input-group .highcharts-label text tspan {
        fill: #4D4D4D;
    }
    .chart .highcharts-container .highcharts-root .highcharts-title {
        display: block;
        fill: none;
        text-align: left;
    }
    .chart .highcharts-container .highcharts-root .highcharts-title tspan {
        font-family: "Lato";
        font-weight: 900;
    }

    .highcharts-graph {
        stroke: #3DADE2;
        stroke-width: 3;
    }

    .highcharts-markers .highcharts-halo {
        fill: #333;
    }

    .highcharts-tooltip-box .highcharts-label-box {
        stroke: #dae0e5;
        stroke-width: 2 !important;
    }
    .highcharts-tooltip-box text tspan {
        fill: #333;
    }

    .highcharts-navigator-handle {
        rx: 5px;
        ry: 5px;
        stroke: #333;
    }
    .highcharts-navigator-mask-inside {
        fill: rgba(48,96,139,.2)
    }

    @media (max-width: 768px) {
        .container {
            margin: 10px 20px;
        }
    }
</style>
