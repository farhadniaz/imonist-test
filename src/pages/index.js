import Vue from "vue";
import Router from "vue-router";
import Dashboard from "@/pages/Dashboard";
import DataTable from "@/pages/Dashboard/DataTable";
import Login from "@/pages/Login";
import PageNotFound from "@/pages/NotFound";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/data-table",
      name: "DashboardDataTable",
      component: DataTable,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    { path: "*", component: PageNotFound },
  ],
});

export default router;