let currentQuestionIndex = 0;
let scores = {
    Extraversion: 0,
    Agreeableness: 0,
    Conscientiousness: 0,
    Neuroticism: 0,
    Openness: 0
};

document.getElementById('startButton').addEventListener('click', startTest);

function startTest() {
    document.getElementById('startSection').classList.add('d-none');
    document.getElementById('questionSection').classList.remove('question-container');
    loadQuestion();
}

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('questionNumber').innerText = `سوال ${currentQuestionIndex + 1} از ${questions.length}`;
    document.getElementById('questionText').innerText = question.question;

    for (let i = 0; i < 4; i++) {
        document.getElementById(`answer${i + 1}`).nextElementSibling.innerText = `جواب ${i + 1}`;
    }
}

function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        const answerValue = parseInt(selectedAnswer.value);
        const category = questions[currentQuestionIndex].category;
        scores[category] += answerValue;

        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            loadQuestion();
            updateProgress();
        } else {
            showResult();
        }
    }
}

function updateProgress() {
    const progressBar = document.getElementById('progressBar');
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = progress + '%';
    progressBar.setAttribute('aria-valuenow', progress);
}

function showResult() {
    let resultText = "<div class='row'>";
    const descriptions = {
        Extraversion: "ویژگی برونگرایی نشان می‌دهد که شما چقدر تمایل دارید در اجتماعات حضور پیدا کنید.",
        Agreeableness: "ویژگی توافق‌پذیری به معنای تمایل شما برای هم‌دلی با دیگران است.",
        Conscientiousness: "ویژگی وجدان‌کاری نشان‌دهنده مسئولیت‌پذیری و نظم شما است.",
        Neuroticism: "ویژگی عصبی بودن به معنای تمایل شما به احساسات منفی مانند اضطراب است.",
        Openness: "ویژگی باز بودن به تجربه‌ها نشان‌دهنده تمایل شما به پذیرش ایده‌های جدید است."
    };

    for (let category in scores) {
        let score = scores[category];
        let resultMessage = score <= 6 ? "شخصیت شما در این زمینه نسبتاً ضعیف است." : score <= 9 ? "شخصیت شما در این زمینه متوسط است." : "شخصیت شما در این زمینه بسیار قوی است.";
        let resultColor = score <= 6 ? "text-danger" : score <= 9 ? "text-warning" : "text-success";

        resultText += `
            <div class="col-12 col-md-6 mb-3">
                <div class="result-card p-4 rounded shadow-sm">
                    <h5>${category}</h5>
                    <p class="text-muted">${descriptions[category]}</p>
                    <p class="${resultColor}">${resultMessage}</p>
                    <p><strong>امتیاز شما: </strong>${score}</p>
                </div>
            </div>
        `;
    }

    resultText += "</div>";

    document.getElementById('resultText').innerHTML = resultText;
    document.getElementById('resultSection').classList.remove('result-container');
    document.getElementById('questionSection').classList.add('question-container');
}