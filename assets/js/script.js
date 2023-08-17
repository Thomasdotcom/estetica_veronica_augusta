alert('Site em construção, o modelo é apenas um protótipo')
alert('Versão 1.0.2')

setInterval(function() {
    const show = document.querySelector('span[data-show]')
    const next = show.nextElementSibling || document.querySelector('span:first-child')
    const up = document.querySelector('span[data-up]')

    if (up) {
        up.removeAttribute('data-up')
    }

    show.removeAttribute('data-show')
    show.setAttribute('data-up','')

    next.setAttribute('data-show', '')
}, 4000)
