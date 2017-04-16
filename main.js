$(document).ready(function () {
    $("button").click(function (e) {
        
        var x = e.offsetX;
        var y = e.offsetY;
        $(".dropdown").css({
            "left": x + "px",
            "top": y +"px",
            "display": "block"
        })
        $(".dropdown").find("li").click(function(){
            alert("item clicked!");
            $(".dropdown").hide();
        })
    })
})