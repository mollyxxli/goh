function scenariobuild() {
    var newscenario = new Object;
    newscenario.value1;
    newscenario.value2;
    newscenario.value3;
    newscenario.value4;
    newscenario.tittle;
    newscenario.image;
    newscenario.chooseleft;
    newscenario.chooseright;
    newscenario.nextscenario;
}

var gender = localStorage.getItem("storageGender");

var sunburn_1 = new scenariobuild();
sunburn_1.leftvalue1 = 1;
sunburn_1.leftvalue2 = 0;
sunburn_1.leftvalue3 = -1;
sunburn_1.leftvalue4 = 0;
sunburn_1.rightvalue1 = -1;
sunburn_1.rightvalue2 = 0;
sunburn_1.rightvalue3 = 1;
sunburn_1.rightvalue4 = 0;
sunburn_1.leftScenario = 3;
sunburn_1.rightScenario = 0;

var sunburn_2 = new scenariobuild();
sunburn_2.leftvalue1 = -1;
sunburn_2.leftvalue2 = 0;
sunburn_2.leftvalue3 = 1;
sunburn_2.leftvalue4 = 0;
sunburn_2.rightvalue1 = 0;
sunburn_2.rightvalue2 = 0;
sunburn_2.rightvalue3 = 1;
sunburn_2.rightvalue4 = 0;
sunburn_2.tittle = "You got sunburn!";
sunburn_2.image = "images/S1_result.png";
sunburn_2.chooseleft = "Ignore it.";
sunburn_2.chooseright = "Do something.";
sunburn_2.leftScenario = 3;
sunburn_2.rightScenario = 1;

var sunburn_3 = new scenariobuild();
sunburn_3.leftvalue1 = 1;
sunburn_3.leftvalue2 = 0;
sunburn_3.leftvalue3 = -1;
sunburn_3.leftvalue4 = 0;
sunburn_3.rightvalue1 = -2;
sunburn_3.rightvalue2 = 0;
sunburn_3.rightvalue3 = 1;
sunburn_3.rightvalue4 = 0;
sunburn_3.tittle = "You got sunburned due to over-exposed under the sun ray. Your skin becomes inflamed and blistered and you really need to cool them down, so you will...";
sunburn_3.image = "images/gameimg/sunburn3.png";
sunburn_3.chooseleft = "Water flush, moisturizing while skin is damp.";
sunburn_3.chooseright = "Ice blocks compressing";
sunburn_3.leftScenario = 3;
sunburn_3.rightScenario = 2;

var sunburn_4 = new scenariobuild();
sunburn_4.leftvalue1 = 1;
sunburn_4.leftvalue2 = 0;
sunburn_4.leftvalue3 = 1;
sunburn_4.leftvalue4 = 0;
sunburn_4.rightvalue1 = 1;
sunburn_4.rightvalue2 = -1;
sunburn_4.rightvalue3 = -1;
sunburn_4.rightvalue4 = 0;
sunburn_4.tittle = "You got a frostbite...";
sunburn_4.boyimage = "images/gameimg/frostbiteboy.png";
sunburn_4.girlimage = "images/gameimg/frostbitegirl.png";
if (gender == 1) {
    sunburn_4.image = sunburn_4.boyimage;
} else if (gender == 0) {
    sunburn_4.image = sunburn_4.girlimage;
}
sunburn_4.chooseleft = "Self healing.";
sunburn_4.chooseright = "Go to hospital.";
sunburn_4.leftScenario = 3;
sunburn_4.rightScenario = 3;

var seasonFlu_1 = new scenariobuild();
seasonFlu_1.leftvalue1 = -1;
seasonFlu_1.leftvalue2 = 0;
seasonFlu_1.leftvalue3 = -1;
seasonFlu_1.leftvalue4 = -1;
seasonFlu_1.rightvalue1 = 1;
seasonFlu_1.rightvalue2 = 0;
seasonFlu_1.rightvalue3 = 1;
seasonFlu_1.rightvalue4 = 1;
seasonFlu_1.tittle = "Recently, you don't feel very well. You become fairly easy to get a fever, sore throat, and dry cough. Then you plan to...";
seasonFlu_1.boyimage = "images/gameimg/season_flu1boy.png";
seasonFlu_1.girlimage = "images/gameimg/season_flu1girl.png";
if (gender == 1) {
    seasonFlu_1.image = seasonFlu_1.boyimage;
} else if (gender == 0) {
    seasonFlu_1.image = seasonFlu_1.girlimage;
}
seasonFlu_1.chooseleft = "Ignore it.";
seasonFlu_1.chooseright = "Pay attention to your daily habits, including having enough rest and drinking plenty of water";
seasonFlu_1.leftScenario = 4;
seasonFlu_1.rightScenario = 6;

var seasonFlu_2 = new scenariobuild();
seasonFlu_2.leftvalue1 = -2;
seasonFlu_2.leftvalue2 = 0;
seasonFlu_2.leftvalue3 = -1;
seasonFlu_2.leftvalue4 = -1;
seasonFlu_2.rightvalue1 = 1;
seasonFlu_2.rightvalue2 = -1;
seasonFlu_2.rightvalue3 = 1;
seasonFlu_2.rightvalue4 = 1;
seasonFlu_2.tittle = "You got season flu. Your body condition became worse than before. Now you will...";
seasonFlu_2.boyimage = "images/gameimg/season_flu2boy.png";
seasonFlu_2.girlimage = "images/gameimg/season_flu2girl.png";
if (gender == 1) {
    seasonFlu_2.image = seasonFlu_2.boyimage;
} else if (gender == 0) {
    seasonFlu_2.image = seasonFlu_2.girlimage;
}
seasonFlu_2.chooseleft = "Do Nothing.";
seasonFlu_2.chooseright = "Maintaining good habits, such as wearing a mask and not sharing personal items with others.";
seasonFlu_2.leftScenario = 5;
seasonFlu_2.rightScenario = 6;

var seasonFlu_3 = new scenariobuild();
seasonFlu_3.leftvalue1 = 1;
seasonFlu_3.leftvalue2 = 1;
seasonFlu_3.leftvalue3 = 1;
seasonFlu_3.leftvalue4 = 0;
seasonFlu_3.rightvalue1 = 1;
seasonFlu_3.rightvalue2 = -1;
seasonFlu_3.rightvalue3 = 1;
seasonFlu_3.rightvalue4 = 0;
seasonFlu_3.tittle = "Your friends got the flu because of your infection and took a leave of absence from the school. You will not be accompanied by friends in the near future.";
seasonFlu_3.boyimage = "images/gameimg/seasonflu3boy.png";
seasonFlu_3.girlimage = "images/gameimg/seasonflu3girl.png";
if (gender == 1) {
    seasonFlu_3.image = seasonFlu_3.boyimage;
} else if (gender == 0) {
    seasonFlu_3.image = seasonFlu_3.girlimage;
}
seasonFlu_3.chooseleft = "Self-healing.";
seasonFlu_3.chooseright = "Go to hospital or pharmacy.";
seasonFlu_3.leftScenario = 6;
seasonFlu_3.rightScenario = 6;

var junkFood_1 = new scenariobuild();
junkFood_1.leftvalue1 = 1;
junkFood_1.leftvalue2 = 1;
junkFood_1.leftvalue3 = 0;
junkFood_1.leftvalue4 = 0;
junkFood_1.rightvalue1 = -1;
junkFood_1.rightvalue2 = -1;
junkFood_1.rightvalue3 = 0;
junkFood_1.rightvalue4 = 0;
junkFood_1.tittle = "In your daily life, you love eating snacks and junk food. You prefer eating snacks than normal meals. Today, you feel hungry and want to find something to eat...";
junkFood_1.boyimage = "images/gameimg/food1boy.png";
junkFood_1.girlimage = "images/gameimg/food1girl.png";
if (gender == 1) {
    junkFood_1.image = junkFood_1.boyimage;
} else if (gender == 0) {
    junkFood_1.image = junkFood_1.girlimage;
}
junkFood_1.chooseleft = "Bread, apple, grains and milk.";
junkFood_1.chooseright = "Fried chips, burger and coke.";
junkFood_1.leftScenario = 9;
junkFood_1.rightScenario = 9;


var junkFood_2 = new scenariobuild();
junkFood_2.leftvalue1 = -1;
junkFood_2.leftvalue2 = 1;
junkFood_2.leftvalue3 = -1;
junkFood_2.leftvalue4 = 1;
junkFood_2.rightvalue1 = 1;
junkFood_2.rightvalue2 = 1;
junkFood_2.rightvalue3 = 1;
junkFood_2.rightvalue4 = -1;
junkFood_2.tittle = "Today, your friends and you are staying up for final exams preparation at Uni library, one of them suggested to have Mc together. Some of them are happy to do this, you decide to...";
junkFood_2.boyimage = "images/gameimg/food2boy.png";
junkFood_2.girlimage = "images/gameimg/food2girl.png";
if (gender == 1) {
    junkFood_2.image = junkFood_2.boyimage;
} else if (gender == 0) {
    junkFood_2.image = junkFood_2.girlimage;
}
junkFood_2.chooseleft = "Go and eat with friends together.";
junkFood_2.chooseright = "Refuse them.";
junkFood_2.leftScenario = 8;
junkFood_2.rightScenario = 19; //happy ending

var junkFood_3 = new scenariobuild();
junkFood_3.leftvalue1 = 1;
junkFood_3.leftvalue2 = 0;
junkFood_3.leftvalue3 = 1;
junkFood_3.leftvalue4 = 0;
junkFood_3.rightvalue1 = -1;
junkFood_3.rightvalue2 = -1;
junkFood_3.rightvalue3 = -1;
junkFood_3.rightvalue4 = -1;
junkFood_3.tittle = "After frequent eating out at McDonald and other fast food chains, you realized that you are overweight, you decide to...";
junkFood_3.boyimage = "images/gameimg/food3boy.png";
junkFood_3.girlimage = "images/gameimg/food3girl.png";
if (gender == 1) {
    junkFood_3.image = junkFood_3.boyimage;
} else if (gender == 0) {
    junkFood_3.image = junkFood_3.girlimage;
}
junkFood_3.chooseleft = "Doing exercise and start a balanced diet.";
junkFood_3.chooseright = "Keep eating.";
junkFood_3.leftScenario = 19; //happy ending
junkFood_3.rightScenario = 18; //bad ending

var Smoking_1 = new scenariobuild();
Smoking_1.leftvalue1 = -1;
Smoking_1.leftvalue2 = 0;
Smoking_1.leftvalue3 = -1;
Smoking_1.leftvalue4 = 1;
Smoking_1.rightvalue1 = 1;
Smoking_1.rightvalue2 = 1;
Smoking_1.rightvalue3 = 0;
Smoking_1.rightvalue4 = -1;
Smoking_1.tittle = "You want to be popular at school, therefore, you like to hang out with those friends that you think they are cool. One day, your cool friends start to smoke, will you join them?";
Smoking_1.boyimage = "images/gameimg/smoking1boy.png";
Smoking_1.girlimage = "images/gameimg/smoking1girl.png";
if (gender == 1) {
    Smoking_1.image = Smoking_1.boyimage;
} else if (gender == 0) {
    Smoking_1.image = Smoking_1.girlimage;
}
Smoking_1.chooseleft = "Yes.";
Smoking_1.chooseright = "No.";
Smoking_1.leftScenario = 12;
Smoking_1.rightScenario = 12;


var Smoking_2 = new scenariobuild();
Smoking_2.leftvalue1 = -1;
Smoking_2.leftvalue2 = -1;
Smoking_2.leftvalue3 = -1;
Smoking_2.leftvalue4 = 0;
Smoking_2.rightvalue1 = 1;
Smoking_2.rightvalue2 = 1;
Smoking_2.rightvalue3 = 1;
Smoking_2.rightvalue4 = 1;
Smoking_2.tittle = "You are addicted to smoking, when you want to smoke, which one would you choose?";
Smoking_2.boyimage = "images/gameimg/smoking2boy.png";
Smoking_2.girlimage = "images/gameimg/smoking2girl.png";
if (gender == 1) {
    Smoking_2.image = Smoking_2.boyimage;
} else if (gender == 0) {
    Smoking_2.image = Smoking_2.girlimage;
}
Smoking_2.chooseleft = "Electronic cigarettes.";
Smoking_2.chooseright = "Attend smoking cessation association.";
Smoking_2.leftScenario = 11;
Smoking_2.rightScenario = 7;


var Smoking_3 = new scenariobuild();
Smoking_3.leftvalue1 = 1;
Smoking_3.leftvalue2 = -1;
Smoking_3.leftvalue3 = 2;
Smoking_3.leftvalue4 = 0;
Smoking_3.rightvalue1 = -2;
Smoking_3.rightvalue2 = -1;
Smoking_3.rightvalue3 = -2;
Smoking_3.rightvalue4 = 0;
Smoking_3.tittle = "You feel you have got some health problems with your lungs because you have smoked too many cigarettes. What will you based on your health issue?";
Smoking_3.boyimage = "images/gameimg/smoking3boy.png";
Smoking_3.girlimage = "images/gameimg/smoking3girl.png";
if (gender == 1) {
    Smoking_3.image = Smoking_3.boyimage;
} else if (gender == 0) {
    Smoking_3.image = Smoking_3.girlimage;
}
Smoking_3.chooseleft = "Have a strong mind and quit smoking.";
Smoking_3.chooseright = "Can’t help and keep smoking.";
Smoking_3.leftScenario = 7;
Smoking_3.rightScenario = 18; //bad ending......


var mentalHealth_1 = new scenariobuild();
mentalHealth_1.leftvalue1 = 0;
mentalHealth_1.leftvalue2 = 0;
mentalHealth_1.leftvalue3 = -1;
mentalHealth_1.leftvalue4 = 0;
mentalHealth_1.rightvalue1 = 0;
mentalHealth_1.rightvalue2 = 0;
mentalHealth_1.rightvalue3 = 1;
mentalHealth_1.rightvalue4 = 0;
mentalHealth_1.tittle = "You had a low academic performance at school, you felt so upset and stressful. What are you going to do?";
mentalHealth_1.boyimage = "images/gameimg/mental1boy.png";
mentalHealth_1.girlimage = "images/gameimg/mental1girl.png";
if (gender == 1) {
    mentalHealth_1.image = mentalHealth_1.boyimage;
} else if (gender == 0) {
    mentalHealth_1.image = mentalHealth_1.girlimage;
}
mentalHealth_1.chooseleft = "Ignore it.";
mentalHealth_1.chooseright = "Do something.";
mentalHealth_1.leftScenario = 15;
mentalHealth_1.rightScenario = 13;

var mentalHealth_2 = new scenariobuild();
mentalHealth_2.leftvalue1 = 1;
mentalHealth_2.leftvalue2 = 0;
mentalHealth_2.leftvalue3 = -1;
mentalHealth_2.leftvalue4 = 1;
mentalHealth_2.rightvalue1 = -1;
mentalHealth_2.rightvalue2 = 0;
mentalHealth_2.rightvalue3 = -1;
mentalHealth_2.rightvalue4 = 1;
mentalHealth_2.tittle = "You want to do something to destress, what would you do?";
mentalHealth_2.boyimage = "images/gameimg/mental2boy.png";
mentalHealth_2.girlimage = "images/gameimg/mental2girl.png";
if (gender == 1) {
    mentalHealth_2.image = mentalHealth_2.boyimage;
} else if (gender == 0) {
    mentalHealth_2.image = mentalHealth_2.girlimage;
}
mentalHealth_2.chooseleft = "Doing exercise.";
mentalHealth_2.chooseright = "Smoking.";
mentalHealth_2.leftScenario = 14;
mentalHealth_2.rightScenario = 10;


var mentalHealth_3 = new scenariobuild();
mentalHealth_3.leftvalue1 = 0;
mentalHealth_3.leftvalue2 = 1;
mentalHealth_3.leftvalue3 = -1;
mentalHealth_3.leftvalue4 = 0;
mentalHealth_3.rightvalue1 = 0;
mentalHealth_3.rightvalue2 = 0;
mentalHealth_3.rightvalue3 = 1;
mentalHealth_3.rightvalue4 = 0;
mentalHealth_3.tittle = "You have released your stress, now you want to improve your academic performance. What would you do?";
mentalHealth_3.boyimage = "images/gameimg/mental3boy.png";
mentalHealth_3.girlimage = "images/gameimg/mental3girl.png";
if (gender == 1) {
    mentalHealth_3.image = mentalHealth_3.boyimage;
} else if (gender == 0) {
    mentalHealth_3.image = mentalHealth_3.girlimage;
}
mentalHealth_3.chooseleft = "Asking teacher for professional help.";
mentalHealth_3.chooseright = "Self-study.";
mentalHealth_3.leftScenario = 15;
mentalHealth_3.rightScenario = 15;

var drink_1 = new scenariobuild();
drink_1.leftvalue1 = -1;
drink_1.leftvalue2 = -1;
drink_1.leftvalue3 = -1;
drink_1.leftvalue4 = 1;
drink_1.rightvalue1 = 1;
drink_1.rightvalue2 = 0;
drink_1.rightvalue3 = 0;
drink_1.rightvalue4 = -1;
if (gender == 1) {
    drink_1.tittle = "You are an 18 year-old boy. You were invited to an in-home party. Your friends tried to persuade me to have some alcoholic drinks. What should you do?";
} else if (gender == 0) {
    drink_1.tittle = "You are an 18 year-old girl. You were invited to an in-home party. Your friends tried to persuade me to have some alcoholic drinks. What should you do?";
}
drink_1.image = "images/gameimg/drink1.png";
drink_1.chooseleft = "Follow friends' advice.";
drink_1.chooseright = "Refuse their request.";
drink_1.leftScenario = 17;
drink_1.rightScenario = 16;

var drink_2 = new scenariobuild();
drink_2.leftvalue1 = -1;
drink_2.leftvalue2 = -1;
drink_2.leftvalue3 = -1;
drink_2.leftvalue4 = 1;
drink_2.rightvalue1 = 1;
drink_2.rightvalue2 = 0;
drink_2.rightvalue3 = 0;
drink_2.rightvalue4 = -2;
drink_2.tittle = "In that birthday party, they still wanted to persuade me to have more alcohol and told me these drinks have very low concentrate, which have little influence on health. You will...";
drink_2.image = "images/gameimg/drink2.png";
drink_2.chooseleft = "Follow friends' advice.";
drink_2.chooseright = "Keep refusing their requests.";
drink_2.leftScenario = 17;
drink_2.rightScenario = 7;

var drink_3 = new scenariobuild();
drink_3.leftvalue1 = 1;
drink_3.leftvalue2 = 1;
drink_3.leftvalue3 = 2;
drink_3.leftvalue4 = 0;
drink_3.rightvalue1 = -2;
drink_3.rightvalue2 = -1;
drink_3.rightvalue3 = -1;
drink_3.rightvalue4 = 0;
drink_3.tittle = "You kept drinking by following your friends' idea and started feeling uncomfortable. However, you started being addicted to those alcoholic drinks and you couldn't help yourself stop drinking. On the other hand, your friends kept booing you to drink more.";
drink_3.boyimage = "images/gameimg/drink3boy.png";
drink_3.girlimage = "images/gameimg/drink3girl.png";
if (gender == 1) {
    drink_3.image = drink_3.boyimage;
} else if (gender == 0) {
    drink_3.image = drink_3.girlimage;
}
drink_3.chooseleft = "Stop drinking and Felt better.";
drink_3.chooseright = "Keep drinking.";
drink_3.leftScenario = 7;
drink_3.rightScenario = 18; //bad ending

//ENDING
var badEnding = new scenariobuild();
badEnding.tittle = "You fail the game.";
badEnding.boyimage = "images/gameimg/bad_endboy.png";
badEnding.girlimage = "images/gameimg/bad_endgirl.png";
if (gender == 1) {
    badEnding.image = badEnding.boyimage;
} else if (gender == 0) {
    badEnding.image = badEnding.girlimage;
}
badEnding.chooseleft = "Try again?";
badEnding.chooseright = "Back to the homepage.";
badEnding.leftScenario = 888; //again
badEnding.rightScenario = 666; //homepage

var happyEnding = new scenariobuild();
happyEnding.tittle = "Congratulations, you pass the game!";
happyEnding.boyimage = "images/gameimg/happy_endingboy.png";
happyEnding.girlimage = "images/gameimg/happy_endinggirl.png";
if (gender == 1) {
    happyEnding.image = happyEnding.boyimage;
} else if (gender == 0) {
    happyEnding.image = happyEnding.girlimage;
}
happyEnding.chooseleft = "Try again?";
happyEnding.chooseright = "Back to the homepage.";
happyEnding.leftScenario = 888; //again
happyEnding.rightScenario = 666; //homepage




// 更新分界线
var character = new scenariobuild();
character.value1 = 5;
character.value2 = 5;
character.value3 = 5;
character.value4 = 5;
character.step = 0;
character.scenario = sunburn_1;
character.scenarioNowNumber = -1;
character.sunburnValue = 0;
character.seasonFluValue = 0;
character.junkFoodValue = 0;
character.SmokingValue = 0;
character.mentalHealthValue = 0;
character.drinkValue = 0;




var scenarios = new Array(sunburn_2, sunburn_3, sunburn_4, seasonFlu_1, seasonFlu_2, seasonFlu_3,
    junkFood_1, junkFood_2, junkFood_3, Smoking_1, Smoking_2,
    Smoking_3, mentalHealth_1, mentalHealth_2, mentalHealth_3, drink_1,
    drink_2, drink_3, badEnding, happyEnding);





var choose_a = document.getElementById("choose_a");
var choose_b = document.getElementById("choose_b");
var scenarioNew = -1;
var failValue = 0;

choose_a.onclick = function () {

    choose_a_record(character, scenarioNew);

    character.value1 += character.scenario.leftvalue1;
    character.value2 += character.scenario.leftvalue2;
    character.value3 += character.scenario.leftvalue3;
    character.value4 += character.scenario.leftvalue4;

    if (character.value1 <= 0) {
        character.scenario.leftScenario = 18;
        failValue = 1;
    } else if (character.value1 > 10) {
        character.value1 = 10;
    }

    if (character.value2 <= 0) {
        character.scenario.leftScenario = 18;
        failValue = 2;
    } else if (character.value1 > 10) {
        character.value2 = 10;
    }

    if (character.value3 <= 0) {
        character.value3 = 0;
    } else if (character.value3 >= 10) {
        character.scenario.leftScenario = 18;
        failValue = 3;
    }

    if (character.value4 <= 0) {
        character.scenario.leftScenario = 18;
        failValue = 4;
    } else if (character.value4 >= 10) {
        character.value4 = 10;
    }

    // left button 
    if (character.scenario.leftvalue1 != 0) {
        document.getElementById("health").classList.add("box-1");
        document.getElementById('health-image').style.display = 'none';
    } else {
        document.getElementById("health").classList.remove("box-1");
        document.getElementById('health-image').style.display = '';
    }

    if (character.scenario.leftvalue2 != 0) {
        document.getElementById("wealth").classList.add("box-2");
        document.getElementById('wealth-image').style.display = 'none';
    } else {
        document.getElementById("wealth").classList.remove("box-2");
        document.getElementById('wealth-image').style.display = '';
    }

    if (character.scenario.leftvalue3 != 0) {
        document.getElementById("pressure").classList.add("box-3");
        document.getElementById('pressure-image').style.display = 'none';
    } else {
        document.getElementById("pressure").classList.remove("box-3");
        document.getElementById('pressure-image').style.display = '';
    }

    if (character.scenario.leftvalue4 != 0) {
        document.getElementById("solar_relation").classList.add("box-4");
        document.getElementById('relation-image').style.display = 'none';
    } else {
        document.getElementById("solar_relation").classList.remove("box-4");
        document.getElementById('relation-image').style.display = '';
    }



    scenarioNew = character.scenario.leftScenario;
    character.scenarioNowNumber = character.scenario.leftScenario;
    if (scenarioNew == 888) {
        window.location.href = "S1_1.html"
    } else if (scenarioNew == 666) {
        window.location.href = "index.html"
    }

    character.scenario = scenarios[scenarioNew];

    document.getElementById('gametittle').innerHTML = character.scenario.tittle;
    document.getElementById('gamepicture').src = character.scenario.image;
    document.getElementById('chooseleft').innerHTML = character.scenario.chooseleft;
    document.getElementById('chooseright').innerHTML = character.scenario.chooseright;

    if (scenarioNew == 18) {
        if (failValue != 0) {
            if (failValue == 1) {
                document.getElementById('gametittle').innerHTML = "You fail because the health value drops to zero! You should try to learn more about how to stay healthy!"
            };
            if (failValue == 2) {
                document.getElementById('gametittle').innerHTML = "You fail because the Wealth value drops to zero! You should manage your money wisely!"
            };
            if (failValue == 3) {
                document.getElementById('gametittle').innerHTML = "You fail because the pressure value is too high! You should find some way to destress!"
            };
            if (failValue == 4) {
                document.getElementById('gametittle').innerHTML = "You fail because the relation value drops to zero! You should manage your social lifeand pay attention to your mental health!"
            };
        };

        var count = 0;
        if (character.sunburnValue <= 1 &
            character.seasonFluValue <= 1 &
            character.junkFoodValue <= 1 &
            character.SmokingValue <= 1 &
            character.mentalHealthValue <= 1 &
            character.drinkValue <= 1) {
            count = addTex(character.sunburnValue, count, "protecting yourself from getting sunburn", 1);
            count = addTex(character.seasonFluValue, count, "catching season flu", 1);
            count = addTex(character.junkFoodValue, count, "not to eat junk food", 1);
            count = addTex(character.SmokingValue, count, "the hazard of smoking", 1);
            count = addTex(character.mentalHealthValue, count, "your mental health", 1);
            count = addTex(character.drinkValue, count, "the hazard of drinking", 1);
        } else if (character.sunburnValue == 3 |
            character.seasonFluValue == 3 |
            character.junkFoodValue == 3 |
            character.SmokingValue == 3 |
            character.mentalHealthValue == 3 |
            character.drinkValue == 3) {
            if (character.sunburnValue == 3) {
                count = addTex(character.sunburnValue, count, "protecting yourself from getting sunburn", 3);
            }
            if (character.seasonFluValue == 3) {
                count = addTex(character.seasonFluValue, count, "catching season flu", 3);
            }
            if (character.junkFoodValue == 3) {
                count = addTex(character.junkFoodValue, count, "not to eat junk food", 3);
            }
            if (character.SmokingValue == 3) {
                count = addTex(character.SmokingValue, count, "the hazard of smoking", 3);
            }
            if (character.mentalHealthValue == 3) {
                count = addTex(character.mentalHealthValue, count, "your mental health", 3);
            }
            if (character.drinkValue == 3) {
                count = addTex(character.drinkValue, count, "the hazard of drinking", 3);
            }
        } else if (character.sunburnValue == 2 |
            character.seasonFluValue == 2 |
            character.junkFoodValue == 2 |
            character.SmokingValue == 2 |
            character.mentalHealthValue == 2 |
            character.drinkValue == 2) {
            if (character.sunburnValue == 2) {
                count = addTex(character.sunburnValue, count, "protecting yourself from getting sunburn", 2);
            }
            if (character.seasonFluValue == 2) {
                count = addTex(character.seasonFluValue, count, "catching season flu", 2);
            }
            if (character.junkFoodValue == 2) {
                count = addTex(character.junkFoodValue, count, "not to eat junk food", 2);
            }
            if (character.SmokingValue == 2) {
                count = addTex(character.SmokingValue, count, "the hazard of smoking", 2);
            }
            if (character.mentalHealthValue == 2) {
                count = addTex(character.mentalHealthValue, count, "your mental health", 2);
            }
            if (character.drinkValue == 2) {
                count = addTex(character.drinkValue, count, "the hazard of drinking", 2);
            }
        };
        document.getElementById('gametittle').innerHTML += ".";
    };


    if (character.value1 <= 2) {
        document.getElementById('gamevalue1').style.color = "red";
    } else {
        document.getElementById('gamevalue1').style.color = "black";
    }
    if (character.value2 <= 2) {
        document.getElementById('gamevalue2').style.color = "red";
    } else {
        document.getElementById('gamevalue2').style.color = "black";
    }
    if (character.value3 >= 8) {
        document.getElementById('gamevalue3').style.color = "red";
    } else {
        document.getElementById('gamevalue3').style.color = "black";
    }
    if (character.value4 <= 2) {
        document.getElementById('gamevalue4').style.color = "red";
    } else {
        document.getElementById('gamevalue4').style.color = "black";
    }

    document.getElementById('gamevalue1').innerHTML = character.value1 + "/10";
    document.getElementById('gamevalue2').innerHTML = character.value2 + "/10";
    document.getElementById('gamevalue3').innerHTML = character.value3 + "/10";
    document.getElementById('gamevalue4').innerHTML = character.value4 + "/10";

}

choose_b.onclick = function () {

    choose_b_record(character, scenarioNew);

    character.value1 += character.scenario.rightvalue1;
    character.value2 += character.scenario.rightvalue2;
    character.value3 += character.scenario.rightvalue3;
    character.value4 += character.scenario.rightvalue4;

    if (character.value1 <= 0) {
        character.scenario.rightScenario = 18;
        failValue = 1;
    } else if (character.value1 > 10) {
        character.value1 = 10;
    }

    if (character.value2 <= 0) {
        character.scenario.rightScenario = 18;
        failValue = 2;
    } else if (character.value1 > 10) {
        character.value2 = 10;
    }

    if (character.value3 <= 0) {
        character.value3 = 0;
    } else if (character.value3 >= 10) {
        character.scenario.rightScenario = 18;
        failValue = 3;
    }

    if (character.value4 <= 0) {
        character.scenario.rightScenario = 18;
        failValue = 4;
    } else if (character.value4 >= 10) {
        character.value4 = 10;
    }

    // left button 
    if (character.scenario.rightvalue1 != 0) {
        document.getElementById("health").classList.add("box-1");
        document.getElementById('health-image').style.display = 'none';
    } else {
        document.getElementById("health").classList.remove("box-1");
        document.getElementById('health-image').style.display = '';
    }

    if (character.scenario.rightvalue2 != 0) {
        document.getElementById("wealth").classList.add("box-2");
        document.getElementById('wealth-image').style.display = 'none';
    } else {
        document.getElementById("wealth").classList.remove("box-2");
        document.getElementById('wealth-image').style.display = '';
    }

    if (character.scenario.rightvalue3 != 0) {
        document.getElementById("pressure").classList.add("box-3");
        document.getElementById('pressure-image').style.display = 'none';
    } else {
        document.getElementById("pressure").classList.remove("box-3");
        document.getElementById('pressure-image').style.display = '';
    }

    if (character.scenario.rightvalue4 != 0) {
        document.getElementById("solar_relation").classList.add("box-4");
        document.getElementById('relation-image').style.display = 'none';
    } else {
        document.getElementById("solar_relation").classList.remove("box-4");
        document.getElementById('relation-image').style.display = '';
    }

    scenarioNew = character.scenario.rightScenario;
    character.scenarioNowNumber = character.scenario.leftScenario;
    if (scenarioNew == 888) {
        window.location.href = "S1_1.html"
    } else if (scenarioNew == 666) {
        window.location.href = "index.html"
    }
    character.scenario = scenarios[scenarioNew];

    document.getElementById('gametittle').innerHTML = character.scenario.tittle;
    document.getElementById('gamepicture').src = character.scenario.image;
    document.getElementById('chooseleft').innerHTML = character.scenario.chooseleft;
    document.getElementById('chooseright').innerHTML = character.scenario.chooseright;



    if (scenarioNew == 18) {
        if (failValue != 0) {
            if (failValue == 1) {
                document.getElementById('gametittle').innerHTML = "You fail because the health value drops to zero! You should try to learn more about how to stay healthy!"
            };
            if (failValue == 2) {
                document.getElementById('gametittle').innerHTML = "You fail because the Wealth value drops to zero! You should manage your money wisely!"
            };
            if (failValue == 3) {
                document.getElementById('gametittle').innerHTML = "You fail because the pressure value is too high! You should find some way to destress!"
            };
            if (failValue == 4) {
                document.getElementById('gametittle').innerHTML = "You fail because the relation value drops to zero! You should manage your social lifeand pay attention to your mental health!"
            };
        };
        var count = 0;
        if (character.sunburnValue <= 1 &
            character.seasonFluValue <= 1 &
            character.junkFoodValue <= 1 &
            character.SmokingValue <= 1 &
            character.mentalHealthValue <= 1 &
            character.drinkValue <= 1) {
            count = addTex(character.sunburnValue, count, "protecting yourself from getting sunburn", 1);
            count = addTex(character.seasonFluValue, count, "catching season flu", 1);
            count = addTex(character.junkFoodValue, count, "not to eat junk food", 1);
            count = addTex(character.SmokingValue, count, "the hazard of smoking", 1);
            count = addTex(character.mentalHealthValue, count, "your mental health", 1);
            count = addTex(character.drinkValue, count, "the hazard of drinking", 1);
        } else if (character.sunburnValue == 3 |
            character.seasonFluValue == 3 |
            character.junkFoodValue == 3 |
            character.SmokingValue == 3 |
            character.mentalHealthValue == 3 |
            character.drinkValue == 3) {
            if (character.sunburnValue == 3) {
                count = addTex(character.sunburnValue, count, "protecting yourself from getting sunburn", 3);
            }
            if (character.seasonFluValue == 3) {
                count = addTex(character.seasonFluValue, count, "catching season flu", 3);
            }
            if (character.junkFoodValue == 3) {
                count = addTex(character.junkFoodValue, count, "not to eat junk food", 3);
            }
            if (character.SmokingValue == 3) {
                count = addTex(character.SmokingValue, count, "the hazard of smoking", 3);
            }
            if (character.mentalHealthValue == 3) {
                count = addTex(character.mentalHealthValue, count, "your mental health", 3);
            }
            if (character.drinkValue == 3) {
                count = addTex(character.drinkValue, count, "the hazard of drinking", 3);
            }
        } else if (character.sunburnValue == 2 |
            character.seasonFluValue == 2 |
            character.junkFoodValue == 2 |
            character.SmokingValue == 2 |
            character.mentalHealthValue == 2 |
            character.drinkValue == 2) {
            if (character.sunburnValue == 2) {
                count = addTex(character.sunburnValue, count, "protecting yourself from getting sunburn", 2);
            }
            if (character.seasonFluValue == 2) {
                count = addTex(character.seasonFluValue, count, "catching season flu", 2);
            }
            if (character.junkFoodValue == 2) {
                count = addTex(character.junkFoodValue, count, "not to eat junk food", 2);
            }
            if (character.SmokingValue == 2) {
                count = addTex(character.SmokingValue, count, "the hazard of smoking", 2);
            }
            if (character.mentalHealthValue == 2) {
                count = addTex(character.mentalHealthValue, count, "your mental health", 2);
            }
            if (character.drinkValue == 2) {
                count = addTex(character.drinkValue, count, "the hazard of drinking", 2);
            }
        };
        document.getElementById('gametittle').innerHTML += ".";
    };


    if (character.value1 <= 2) {
        document.getElementById('gamevalue1').style.color = "red";
    } else {
        document.getElementById('gamevalue1').style.color = "black";
    }
    if (character.value2 <= 2) {
        document.getElementById('gamevalue2').style.color = "red";
    } else {
        document.getElementById('gamevalue2').style.color = "black";
    }
    if (character.value3 >= 8) {
        document.getElementById('gamevalue3').style.color = "red";
    } else {
        document.getElementById('gamevalue3').style.color = "black";
    }
    if (character.value4 <= 2) {
        document.getElementById('gamevalue4').style.color = "red";
    } else {
        document.getElementById('gamevalue4').style.color = "black";
    }

    //******************************** */
    //要不要最后的/10？？？？？？！！！！！
    //******************************** */
    document.getElementById('gamevalue1').innerHTML = character.value1 + "/10";
    document.getElementById('gamevalue2').innerHTML = character.value2 + "/10";
    document.getElementById('gamevalue3').innerHTML = character.value3 + "/10";
    document.getElementById('gamevalue4').innerHTML = character.value4 + "/10";
}





var choose_a_record = function (character, scenarioNumber) {
    if (scenarioNumber == 0 | scenarioNumber == 1) {
        character.sunburnValue += 1;
    } else if (scenarioNumber == 3 | scenarioNumber == 4) {
        character.seasonFluValue += 1;
    } else if (scenarioNumber == 7) {
        character.junkFoodValue += 1;
    } else if (scenarioNumber == 9 | scenarioNumber == 10) {
        character.SmokingValue += 1;
    } else if (scenarioNumber == 12) {
        character.mentalHealthValue += 1;
    } else if (scenarioNumber == 15 | scenarioNumber == 16) {
        character.drinkValue += 1;
    }
}

var choose_b_record = function (character, scenarioNumber) {
    if (scenarioNumber == -1) {
        character.sunburnValue += 1;
    }
    if (scenarioNumber == 6 | scenarioNumber == 8) {
        character.junkFoodValue += 1;
    } else if (scenarioNumber == 11) {
        character.SmokingValue += 1;
    } else if (scenarioNumber == 13 | scenarioNumber == 14) {
        character.mentalHealthValue += 1;
    } else if (scenarioNumber == 17) {
        character.drinkValue += 1;
    }
}

addTex = function (value, count, name, judgevalue) {
    if (value == judgevalue) {
        if (count == 0) {
            document.getElementById('gametittle').innerHTML += " You need to be awared of " + name;
        } else if (count == 1) {
            document.getElementById('gametittle').innerHTML += ", " + name;
        }
        count = 1;
    }
    return count;
}