const blockList = document.querySelectorAll(".poligon-item ");
const blockListMenu = document.querySelectorAll(".tab_item ");
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
        $(".wrapper").css("visibility", "visible");
        if ($('.tab-content_active').hasClass('scroll')) {
            $('.content').addClass('content-scroll');
        } else {
            $('.content').removeClass('content-scroll');

        }
    });


};

$('.content').removeClass('content-scroll');

for (let i = 0; i < blockList.length; i++) {
    change(i);
}

$(".tooltiptext, .btn-hash, #add").mouseover(function() {
    $(this).siblings("span").fadeIn(500).delay(1600).hide(500);
}).mouseout(function() {
    $(this).siblings("span").css("display", "none");
});

$(".hexagon").mouseover(function() {
    $(this).children("span").css("display", "block").delay(4000).hide(1000);
}).mouseout(function() {
    $(this).children("span").css("display", "none");
});

$(window).on('load', function() {
    var $preloader = $('.preloader');
    $preloader.delay(2000).fadeOut('slow');
});


$(".link").click(function() {
    $('.preloader').fadeIn().delay(2000).fadeOut('slow');
    $('.choose-lang').delay(2000).fadeOut('slow');
});



function onResize() {
    $('.wrapper').height();
    const newWrapperHeigth = window.innerHeight - 5 * $("footer").height() - $("header").height() - 100;
    $('.wrapper').height(newWrapperHeigth);
    $('textarea').height(newWrapperHeigth - 220);
    if ($('#input-name').css("display") == "none") {
        $('#input').height(newWrapperHeigth - 1.7 * $('.side').height());

    }
}

$(document).ready(onResize);
$(window).resize(onResize);


$(".faq-title").click(function() {
    $(this).parent().siblings(".faq-blockText").slideToggle();

    if ($(this).hasClass('up')) {
        $(this).removeClass('up');

    } else {
        $(this).addClass('up');

    }
    $(".faq-title").not($(this)).parent().siblings(".faq-blockText").hide()
    $(".faq-title").not($(this)).removeClass('up');
    $(".content").animate({ scrollTop: $(this)[0].offsetTop - 20 })
});


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
        if ($(".lang").hasClass("de")) {
            if (files.length > 1) {
                $("#select")[0].innerText = files.length + ' Dateien ausgewählt';
            } else {
                $("#select")[0].innerText = files.length + ' Datei ausgewählt';

            }
        } else {
            if (files.length > 1) {
                $("#select")[0].innerText = files.length + ' Files selected';
            } else {
                $("#select")[0].innerText = files.length + ' File selected';

            }
        }
    }


});


$('.btn_close-popup').click(function() {
    $('.overlay-popup ').hide();
    $('.overlay-success ').hide();
    $('.overlay-copy ').hide();
});

$("#input").hide();

$("#files").click(function() {
    $("#input-name").show();
    $("#input").hide();
    $('.tooltip-addText').css("top", "auto")
    $("#add").show();
    $(".side").addClass("side-hidden");

});

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
        $('.tooltip-addText').css("top", "60px");
        $("textarea").css("min-height", "140px");
        $("#add").hide();
        onResize();
    } else {
        if (files !== 0) {
            $('.popup-choose').show();
            $('.overlay-popup').show();
        }
    }
});


$(".finish-btn ").click(function() {
    $("form")[0].reset();
    $(".side").addClass("side-hidden");
    $("#input")[0].value = "Hash code | File name";
    files = [];
    $("#select")[0].innerText = 'Wählen Sie Dateien aus';
    $("#input-name").show();
    $("#input").hide();
    $('.tooltip-addText').css("top", "auto");
    $("#add").css("background-color", "#4F4F4F");
    $("#add").css("color", "#c1c1c2");
    $("textarea").css("min-height", "300px")
    $("#add").show();
});



$('#input0').click(function() {
    if ($("select#input0 :selected").val() == "de") {
        $("select#input0").attr('style', 'background-image:url(../images/dutch.png);');
    }
    if ($("select#input0 :selected").val() == "eng") {
        $("select#input0").attr('style', 'background-image:url(../images/english.png);');
    }
    console.log('select color: ' + $("select#input0 :selected").val());
});

function quitBox(cmd) {
    if (cmd == 'quit') {
        open(location, '_self').close();
    }
    return false;
}