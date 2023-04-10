import axios from "axios";
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

//?Me trae todos los paises
const { REACT_APP_APIURL } = process.env;
export const getAllCountries = () => {
  return async function (distpach) {
    try {
      const response = await axios.get(`${REACT_APP_APIURL}/countries`);
      const countries = response.data;
      return distpach({
        type: GET_ALL_COUNTRIES,
        payload: countries,
      });
    } catch (error) {
      return error.message;
    }
  };
};

//*Me trae el detalle del pais

export const getDetailCountry = (id) => {
  return async function (distpach) {
    try {
      const response = await axios.get(`${REACT_APP_APIURL}/countries/${id}`);
      const detailCountry = response.data;
      distpach({
        type: GET_DETAIL_COUNTRY,
        payload: detailCountry,
      });
    } catch (error) {
      return error.message;
    }
  };
};

//! Trae todas las actividades

export const getActivities = () => {
  return async function (distpach) {
    try {
      const response = await axios.get(`${REACT_APP_APIURL}/activities`);
      const activities = response.data;
      return distpach({
        type: GET_ACTIVITIES,
        payload: activities,
      });
    } catch (error) {
      return error.message;
    }
  };
};

//? filtro por actividades

export function filterActivity(value) {
  return {
    type: FILTER_ACTIVITY,
    payload: value,
  };
}

//*Filtro por continente

export function filterContinent(value) {
  return {
    type: FILTER_CONTINENT,
    payload: value,
  };
}

//? Ordenar los paises  por orden alfabetico de A-Z y de Z-A

export function alphaOrderAZ(payload) {
  return {
    type: AlPHA_ORDER_AZ,
    payload,
  };
}
export function alphaOrderZA(payload) {
  return {
    type: AlPHA_ORDER_ZA,
    payload,
  };
}

//!Ordenar los paises por poblacion (asc/des)

export function populationOrderAsc(payload) {
  return {
    type: POPULATION_ORDER_ASC,
    payload,
  };
}

export function populacionOrderDes(payload) {
  return {
    type: POPULATION_ORDER_DES,
    payload,
  };
}

//* Buscar paises por nombre pasado por query

export const getCountryByName = (name) => {
  return async function (distpach) {
    try {
      const response = await axios.get(
        `${REACT_APP_APIURL}/countries?name=${name}`
      );
      const country = response.data;
      return distpach({
        type: GET_BY_NAME,
        payload: country,
      });
    } catch (error) {
      return error.message;
    }
  };
};

//* Creacion de la actividad

export const postActivity = (body) => {
  return async function (distpach) {
    try {
      const response = await axios.post(`${REACT_APP_APIURL}/activities`, body);
      return response;
    } catch (error) {
      return error.message;
    }
  };
};
