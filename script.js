let count = 0;
let numRight = 0;
let correctOne;
let numQuestion = 4;

let btn1 = document.getElementById("btn0");
let btn2 = document.getElementById("btn1");
let btn3 = document.getElementById("btn2");
let btn4 = document.getElementById("btn3");
//let Question = document.getElementById("question");

let createQuestion = function(questionText, choice1, choice2, choice3, choice4, correctChoice){

    question.innerText = questionText;
    option1 = document.getElementById("choice0");
    option1.innerText = choice1;
    option2 = document.getElementById("choice1");
    option2.innerText = choice2;
    option3 = document.getElementById("choice2");
    option3.innerText = choice3;
    option4 = document.getElementById("choice3");
    option4.innerText = choice4;
    question.innerText = questionText;
    correctOne = correctChoice;

};


let DoTheStuff = function(){

    btn1.onclick = function(){checkCorrect(this)};
    btn2.onclick = function(){checkCorrect(this)};
    btn3.onclick = function(){checkCorrect(this)};
    btn4.onclick = function(){checkCorrect(this)};

    if(count === 0){
        createQuestion("What is true terror?", "Darkeater Midir", "The Nameless King", "The Hellfire Knight", "Geal", "Darkeater Midir");
        correctOne = btn1;
    }else if(count === 1){
        createQuestion("What is From Software's signature weapon?", "Claymore", "Greatsword", "Moonlight Greatsword", "Uchigatana", "Moonlight Greatsword");
        correctOne = btn3;
    }else if(count === 2){
        createQuestion("Who is the legendary Sunbro?", "Siegward", "Solaire", "Oscar", "Seigmeyer", "Solaire");
        correctOne = btn2;
    }else if(count === 3){
        createQuestion("What does The Fire Kepper want you to do?","KILL MORE BOSSES!", "Refuse The First Flame", "Link The First Flame", "Marry Her", "Link The First Flame")
        correctOne = btn3;
    }else{
        let question = document.getElementById("question");
        question.innerText = "You got " + numRight + " correct out of " + numQuestion;
        document.getElementById("buttons").innerHTML = " ";
    }

    document.getElementById("progress").innerText = "Question " + (count + 1) + " of " + numQuestion;

};


let checkCorrect = function(button){
    if(button === correctOne){
        numRight++;
    }
    count++;
    DoTheStuff();
};