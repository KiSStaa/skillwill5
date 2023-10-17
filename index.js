// davaleba 1

const button = document.getElementById('btn')

button.addEventListener("click", (e) =>{
    e.target.style.color = 'white'
    e.target.style.background = 'green'
    document.getElementById("dis").style.display = 'none'
})


// davaleba 2

const divel = document.createElement('div')
const h1el = document.createElement('h1')
const text = document.createTextNode('Gandalf')
const a = document.createElement('a')
const linkText = document.createTextNode('Go to profile')

divel.setAttribute('id', "card")
a.setAttribute('href', "https://developer.mozilla.org")

a.append(linkText);
a.style.fontSize = '46px';
h1el.append(text);
h1el.style.fontSize = "46px";
divel.append(a,h1el);
document.body.append(divel)


// davaleba3
const questions = [
    {
        question:"Romeli filmi mikvars kvelaze metad",
        answers: [
            {text:"Evroturi",correct:false},
            {text:"Araseriozuli katsi",correct:true},
            {text:"Sauketeso shetavazeba",correct:false},
            {text:"Mwvane wigni",correct:false},
        ]
    },
    {
        question:"Romeli anime mikvars kvelaze metad",
        answers: [
            {text:"Naruto",correct:false},
            {text:"Haikyuu",correct:false},
            {text:"Death note",correct:true},
            {text:"Akame ga Kill",correct:false},
        ]
    },
    {
        question:"Romeli sachmeli mikvars kvelaze metad",
        answers: [
            {text:"Katmis salata",correct:true},
            {text:"Mwvadi",correct:false},
            {text:"Khinkali",correct:false},
            {text:"Khashlama",correct:false},
        ]
    },
    {
        question:"Romeli sporti mikvars kvelaze metad",
        answers: [
            {text:"Chogburti",correct:false},
            {text:"Pekhburti",correct:false},
            {text:"Prenburti",correct:true},
            {text:"Tsurva",correct:false},
        ]
    }
];

const questionEl = document.getElementById("question");
const answerButs = document.getElementById("answerbutton");
const nextBut = document.getElementById("nextbtn");

let currentQuestionIndex = 0;
let score = 0;

function startquiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBut.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionEl.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const butt = document.createElement("button");
        butt.innerHTML = answer.text;
        butt.classList.add("btn");
        answerButs.appendChild(butt);
        if(answer.correct){
            butt.dataset.correct = answer.correct;
        }
        butt.addEventListener("click", selectAnswer);
    })
}

function resetState(){
    nextBut.style.display = "none";
    while(answerButs.firstChild){
        answerButs.removeChild(answerButs.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButs.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBut.style.display = "block";
}

function showScore(){
    resetState();
    questionEl.innerHTML = `Shen daagrove ${score} kula ${questions.length} kulidan!`;
    nextBut.innerHTML = "Itamashe Tavidan";
    nextBut.style.display = "block";
}

function handleNextBut(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextBut.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextBut();
    }else{
        startquiz();
    }
})

startquiz()