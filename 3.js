function loginUser() {
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

if (username === "student" && password === "1234") {
document.getElementById('loginPage').style.display = 'none';
document.getElementById('dashboard').style.display = 'flex';
} else {
alert("❌ اسم المستخدم أو كلمة المرور غير صحيحة");
}}

function logout() {
document.getElementById('dashboard').style.display = 'none';
document.getElementById('loginPage').style.display = 'block';
}

function showSection(section) {
const content = document.getElementById('content');
let html = "";

if (section === 'subjects') {
html = `
<div class="card">
<h3> متابعة المواد</h3>
<p>اختر المادة لمتابعة تقدمك:</p>
<ul>
<li>اللغة العربية - نسبة الإنجاز: 90%</li>
<li>الكيمياء - نسبة الإنجاز: 50%</li>
<li>الفيزياء - نسبة الإنجاز: 70%</li>
<li>الاحياء وعلوم الأرض - نسبة الإنجاز: 50%</li>
<li>اللغة الإنجليزية - نسبة الإنجاز: 90%</li>
</ul>
</div>`;
} 
else if (section === 'questions') {
html = `
<div class="card">
<h3>ركن الأسئلة</h3>
<p>يمكنك طرح أسئلتك هنا ليجيب عنها المدرس المختص.</p>
<textarea placeholder="اكتب سؤالك هنا..." style="width:100%;height:100px;border-radius:10px;border:2px solid #a57e52;padding:10px;"></textarea>
<button style="margin-top:10px;background:#7b5833;color:white;padding:10px 20px;border:none;border-radius:10px;">إرسال</button>
</div>`;
} 
else if (section === 'exams') {
html = `
<div class="card">
<h3> الامتحانات</h3>
<p>الامتحان القادم: 15 أكتوبر - مادة الفيزياء</p>
<button style="background:#7b5833;color:white;border:none;padding:10px 20px;border-radius:10px;margin-top:10px;">ابدأ المراجعة الآن</button>
</div>`;
} 
else if (section === 'alerts') {
html = `
<div class="card">
<h3> التنبيهات</h3>
<ul>
<li>تذكير: مراجعة مادة الأحياء وعلوم الأرض الساعة 6 مساءً</li>
<li>تنبيه: لا تغادر الموقع أثناء المذاكرة!</li>
<li>تقرير أسبوعي سيتم إرساله لولي الأمر غدًا</li>
</ul>
</div>`;
} 
else if (section === 'parent') {
html = `
<div class="card">
<h3> اتصال بولي الأمر</h3>
<p>يمكن لولي الأمر متابعة أداء الطالب وإرسال ملاحظات مباشرة.</p>
<button style="background:#a57e52;color:white;padding:10px 20px;border:none;border-radius:10px;">إرسال تقرير للأب</button>
</div>`;
}

content.innerHTML = html;
}
// سلايدر المدرسين
let slideIndex = 0;
const slides = document.querySelector('.slides');
const teacherCards = document.querySelectorAll('.teacher-card');
const totalSlides = teacherCards.length;

document.querySelector('.next').addEventListener('click', () => moveSlide(1));
document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));

function moveSlide(step) {
slideIndex = (slideIndex + step + totalSlides) % totalSlides;
slides.style.transform = `translateX(-${slideIndex * 270}px)`;
}

setInterval(() => moveSlide(1), 2000);


  