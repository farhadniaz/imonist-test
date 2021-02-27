import { authLogin } from "@/services/auth";
import Cookies from "js-cookie";

const tokenName = "token";

if (localStorage.getItem(tokenName)) {
  Cookies.set(tokenName, localStorage.getItem(tokenName));
}

// initial state
const state = () => ({
  user: JSON.parse(localStorage.getItem("user")),
});

// getters
const getters = {
  isAuthenticated: (state /*, getters, rootState */) => {
    return !!state.user;
  },
};
// actions
const actions = {
  logIn({ commit }, credtionals) {
    return authLogin(credtionals).then(({ user, token }) => {
      Cookies.set(tokenName, token);
      commit("setUser", user);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem(tokenName, token);
    });
  },

  logOut({ commit }) {
    return new Promise((res, rej) => {
      try {
        Cookies.remove(tokenName);
        commit("setUser", undefined);
        localStorage.removeItem("user");
        localStorage.removeItem(tokenName);
        res();
      } catch {
        rej();
      }
    });
  },
};

// mutations
const mutations = {
  setUser(state, user) {
    state.user = user;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
