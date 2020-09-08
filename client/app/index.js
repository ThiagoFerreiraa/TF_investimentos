let campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
]

console.log(campos)

let tbody = document.querySelector('table tbody')


document.querySelector('.form').addEventListener('submit', () => {
    
    event.preventDefault()


    let tr = document.createElement('tr')

    campos.forEach((campo) => {
        let td = document.createElement('td')

        td.textContent = campo.value

        tr.appendChild(td)
    })

    let tdvolume = document.createElement('td')

    tdvolume.textContent = campos[1].value * campos[2].value

    tr.appendChild(tdvolume)

    tbody.appendChild(tr)

    campos[0].value = ''
    campos[1].value = 1
    campos[2].value = 0
    campos[0].focus()
})

