function submitQuiz() {
    const form = document.getElementById('quizForm');
    let score = 0;
    for (let i = 1; i <= 4; i++) {
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
    let score = ``;

    if (results < 8) {score = `Jeff Bezos`} else 
    if (results < 12) {score = `Warren Buffet`} else 
    if (results < 16) {score = `SBF`} else 
    if (results < 20) {score = `Larry Fink`} else 
    if (results < 24) {score = `Donald Trump`} else 
    if (results < 28) {score = `Bill Ackman`} else 
    if (results < 30) {score = `Elon Musk`}
    
    
    results.innerHTML = `<h2>Your Score: ${score}</h2><p>Looks like you're a twat!</p>`;
}

