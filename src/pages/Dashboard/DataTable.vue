<template>
  <Layout>
    <OrderGrid />
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import OrderGrid from "@/components/OrderGrid";

export default {
  name: "DataTable Dashboard",
  components: {
    Layout,
    OrderGrid,
  },
};
</script>

<style>
</style>
