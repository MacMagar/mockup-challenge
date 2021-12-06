const $ = require("jquery");

$(function () {
    const premium_btn = $(".feature__text-btn-premium");
    const starter_btn = $(".feature__text-btn-starter");

    console.log(premium_btn)
    console.log(starter_btn)

    premium_btn.on("click", function () {
        starter_btn.removeClass("btn-dark")
        premium_btn.addClass("btn-dark")
    })

    starter_btn.on("click", function () {
        premium_btn.removeClass("btn-dark")
        starter_btn.addClass("btn-dark")
    })
})