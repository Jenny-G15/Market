const formLogin = document.querySelector("#formLogin");
formLogin.addEventListener('submit', (e)=>{
    e.preventDefault()

    const email= document.querySelector('#email').value
    const password= document.querySelector('#password').value

    const users = JSON.parse(localStorage.getItem('users')) || []
    const validUsers = users.find(user => user.email === email && user.password === password)

    if (!validUsers) {
        return alert('Usuario y/o contraseña incorrectos')      
    }

    alert('Bienvenido')

    window.location.href= 'inventario.html'
})