$(function() {
    // menu click
    $("#navicon").click(function() {
        $("#menu-left").stop().toggleClass("slide-right");
        $("#content-right").stop().toggleClass("menu-slider");
    });
    //bootstrap datepicker
    $(".datepicker").datepicker({
        format: 'yyyy/mm/dd',
        autoclose: true,
        language: 'zh-CN'
    });
});
