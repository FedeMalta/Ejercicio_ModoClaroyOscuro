$(function() {

    $("#botonClaro").click(function() {
        document.documentElement.setAttribute('data-bs-theme','light')
        $("table").addClass("table-warning");

        $("#botonClaro").addClass("btn-light");
        $("#botonClaro").removeClass("btn-warning");
        $("#botonOscuro").addClass("btn-light");
        $("#botonOscuro").removeClass("btn-warning");
    });

    $("#botonOscuro").click(function() {
        document.documentElement.setAttribute('data-bs-theme','dark')
        $("table").removeClass("table-warning");
        
        $("#botonClaro").removeClass("btn-light");
        $("#botonClaro").addClass("btn-warning");
        $("#botonOscuro").removeClass("btn-light");
        $("#botonOscuro").addClass("btn-warning");
    });
});