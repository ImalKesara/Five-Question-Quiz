const correctanswer = ['A', 'A', 'B', 'A', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
console.log(form);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let score = 0;
    const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    userAnswer.forEach((answer, index) => {
        if (answer === correctanswer[index]) {
            console.log('True');
            score += 20;
        }
    });
    console.log(score);
    scrollTo(0, 0);
    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);
});