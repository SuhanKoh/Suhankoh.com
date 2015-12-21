$(document).ready(function(){
  $(".abuttons").click(function () {
    var idname= $(this).data('divid');
    console.log(idname);
    $("#"+idname).slideDown("slow").siblings().slideUp("slow");
  });
});