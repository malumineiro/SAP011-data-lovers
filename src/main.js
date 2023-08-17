import { filtroPaises, sortByAZ } from "./data";
import data from '.data/countries/countries.js';

const homePage = document.querySelector('#home-nav');
const countriesPage = document.querySelector('#countries-nav');
const aboutPage = document.querySelector('#about-nav');
const divHome = document.querySelector('.home');
const divCountriess = document.querySelector('.countries');
const divAbout = document.querySelector('.about');
const statisticText = document.querySelector(".statistic-data");

const selectOrder = document.querySelector("#select-order-country");

const clickMenu = document.querySelector(".burger-menu");
const itensMenu = document.querySelector(".menu");