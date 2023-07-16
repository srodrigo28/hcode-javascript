var filds = document.querySelectorAll("#form-user-create [name]")
var user = {}

function addLine(dataUser){

    console.log('Adline', dataUser)
}

document.getElementById('form-user-create').addEventListener("submit", function(e){
    e.preventDefault()

    filds.forEach(function(field){
        if(field.name == "gender"){
            if(field.checked){
                user[field.name] = field.value 
            }
        }else{
            user[field.name] = field.value
        }
    })
    addLine(user)
})
