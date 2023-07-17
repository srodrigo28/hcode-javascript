var filds = document.querySelectorAll("#form-user-create [name]")

filds.forEach(function(field, index){

    if(field.name == "gender"){
        if(field.checked){
            console.log("Sim", field.value)
        }
    }else{
        console.log("Nao", filds.value)
    }

    console.log(field.name, index)
})