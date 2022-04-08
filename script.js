const mieImg = ["arrabbiato", "bello", "piangere", "ridere", "amare", "amare1", "spavento", "shock", "arrabbiato", "bello",
    "piangere", "ridere", "amare", "amare1", "spavento", "shock"
];
// creo una variabile che mi contiene le immagini cliccate
var openBox = "";
var openImg = "";
var contatore = 0;
var imgFound = 0;

var root = "#boximg";

var img = [
    'img/amare.png',
    'img/amare1.png',
    'img/arrabbiato.png',
    'img/bello.png',
    'img/piangere.png',
    'img/ridere.png',
    'img/shock.png',
    'img/spavento.png'
];

function RandomFunction(MaxValue, MinValue) {
    return Math.round(Math.random() * (MaxValue - MinValue) + MinValue);
}

function shuf() {
    var allImg = $(root).children();
    var ImgQst = $(root + " div:first-child");
    var ImgArr = new Array();

    for (var i = 0; i < allImg.length; i++) {
        ImgArr[i] = $("#" + ImgQst.attr("id") + " img").attr("src");
        ImgQst = ImgQst.next();
    }

    ImgQst = $(root + " div:first-child");

    for (var z = 0; z < allImg.length; z++) {
        var RandomNumber = RandomFunction(0, ImgArr.length - 1);

        $("#" + ImgQst.attr("id") + " img").attr("src", ImgArr[RandomNumber]);
        ImgArr.splice(RandomNumber, 1);
        ImgQst = ImgQst.next();
    }
}

function reset() {
    shuf();
    $(root + " div img").hide();
    $(root + " div").css("visibility", "visible");
    contatore = 0;
    $("#success").remove();
    $("#counter").html("" + contatore);
    openBox = "";
    openImg = "";
    imgFound = 0;
    return false;
}

function OpenCard() {
    var id = $(this).attr("id");

    if ($("#" + id + " img").is(":hidden")) {
        $(root + " div").unbind("click", OpenCard);

        $("#" + id + " img").slideDown('fast');

        if (openImg == "") {
            openBox = id;
            openImg = $("#" + id + " img").attr("src");
            setTimeout(function() {
                $(root + " div").bind("click", OpenCard)
            }, 300);
        } else {
            CurrentOpened = $("#" + id + " img").attr("src");
            if (openImg != CurrentOpened) {
                setTimeout(function() {
                    $("#" + id + " img").slideUp('fast');
                    $("#" + openBox + " img").slideUp('fast');
                    openBox = "";
                    openImg = "";
                }, 400);
            } else {
                $("#" + id + " img").parent().css("visibility", "hidden");
                $("#" + openBox + " img").parent().css("visibility", "hidden");
                imgFound++;
                openBox = "";
                openImg = "";
            }
            setTimeout(function() {
                $(root + " div").bind("click", OpenCard)
            }, 400);
        }
        contatore++;
        $("#counter").html("" + contatore);

        if (imgFound == img.length) {
            $("#counter").prepend('<span id="success">hai completato il memory in </span>');
        }
    }
}

$(function() {

    for (var y = 1; y < 3; y++) {
        $.each(img, function(i, val) {
            $(root).append("<div id=card" + y + i + "><img src=" + val + " />");
        });
    }
    $(root + " div").click(OpenCard);
    shuf();
});
// quando il documento è pronto...vado a selezionare casualmente una immagine dalla cartella.

// creo una variabile "images" che contiene il selettore della classe "images". 
// così ho un oggetto jQuery e metto gli elementi corrispondenti nell'oggetto jQuery.

// creo un ciclo for sull'oggetto creato per ottenere poi un'immagine random.

// prendo a caso un elemento dalla mia lista.

// vado a prendere il file localizzato nella directory img e creo il tag html e lo inserisco nella pagina.
//images.eq(e).html("<img id='" + e + "' src='images/" + randomImg + ".png' width='130' height='130' />");

// creo la funzione principale "mostraImg"

// creo l'oggetto jQuery per i clicks e lo chiamo "tuttiIClick" e prendo il valore e poi incremento.

// ora visualizzo l'emoji (l'immagine) a due a due se sono diverse le nascondo altrimenti le lascio visibili.

// se non sono due visualizzo l'emoji e la inserisco in "clickImgs".

// se sono uguali azzero la mia lista.

// se sono diverse nascondo le due immagini.