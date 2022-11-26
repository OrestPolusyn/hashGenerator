const blockList = document.querySelectorAll(".tab_item");
const contentBlock = document.querySelectorAll(".tab-content");

const change = function change(i) {
    blockList[i].addEventListener("click", function() {
        contentBlock.forEach(function(element) {
            return element.classList.remove("tab-content_active");
        });
        blockList.forEach(function(element) {
            return element.classList.remove("tab_active");
        });
        contentBlock[i].classList.add("tab-content_active");
        blockList[i].classList.add("tab_active");
    });
    blockList[i].addEventListener("mouseenter", function() {
        contentBlock.forEach(function(element) {
            return element.classList.remove("tab-content_active");
        });
        blockList.forEach(function(element) {
            return element.classList.remove("tab_active");
        });
        contentBlock[i].classList.add("tab-content_active");
        blockList[i].classList.add("tab_active");
    });
};

for (let i = 0; i < blockList.length; i++) {
    change(i);
}


function onResize() {
    $('.wrapper').height();
    const newWrapperHeigth = window.innerHeight - 1.5 * $("footer").height() - $("header").height();
    $('.wrapper').height(newWrapperHeigth);
}
$(document).ready(onResize);
$(window).resize(onResize);



$(".faq-title").click(function() {
    $(this).parent().siblings(".faq-blockText").slideToggle();
    $(this).toggleClass('up');
})


let files = [],
    filesArray = document.getElementById("files");
filesArray.addEventListener("change", function(e) {
    let f = filesArray.files;
    for (var i = 0; i < f.length; i++) {
        if (files.findIndex(e => e.name === f[i].name) < 0)
            files.push(f[i]);



    }

    if (files.length >= 1) {
        let filesName = [];
        for (let i = 0; i < files.length; i++) {
            filesName.push(files[i].name)


        }
        $("#input-name")[0].value = filesName.join("\r\||\r");
        $("#select")[0].innerText = files.length + ' Dateien ausgewählt';
    }


});



$('.close, .btn_close-popup').click(function() {
    $('.popup-choose').hide()
    $('.overlay-popup ').hide();
    $('.popup-success').hide();
    $('.overlay-success ').hide();
});

$("#input").hide();

$("#files").click(function() {
    $("#input-name").show();
    $("#input").hide();
    $('.tooltip-addText').css("top", "auto")

})

$("#add").click(function() {
    if (files.length !== 0) {
        $("#input")[0].value = "";
        $("#input")[0].value =
            Array.from($("#input")[0].value.split(/\r?\n/g))
            .concat(
                Array.from(files.map(function(y) {

                    return y.hash + "|" + y.name
                }))
            )
            .filter(function(y) {
                return y.length && y.includes("|");
            })
            .filter(function(x2, i2, s2) {
                return s2.indexOf(x2) == i2;
            })
            .join("\r\n\r");

        $(".side").removeClass("side-hidden");
        $('.popup-success').show();
        $('.overlay-success ').show();
        $("#input-name").hide()
        $("#input").show()
        $('.tooltip-addText').css("top", "60px")
    } else {
        if (files !== 0) {
            $('.popup-choose').show();
            $('.overlay-popup ').show();
        }

    }


})


$(".finish-btn ").click(function() {
    $("form")[0].reset();
    $(".side").addClass("side-hidden");
    $("#input")[0].value = "Hash code | File name";
    files = [];
    $("#select")[0].innerText = 'Wählen Sie Dateien aus';
    $("#input-name").show();
    $("#input").hide();
    $('.tooltip-addText').css("top", "auto")
})