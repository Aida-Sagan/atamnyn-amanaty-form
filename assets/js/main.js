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
  * Send form
   */

  async function submitForm() {
    let formData = new FormData(document.getElementById("contactForm"));

    try {
      let response = await fetch("/submit-form", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        let result = await response.json();
        if (result.status === "success") {
          document.getElementById("contactForm").reset();
          document.querySelector(".sent-message").style.display = "block";
        } else {
          document.querySelector(".error-message").style.display = "block";
        }
      } else {
        document.querySelector(".error-message").innerHTML = "Ошибка при отправке формы.";
        document.querySelector(".error-message").style.display = "block";
      }
    } catch (error) {
      console.error("Ошибка: " + error.message);
      document.querySelector(".error-message").innerHTML = "Ошибка при отправке формы.";
      document.querySelector(".error-message").style.display = "block";
    } finally {
      document.querySelector(".loading").style.display = "none";
    }
  }

})()