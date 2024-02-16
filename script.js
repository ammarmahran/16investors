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

    if (results < 8) {outcome = `Jeff Bezos`} else 
    if (results < 12) {outcome = `Warren Buffet`} else 
    if (results < 16) {outcome = `SBF`} else 
    if (results < 20) {outcome = `Larry Fink`} else 
    if (results < 24) {outcome = `Donald Trump`} else 
    if (results < 28) {outcome = `Bill Ackman`} else 
    if (results < 30) {outcome = `Elon Musk`}
    
    
    results.innerHTML = `<h2>OMG, you're basically: ${outcome} (${results)</h2>`;
}

