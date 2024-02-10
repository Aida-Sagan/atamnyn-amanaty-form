"use strict";
(function() {

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * choose year
   */

  let birthYear = document.querySelector('#birthYear');
  let currYear = new Date().getFullYear();

  // Добавляем опцию "Выберите год" в начало списка
  let defaultOption = document.createElement("option");
  defaultOption.disabled = true;
  defaultOption.selected = true;
  birthYear.add(defaultOption);

  // Добавляем года в список
  for(let year = 1700; year <= currYear; year++){
    let optionElement = document.createElement("option");
    optionElement.value = year;
    optionElement.text = year;
    birthYear.add(optionElement);
  }

  /**
  * Send form
   */

  let form = document.querySelector('#formApp');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
      choice: document.querySelector('#choice').value,
      fullName: document.querySelector('#fullName').value,
      relativeName: document.querySelector('#relativeName').value,
      birthYear: document.querySelector('#birthYear').value,
      dateBirth: document.querySelector('#dateBirth').value,
      birthInterval: document.querySelector('#birthInterval').value,
      birthCountry: document.querySelector('#birthCountry').value,
      birthPlace: document.querySelector('#birthPlace').value,
      enlistmentDate: document.querySelector('#enlistmentDate').value,
      choiceStatus: document.querySelector('#choiceStatus').value,
      quantityChild: document.querySelector('#quantityChild').value,
      anyInform: document.querySelector('#anyInform').value,
      isPlen: document.querySelector('#isPlen').value,
      captivityLocationInfo: document.querySelector('#captivityLocationInfo').value,
      file: document.querySelector('#file').value,
      FIO: document.querySelector('#FIO').value,
      numberPhone: document.querySelector('#numberPhone').value,
      address: document.querySelector('#address').value,
      email: document.querySelector('#email').value,
      knowAbout: document.querySelector('#knowAbout').value,
    };

    localStorage.setItem('formData', JSON.stringify(formData));
    window.location.href = 'check-data-page.html';

  })

})()

