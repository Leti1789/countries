import {
  GET_ALL_COUNTRIES,
  GET_DETAIL_COUNTRY,
  GET_ACTIVITIES,
  FILTER_ACTIVITY,
  FILTER_CONTINENT,
  AlPHA_ORDER_AZ,
  AlPHA_ORDER_ZA,
  POPULATION_ORDER_ASC,
  POPULATION_ORDER_DES,
  GET_BY_NAME,
} from "../actionsTypes/actionsTypes";

const initialState = {
  countries: [],
  allCountries: [],
  detailCountry: {},
  activities: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      };
    case GET_DETAIL_COUNTRY:
      return {
        ...state,
        detailCountry: action.payload,
      };
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };

    case FILTER_ACTIVITY:
      const countries = state.allCountries;
      let filteredCountries = [];

      for (let i = 0; i < countries.length; i++) {
        const activities = countries[i].Activities;
        for (let j = 0; j < activities.length; j++) {
          let activity = activities[j].name;
          if (action.payload === "ALL") filteredCountries = countries;
          if (activity === action.payload) filteredCountries.push(countries[i]);
        }
      }

      return {
        ...state,
        countries: filteredCountries,
      };

    case FILTER_CONTINENT:
      let allCountries = state.allCountries;

      const filteredContinent =
        action.payload === "all"
          ? allCountries
          : allCountries.filter((el) => el.continent === action.payload);

      return {
        ...state,
        countries: filteredContinent,
      };

    case AlPHA_ORDER_AZ:
      let sortedAlphaAZ = state.countries.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      return {
        ...state,
        countries: sortedAlphaAZ,
      };

    case AlPHA_ORDER_ZA:
      let sortedAlphaZA = state.countries.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
      return {
        ...state,
        countries: sortedAlphaZA,
      };
    case POPULATION_ORDER_ASC:
      let populationOrderAsc;
      if (action.payload === "asc_population") {
        populationOrderAsc = state.allCountries.sort((a, b) => {
          if (parseInt(a.population) < parseInt(b.population)) {
            return -1;
          }
          if (parseInt(b.population) < parseInt(a.population)) {
            return 1;
          } else return 0;
        });
      }
      return {
        ...state,
        countries: populationOrderAsc,
      };

    case POPULATION_ORDER_DES:
      let populationOrderDes;
      if (action.payload === "des_population") {
        populationOrderDes = state.allCountries.sort((a, b) => {
          if (parseInt(a.population) > parseInt(b.population)) {
            return -1;
          }
          if (parseInt(b.population) > parseInt(a.population)) {
            return 1;
          } else return 0;
        });
      }
      return {
        ...state,
        countries: populationOrderDes,
      };
    case GET_BY_NAME:
      return {
        ...state,
        countries: action.payload,
      };

    default:
      return { ...state };
  }
};

export default reducer;
