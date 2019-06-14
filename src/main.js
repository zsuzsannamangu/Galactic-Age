import { getEarthAge } from './../src/galactic-age';
import { earthToPlanet } from './../src/galactic-age';
import { getAge } from './../src/galactic-age';
import { getLife } from './../src/galactic-age';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $('form#age-calculator-form').submit(function(event) {
    event.preventDefault();

  let dob = new Date($("#dob").val());

  $('.x-age').text(getAge(dob, 'earth')).show();
  $('.me-age').text(getAge(dob, 'mercury')).show();
  $('.ve-age').text(getAge(dob, 'venus')).show();
  $('.ma-age').text(getAge(dob, 'mars')).show();
  $('.ju-age').text(getAge(dob, 'jupiter')).show();

  $('.solution').show();
  $('.years-calculator').show();

  });

  $('form#years-calculator-form').submit(function(event) {
    event.preventDefault();

  let dob = new Date($("#dob").val());
  let number = parseInt($("#life-expectancy").val());

  $('.x-years').text(getLife(number, dob, 'earth')).show();
  $('.me-years').text(getLife(number, dob, 'mercury')).show();
  $('.ve-years').text(getLife(number, dob, 'venus')).show();
  $('.ma-years').text(getLife(number, dob, 'mars')).show();
  $('.ju-years').text(getLife(number, dob, 'jupiter')).show();

  $('.solution2').show();

  });

});
