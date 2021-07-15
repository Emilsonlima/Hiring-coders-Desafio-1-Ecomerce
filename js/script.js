function enviarForm() {
    const nomeVal = document.querySelector('#nome') 
    const nome = String(nomeVal.value)

    const emailVal = document.querySelector('#email')
    const email = String(emailVal.value)

    const formInfos = `Nome: ${nome} - Email: ${email}` 

    localStorage.setItem('formInfos', formInfos)

    alert(`Obrigado ${nome}, seu email ${email} foi cadastrado com sucesso. Você receberá nossos Cupons em breve ;)`)
}