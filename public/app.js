const key = document.getElementById('key')
const code = document.getElementById('code')
const which = document.getElementById('which')

document.addEventListener('keydown', event => {
    key.textContent = event.key
    code.textContent = event.code
    which.textContent = event.which

    console.log(`event.key   ${event.key}   event.code  ${event.code}   event.which  ${event.which}`)

})