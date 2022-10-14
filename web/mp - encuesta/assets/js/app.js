function seleccionarPuntaje(){
    // console.log($(this).data("puntaje"))
    let id = $(this).data("id");
    console.log(id)
    alert("enviar datos de encuesta")
    $(".btnSeleccionar .boxCircle").removeClass("active");
    $("#puntaje").val($(this).data("puntaje"));
    $(`#circulo-${id} .boxCircle`).addClass("active");

}

$(function(){
    $(".btnSeleccionar").on('click', seleccionarPuntaje);
    
        
});