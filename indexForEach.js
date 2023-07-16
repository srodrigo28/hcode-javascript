var filds = document.querySelectorAll("#form-user-create [name]")

filds.forEach(function(field, index){
    console.log(field.name, index)
})