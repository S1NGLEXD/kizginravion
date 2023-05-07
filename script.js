document.addEventListener("DOMContentLoaded", function() {
    var ravion = document.getElementById("ravion");
    var message = document.getElementById("message");
    var cornerText = document.getElementById("cornerText");
    var youtubeLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // İstediğiniz YouTube linkini buraya girin

    var images = ["ravion.png", "baska-resim.png"]; // Resimlerin dosya adlarını burada listeleyin
    var currentIndex = 0;

    cornerText2.addEventListener("click", function() {
        window.location.href = youtubeLink;
    });

    ravion.addEventListener("click", function() {
        ravion.classList.add("kizma");
        message.style.opacity = 1;
        message.innerHTML = "Kızdım!";
        bağırmaEfekti();

        // Başka bir resme geçiş yap
        currentIndex = (currentIndex + 1) % images.length;
        ravion.src = images[currentIndex];
    });

    ravion.addEventListener("animationend", function() {
        ravion.classList.remove("kizma");
        message.style.opacity = 0;
    });

    function bağırmaEfekti() {
        var audio = new Audio("bagirma-sesi.mp3");
        audio.play();
    }
});
