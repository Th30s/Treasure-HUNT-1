$(".oro").click(function() {
    $("#scrtimg").toggle();
    $(".oro").text("JK YOU JUST GOT BEANED!!");
});
$("#scrtimg").mouseenter(function() {
    $(".oro").text("Doublle click the dragons pile of AURUM");
});    
$("#aurum").dblclick(function() {
    $("#gnome").fadeIn();
});
$("#reset").click(function() {
    location.reload();
});