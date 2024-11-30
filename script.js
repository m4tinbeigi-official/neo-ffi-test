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

// نمایش سوالات به صورت داینامیک
const questionContainer = document.getElementById('questions');
questions.forEach((q, index) => {
    const questionHTML = `
        <div class="mb-3">
            <label for="question${index}" class="form-label">${q.question}</label>
            <select class="form-select" id="question${index}" required>
                <option value="1">کاملاً مخالفم</option>
                <option value="2">مخالفم</option>
                <option value="3">بی‌طرف</option>
                <option value="4">موافقم</option>
                <option value="5">کاملاً موافقم</option>
            </select>
        </div>
    `;
    questionContainer.innerHTML += questionHTML;
});

// محاسبه نتیجه تست و نمایش آن
const form = document.getElementById('testForm');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    let scores = {
        Extraversion: 0,
        Agreeableness: 0,
        Conscientiousness: 0,
        Neuroticism: 0,
        Openness: 0
    };

    questions.forEach((q, index) => {
        const answer = parseInt(document.getElementById(`question${index}`).value);
        scores[q.category] += answer;
    });

    let resultText = "<h5>نتیجه تست شما:</h5><ul>";
    for (let category in scores) {
        let score = scores[category];
        let resultMessage = "";

        if (score <= 6) {
            resultMessage = "شخصیت شما در این زمینه نسبتاً ضعیف است.";
        } else if (score <= 9) {
            resultMessage = "شخصیت شما در این زمینه متوسط است.";
        } else {
            resultMessage = "شخصیت شما در این زمینه بسیار قوی است.";
        }

        resultText += `<li><strong>${category}:</strong> ${resultMessage} (امتیاز: ${score})</li>`;
    }
    resultText += "</ul>";

    document.getElementById('resultText').innerHTML = resultText;
    document.getElementById('result').classList.remove('d-none');
});
