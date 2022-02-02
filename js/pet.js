let mood = 5;
let belly = 5;
let temp = 5;

function decreasePet() {
    if (belly > 0) {
        belly -= 1;
        refreshUI();
    }
    if (mood > 0) {
        mood -= 1
        refreshUI();
    }

}

function increasePet() {
    if (temp < 10) {
        temp += 1;
    }
    refreshUI()
}

function feedPet() {

    if (belly < 10) {
        belly += 1;

    }

    refreshUI();
}

function fanPet() {

    if (temp > 0) {
        temp -= 1;

    }
    refreshUI();
}

function playFetch() {
    console.log("Fetch pet....");

    if (mood < 10) {
        mood += 1;
    }
    refreshUI();
}

function refreshUI() {
    let bellyMeter = document.getElementById("belly meter");
    bellyMeter.value = belly;
    let bellyParagraph = document.getElementById("happy belly");
    bellyParagraph.innerHTML = belly;
    let moodMeter = document.getElementById("mood meter");
    moodMeter.value = mood;
    let moodParagraph = document.getElementById("happy mood");
    moodParagraph.innerHTML = mood;
    let tempMeter = document.getElementById("tempurature meter");
    tempMeter.value = temp;
    let tempParagraph = document.getElementById("good temp");
    tempParagraph.innerHTML = temp;
    let petImg = document.getElementById("baseimage");
    let petText = document.getElementById("pet-condition")

    if (mood <= 0 && belly <= 0 && temp >= 10) {

        petImg.src = "images/rancor4.jpg";
        alert("You have been eaten!!!");

    } else if (mood <= 1 && belly <= 1 && temp >= 9) {

        petImg.src = "images/rancor4.jpg";


    } else if (mood <= 5 && belly <= 5 && temp <= 5) {
        petImg.src = "images/rancor3.jpg";
    } else if (mood <= 5 && belly >= 5 && temp >= 5) {
        petImg.src = "images/rancor3.jpg";
    } else if (mood >= 7 && belly >= 5 && temp >= 5) {
        petImg.src = "images/rancormaybe.jpeg";
    } else if (mood >= 5 && belly <= 5 && temp <= 5) {
        petImg.src = "images/rancorHappy.jpg";
    } else if (mood <= 5 && belly <= 5 && temp >= 5) {
        petImg.src = "images/rancor3.jpg";
    } else if (mood >= 5 && belly <= 5 && temp <= 5) {
        petImg.src = "images/rancorHappy.jpg";
    } else if (mood <= 5 && belly >= 5 && temp <= 5) {
        petImg.src = "images/rancormaybe.jpeg";
    } else if (mood >= 5 && belly >= 5 && temp <= 5) {
        petImg.src = "images/Rancor5.jpg";
        petText = "meh"

    } else {
        petImg.src = "images/rancormaybe.jpeg";
    }
}
let petTimer = setInterval(decreasePet, 1500);
let tempTimer = setInterval(increasePet, 1500);