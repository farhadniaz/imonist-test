<template>
  <Layout>
    <div class="home">
      <b-row>
        <b-col><ChartWidget /></b-col>
        <b-col> <ChartWidget kind="polt" /></b-col>
      </b-row>
    </div>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import ChartWidget from "@/components/ChartWidget";

export default {
  name: "Dashboard",
  components: {
    Layout,
    ChartWidget,
  },
};
</script>

<style>
</style>
