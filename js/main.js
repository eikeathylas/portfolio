(function(window, document) {
    'use strict'
    const supports = !!document.querySelector

    const settings = {}

    const defaults = {
        eleMain: document.getElementById('info'),
        eleBody: '#',
        eleClass: '#',

        eleNav: '#nav',
        eleBtnNav: '#mobile-menu',
    }

    const main = (event) => {}

    const fixe = (event) => {
        const scroll = event.target.scrollingElement.scrollTop
        settings.eleNav.classList.toggle("fixe", scroll > 6)
    }

    const menu = (event) => {
        settings.eleBtnNav.classList.toggle("active")
        settings.eleNav.classList.toggle("active")
    }

    const setUp = function() {
        settings.eleNav = defaults.eleMain.querySelector(defaults.eleNav)
        settings.eleBtnNav = defaults.eleMain.querySelector(defaults.eleBtnNav)
    }

    const events = function() {
        window.addEventListener('load', main)
        window.addEventListener('scroll', fixe)
        settings.eleBtnNav.addEventListener('click', menu)
    }

    const init = function(options) {
        if (!supports) return

        setUp()

        events()
    }

    init()
}(window, document))