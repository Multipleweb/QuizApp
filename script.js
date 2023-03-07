const quizQuestions = [
    {
        question: "Which language runs in a web browser?",
        opt1: "Java",
        opt2: "C",
        opt3: "Python",
        opt4: "JavaScript",
        opt5: "C++",
        correct: "opt4",
    },
    {
        question: "What does CSS stand for?",
        opt1: "Central Style Sheets",
        opt2: "Cascading Style Sheets",
        opt3: "Cascading Simple Sheets",
        opt4: "Cars SUVs Sailboats",
        opt5: "Cascading star strat",
        correct: "opt2",
    },
    {
        question: "What does HTML stand for?",
        opt1: "Hypertext Markup Language",
        opt2: "Hypertext Markdown Language",
        opt3: "Hyperloop Machine Language",
        opt4: "Helicopters Terminals Motorboats Lamborginis",
        opt5: "Hypertext make lunch",
        correct: "opt1",
    },
    {
        question: "What year was JavaScript launched?",
        opt1: "1996",
        opt2: "1995",
        opt3: "1994",
        opt4: "none of the above",
        opt5: "1999",
        correct: "opt2",
    },
    {
        question: "How many are popular in Cambodia in 2022?",
        opt1: "17 million",
        opt2: "18 million",
        opt3: "16 million",
        opt4: "20 million",
        opt5: "21 million",
        correct: "opt1",
    },
    
];
let question_number_element = document.getElementById("question-number");
let question_txt_element = document.getElementById("question-txt");
let option_1_element = document.getElementById("option1");
let option_2_element = document.getElementById("option2");
let option_3_element = document.getElementById("option3");
let option_4_element = document.getElementById("option4");
let option_5_element = document.getElementById("option5");
let next_button = document.getElementById("next-button");
let time_element = document.getElementById("timer");


let current_question_number=0;
let score=0;
let time;
const total_time = 20;
let sec = total_time;

/******Handle timer*********/
function timer(){
    time_element.innerHTML = sec;
    sec--;
    if(sec==0){
        sec = total_time;
        clearInterval(time);
        current_question_number++;
        showQuestion();
    }    
}

/**
 * A function to show question and options on html page.
 */

function showQuestion(){
    sec = total_time; //assign sec to total time of timer
    clearInterval(time);
    timer();
    time = setInterval(timer,1000);
    //uncheck all the option seleceted
    document.querySelectorAll("input[name = opt]").forEach(option=> option.checked=false)
    
    if(current_question_number>=quizQuestions.length){
        goToResultPage();
    }
    //set questions and options from array
    question_number_element.innerHTML = (current_question_number+1) + ". ";
    question_txt_element.innerHTML = quizQuestions[current_question_number].question;
    option_1_element.innerHTML= quizQuestions[current_question_number].opt1;
    option_2_element.innerHTML= quizQuestions[current_question_number].opt2;
    option_3_element.innerHTML= quizQuestions[current_question_number].opt3;
    option_4_element.innerHTML= quizQuestions[current_question_number].opt4;
    option_5_element.innerHTML= quizQuestions[current_question_number].opt5;
    // time = setInterval(timer,1000);
    
}

/**
 * Handling Event listner on button click
 */
next_button.addEventListener('click',()=>{
    let optionIdSelected = document.querySelector('input[name = opt]:checked');
            
    let option_correct = quizQuestions[current_question_number].correct;
    if(optionIdSelected!=null)
    {            
        if(optionIdSelected.id==option_correct){
            score++;        
        }
    }
    current_question_number ++;
    if(current_question_number>=quizQuestions.length){
        // show final answer
        goToResultPage();        

    }else{
        //show next question
        showQuestion();
    }
    
});
showQuestion();
function goToResultPage(){
    current_question_number = 0;
    localStorage.setItem("score", score);
    location.href = "./resultPage.html";
}




