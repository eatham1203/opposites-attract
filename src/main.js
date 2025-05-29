const carousel = document.getElementById('carousel');
const slides = carousel.children;
const totalSlides = slides.length;
const next = document.getElementById('nextBtn');
const prev = document.getElementById('prevBtn');
let currentSlide = 0;

/** Picture Carousel**/
function updateSlide() {
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

next.addEventListener('click', () => {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    updateSlide();
  } else {
    currentSlide = 0
    updateSlide();
  }
});

prev.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlide();
  } else {
    currentSlide = totalSlides - 1;
    updateSlide();
  }
});

/* Compatability Test */
function isValidMBTI(type) {
  const allTypes = [
    'ISTJ','ISFJ','INFJ','INTJ',
    'ISTP','ISFP','INFP','INTP',
    'ESTP','ESFP','ENFP','ENTP',
    'ESTJ','ESFJ','ENFJ','ENTJ'
  ];
  return allTypes.includes(type);
}

document.addEventListener('DOMContentLoaded', () => {
  const checkBtn = document.getElementById('checkBtn');
  const mbtiInput = document.getElementById('mbtiInput');
  const result = document.getElementById('compatibilityResult');

  const amazing = ['ENFJ', 'INTJ', 'ENFP', 'ENTP', 'INTP'];
  const good = ['ISTJ', 'ESTJ', 'INFJ', 'ISFJ', 'ESTP', 'ISTP'];
  const bad = ['INFP', 'ISFP', 'ESFP', 'ESFJ'];

  checkBtn.addEventListener('click', () => {
    const input = mbtiInput.value.trim().toUpperCase();

    if (!isValidMBTI(input)) {
      result.textContent = '⚠️ Please enter a valid MBTI type (e.g. INFP)';
      result.className = 'mt-4 text-xl font-semibold text-red-700 text-center sm:text-left';
      return;
    }

    if (amazing.includes(input)) {
      result.textContent = '🌟 Compatibility: Amazing match with ENTJ!';
      result.className = 'mt-4 text-2xl font-bold text-green-600 text-center sm:text-left animate-bounce';
    } else if (good.includes(input)) {
      result.textContent = '👍 Compatibility: Pretty good with ENTJ.';
      result.className = 'mt-4 text-2xl font-bold text-yellow-600 text-center sm:text-left animate-bounce';
    } else if (bad.includes(input)) {
      result.textContent = '⚠️ Compatibility: Not the best with ENTJ.';
      result.className = 'mt-4 text-2xl font-bold text-red-600 text-center sm:text-left animate-bounce';
    } else {
      result.textContent = '🤷 Compatibility unknown — not in our list.';
      result.className = 'mt-4 text-2xl font-bold text-orange-300 text-center sm:text-left animate-bounce';
    }
  })
});
