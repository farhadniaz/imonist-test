<template>
  <div class="order-grid">
    <Filer @change="onFilterChange" />
    <b-table striped hover :items="items" :fields="fields" :busy="loading">
      <template #cell(subeIsmi)="data">
        <b-avatar variant="primary" text=".."></b-avatar>
        {{ data.value }}
      </template>

      <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
import sampleData from "./sampleData";
import Filer from "./Filer";

export default {
  name: "DataTable Dashboard",
  components: {
    Filer,
  },
  data() {
    return {
      loading: false,
      filter: {
        start: undefined,
        end: undefined,
      },
      fields: [
        {
          label: "Sube Ismi",
          key: "subeIsmi",
          sortable: true,
        },
        {
          label: "Z Raporu",
          key: "zRaporu",
          sortable: true,
        },
        {
          key: "nakit",
          label: "Nakit",
          sortable: true,
        },
        {
          label: "kredi Kart",
          key: "krediKart",
          sortable: true,
        },
        {
          label: "Yemek Karti",
          key: "yemekKarti",
          sortable: true,
        },
        {
          label: "Doviz",
          key: "doviz",
          sortable: true,
        },
        {
          label: "Mobile Odeme Diger",
          key: "mobileOdemeDiger",
          sortable: true,
        },
        {
          label: "Masraf",
          key: "masraf",
          sortable: true,
        },
        {
          label: "Fark",
          key: "fark",
          sortable: true,
        },
      ],
      items: sampleData,
    };
  },
  methods: {
    onFilterChange() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    },
    // filterData
  },
};
</script>

<style>
.b-table {
  background: white;
  border: 2px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
}
.order-grid-filter {
  margin-bottom: 24px;
}
</style>
