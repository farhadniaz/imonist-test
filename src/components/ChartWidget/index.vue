<template>
  <div class="widget-box">
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
import columnSampleData from "./columnSampleData";
import plotSampleData from "./plotSampleData";
export default {
  props: {
    kind: {
      type: String,
      default: "column",
    },
  },

  data() {
    return {
      chartOptions: this.kind == "polt" ? plotSampleData : columnSampleData,
    };
  },
};
</script>

<style>
</style>