// سوالات تست شخصیت نئو با 60 سوال
const questions = [
    // برونگرایی (Extraversion) - 12 سوال
    { question: "آیا شما معمولاً دوست دارید در جمع‌های اجتماعی باشید؟", category: "Extraversion" },
    { question: "آیا شما به راحتی با افراد غریبه ارتباط برقرار می‌کنید؟", category: "Extraversion" },
    { question: "آیا شما معمولاً احساس می‌کنید که باید در فعالیت‌های گروهی شرکت کنید؟", category: "Extraversion" },
    { question: "آیا شما احساس می‌کنید که معمولاً نیاز به انرژی زیاد دارید؟", category: "Extraversion" },
    { question: "آیا شما معمولاً نسبت به دیگران انرژی زیادی دارید؟", category: "Extraversion" },
    { question: "آیا شما به راحتی از خانه بیرون می‌روید و با دیگران ارتباط برقرار می‌کنید؟", category: "Extraversion" },
    { question: "آیا شما از حضور در مهمانی‌ها و تجمعات اجتماعی لذت می‌برید؟", category: "Extraversion" },
    { question: "آیا شما به راحتی می‌توانید گفتگوهای خود را با افراد غریبه شروع کنید؟", category: "Extraversion" },
    { question: "آیا شما معمولاً روحیه شاد و مثبتی دارید؟", category: "Extraversion" },
    { question: "آیا شما تمایل دارید در مرکز توجه باشید؟", category: "Extraversion" },
    { question: "آیا شما به فعالیت‌های هیجان‌انگیز علاقه دارید؟", category: "Extraversion" },
    { question: "آیا شما معمولاً فردی فعال و پرانرژی هستید؟", category: "Extraversion" },

    // دلپذیری (Agreeableness) - 12 سوال
    { question: "آیا شما به راحتی به دیگران اعتماد می‌کنید؟", category: "Agreeableness" },
    { question: "آیا شما دوست دارید به دیگران کمک کنید؟", category: "Agreeableness" },
    { question: "آیا شما معمولاً از درگیری و بحث پرهیز می‌کنید؟", category: "Agreeableness" },
    { question: "آیا شما تمایل دارید که همیشه در موقعیت‌های دشوار از دیگران دفاع کنید؟", category: "Agreeableness" },
    { question: "آیا شما معمولاً احساس همدردی نسبت به دیگران دارید؟", category: "Agreeableness" },
    { question: "آیا شما معمولاً به راحتی از دیگران عذرخواهی می‌کنید؟", category: "Agreeableness" },
    { question: "آیا شما معمولاً تمایل دارید دیگران را راحت‌تر ببخشید؟", category: "Agreeableness" },
    { question: "آیا شما برای منافع دیگران در تصمیم‌گیری‌هایتان اهمیت زیادی قائل هستید؟", category: "Agreeableness" },
    { question: "آیا شما بیشتر اوقات با نظر دیگران موافقید؟", category: "Agreeableness" },
    { question: "آیا شما معمولاً به دیگران توجه می‌کنید و به احساسات آنها اهمیت می‌دهید؟", category: "Agreeableness" },
    { question: "آیا شما دوست دارید که به دیگران کمک کنید تا مشکلاتشان حل شود؟", category: "Agreeableness" },
    { question: "آیا شما از شرکت در کارهای گروهی لذت می‌برید؟", category: "Agreeableness" },

    // وجدان‌گرایی (Conscientiousness) - 12 سوال
    { question: "آیا شما به برنامه‌ریزی و انجام کارها در زمان معین اهمیت می‌دهید؟", category: "Conscientiousness" },
    { question: "آیا شما معمولاً دقیق و منظم هستید؟", category: "Conscientiousness" },
    { question: "آیا شما برای انجام وظایف و مسئولیت‌هایتان حساسیت زیادی دارید؟", category: "Conscientiousness" },
    { question: "آیا شما معمولاً اهداف بلندمدت خود را دنبال می‌کنید؟", category: "Conscientiousness" },
    { question: "آیا شما به جزئیات دقت می‌کنید؟", category: "Conscientiousness" },
    { question: "آیا شما معمولاً کارهای خود را به درستی و با کیفیت انجام می‌دهید؟", category: "Conscientiousness" },
    { question: "آیا شما به نظم و ترتیب در محیط‌های کاری یا تحصیلی اهمیت می‌دهید؟", category: "Conscientiousness" },
    { question: "آیا شما معمولاً احساس مسئولیت و تعهد به کارهای خود دارید؟", category: "Conscientiousness" },
    { question: "آیا شما به سختی به دنبال انجام وظایف خود می‌روید؟", category: "Conscientiousness" },
    { question: "آیا شما معمولاً می‌توانید به راحتی به دیگران تکیه کنید که کارهایشان را به خوبی انجام دهند؟", category: "Conscientiousness" },
    { question: "آیا شما فردی منظم و با دقت در زندگی شخصی خود هستید؟", category: "Conscientiousness" },
    { question: "آیا شما معمولاً می‌توانید برنامه‌های دقیق برای رسیدن به اهداف خود تنظیم کنید؟", category: "Conscientiousness" },

    // روان‌رنجورخویی (Neuroticism) - 12 سوال
    { question: "آیا شما به راحتی مضطرب می‌شوید؟", category: "Neuroticism" },
    { question: "آیا شما گاهی احساس می‌کنید که تحت فشار و استرس زیادی هستید؟", category: "Neuroticism" },
    { question: "آیا شما معمولاً احساس نگرانی یا ترس دارید؟", category: "Neuroticism" },
    { question: "آیا شما از هر تغییری که ممکن است پیش بیاید، دچار نگرانی می‌شوید؟", category: "Neuroticism" },
    { question: "آیا شما به راحتی در موقعیت‌های استرس‌زا نگران می‌شوید؟", category: "Neuroticism" },
    { question: "آیا شما به راحتی به نگرانی‌های دیگران واکنش نشان می‌دهید؟", category: "Neuroticism" },
    { question: "آیا شما تمایل دارید که در شرایط دشوار بیشتر عصبی شوید؟", category: "Neuroticism" },
    { question: "آیا شما معمولاً به احساسات منفی خود اهمیت زیادی می‌دهید؟", category: "Neuroticism" },
    { question: "آیا شما اغلب از ناتوانی در انجام کارها احساس ناراحتی می‌کنید؟", category: "Neuroticism" },
    { question: "آیا شما خود را به راحتی از دست می‌دهید؟", category: "Neuroticism" },
    { question: "آیا شما از پیش‌بینی‌های بد و اتفاقات منفی در زندگی خود هراس دارید؟", category: "Neuroticism" },
    { question: "آیا شما از احساسات ناخوشایند خود بیشتر نگران هستید؟", category: "Neuroticism" },

    // گشودگی به تجربه‌ها (Openness) - 12 سوال
    { question: "آیا شما علاقه‌مند به تجربه‌های جدید و متفاوت هستید؟", category: "Openness" },
    { question: "آیا شما از هنر، موسیقی و ادبیات لذت می‌برید؟", category: "Openness" },
    { question: "آیا شما به ایده‌ها و مفاهیم غیرمعمول علاقه دارید؟", category: "Openness" },
    { question: "آیا شما تمایل دارید که بیشتر از افراد دیگر ذهن خود را باز نگه دارید؟", category: "Openness" },
    { question: "آیا شما به راحتی به فکرهای جدید علاقه‌مند می‌شوید؟", category: "Openness" },
    { question: "آیا شما به راحتی می‌توانید چیزهای جدیدی بیاموزید؟", category: "Openness" },
    { question: "آیا شما تمایل دارید در مورد فلسفه‌های غیررایج و باورهای جدید فکر کنید؟", category: "Openness" },
    { question: "آیا شما به نظرهای متفاوت و جالب علاقه دارید؟", category: "Openness" },
    { question: "آیا شما تمایل دارید در زندگی خود تغییرات اساسی ایجاد کنید؟", category: "Openness" },
    { question: "آیا شما از تجربه‌های جدید و هیجان‌انگیز لذت می‌برید؟", category: "Openness" },
    { question: "آیا شما تمایل دارید برای یافتن چیزهای جدید و جذاب جستجو کنید؟", category: "Openness" },
    { question: "آیا شما به ایده‌ها و نظریه‌های پیچیده علاقه دارید؟", category: "Openness" }
];

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
    document.getElementById('questionText').innerText = question.text;

    for (let i = 0; i < 4; i++) {
        document.getElementById(`answer${i + 1}`).nextElementSibling.innerText = question.answers[i];
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