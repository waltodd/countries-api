import http from "../../http-common";
const state = {
  countries: [],
  country: [],
  borders: [],
  regions: [
    { value: "africa", text: "Africa" },
    { value: "americas", text: "Americas" },
    { value: "asia", text: "Asia" },
    { value: "europe", text: "Europe" },
    { value: "ocean", text: "Oceania" },
  ],
  loading: true,
};

const getters = {
  allCountries: (state) => state.countries,
  singleCountry: (state) => state.country,
  bordersCountry: (state) => state.borders,
  AllRegions: (state) => state.regions,
  spinner: (state) => state.loading,
};
const actions = {
  async fetchCountries({ commit, state }) {
    state.loading = true;
    try {
      //fetch data from url endpoint
      const response = await http.get("/all");
      const data = await response.data;
      //console.log(data);
      // handle success
      commit("SET_COUNTRIES", data);
      state.loading = false;
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  async fetchCountry({ commit }, code) {
    try {
      const response = await http.get(`/alpha/${code}`);
      const data = response.data;
      //console.log(data);
      const { borders: codes } = data;

      const response1 = await http.get(`/alpha?codes=${codes.join(";")}`);
      const data1 = response1.data;
      state.borders = data1;
      //console.log(data1);
      commit("SET_COUNTRY", data);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
const mutations = {
  SET_COUNTRIES: (state, countries) => (state.countries = countries),
  SET_COUNTRY: (state, country) => (state.country = country),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
