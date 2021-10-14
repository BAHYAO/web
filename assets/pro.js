    var Charger = function(){
        var image = document.getElementById('affichage');
        image.src = URL.createObjectURL(event.target.files[0]);
    };
