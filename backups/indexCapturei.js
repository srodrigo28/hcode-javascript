var filds = document.querySelectorAll("#form-user-create [name]")
var user = {}

filds.forEach(function(field, index){
    if(field.name == "gender"){
        if(field.checked){
            user[field.name] = field.value 
        }
    }else{
        user[field.name] = field.value
    }
})
console.log(user)

document.getElementById('form-user-create').addEventListener("submit", function(e){
    e.preventDefault()

    confirm('Salvar')
})

document.querySelector('#excluir').addEventListener("click", function(e){
    e.preventDefault()

    confirm('Excluir')
})
document.querySelector('#editar').addEventListener("click", function(e){
    e.preventDefault()

    confirm('Editar')
})