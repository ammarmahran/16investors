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

    if (score < 8) {outcome = `Jeff Bezos`} else 
    if (score < 12) {outcome = `Warren Buffet`} else 
    if (score < 16) {outcome = `SBF`} else 
    if (score < 20) {outcome = `Larry Fink`} else 
    if (score < 24) {outcome = `Donald Trump`} else 
    if (score < 28) {outcome = `Bill Ackman`} else 
    if (score < 30) {outcome = `Elon Musk`} else {outcome = `not found`}
    
    
    results.innerHTML = `<h2>OMG, you're basically: ${outcome} (Score = ${score})</h2>`;
}

