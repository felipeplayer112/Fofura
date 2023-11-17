function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true })
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/eyOkNVVb-/model.json', modelReady)
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error("Este erro foi detectado no seu codigo: " + error);
        console.warning("ERRO ERRO ALERTA ALERTA ERRO ERRO");
    } else {
        console.log("Sucesso, olhe o resultado: " + results);
        rColor = Math.floor(Math.random() * 255) + 1;
        gColor = Math.floor(Math.random() * 255) + 1;
        bColor = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML = 'Posso ouvir: ' + results[0].label;
        document.getElementById("result_label").style.color = "rgb(" + rColor + "," + gColor + "," + bColor + ")";
        document.getElementById("result_confidence").innerHTML = 'Precisão: ' + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_confidence").style.color = "rgb(" + rColor + "," + gColor + "," + bColor + ")";
        img = document.getElementById('cao');
        img1 = document.getElementById('gato');
        img2 = document.getElementById('coelho');
        img3 = document.getElementById('passaro');
        if (results[0].label == "latidos") {
            img.src = 'cachorrinho.gif';
                img1.src = 'gatinho(1).png';
                img2.src = 'Coelhinho(1).png';
                img3.src = 'Passarinho(1).png';
        }
       else if (results[0].label == "miado") {
            img.src = 'cachorrinho.png';
                img1.src = 'gatinho.gif';
                img2.src = 'Coelhinho(1).png';
                img3.src = 'Passarinho(1).png';
        }
       else if (results[0].label == "estalos") {
            img.src = 'cachorrinho.png';
                img1.src = 'gatinho(1).png';
                img2.src = 'Coelhinho.gif';
                img3.src = 'Passarinho(1).png';
        }
        else {
            img.src = 'cachorrinho.png';
                img1.src = 'gatinho(1).png';
                img2.src = 'Coelhinho(1).png';
                img3.src = 'passarinho.gif';
        }
    }

}