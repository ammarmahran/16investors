function submitQuiz() {
    const form = document.getElementById('quizForm');
    let score = 0;
    for (let i = 1; i <= 6; i++) {
        const question = form['q' + i];
        const answer = question.value;
        if (answer) {
            score += parseInt(answer, 10); // Summing up the score
        } else {
            // Handle unanswered question
            alert(`Please answer question ${i}`);
            return;
        }
    }

    // Display results
    const results = document.getElementById('results');
    results.innerHTML = `<h2>Your Score: ${score}</h2><p>Further interpretation of the score can be added here.</p>`;
}

