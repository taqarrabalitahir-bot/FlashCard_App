document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        { question: "What is the capital of France?", answer: "Paris" },
        { question: "What is 2 + 2?", answer: "4" },
        { question: "What is the largest ocean on Earth?", answer: "Pacific Ocean" },
        { question: "What is the chemical symbol for water?", answer: "H2O" },
        { question: "Who wrote 'Romeo and Juliet'?", answer: "William Shakespeare" },
        { question: "What is the speed of light?", answer: "Approximately 299,792 kilometers per second" },
        { question: "What is the largest planet in our solar system?", answer: "Jupiter" },
        { question: "What is the smallest prime number?", answer: "2" },
        { question: "What is the currency of Japan?", answer: "Yen" },
        { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" },
        { question: "What is the tallest mountain in the world?", answer: "Mount Everest" },
        { question: "What is the largest desert in the world?", answer: "Sahara Desert" },
        { question: "What is the longest river in the world?", answer: "Nile River" },
        { question: "What is the smallest country in the world?", answer: "Vatican City" },
        { question: "What is the largest mammal in the world?", answer: "Blue Whale" }
        ];
        let currentcard = 0;
        const flashcardElement = document.getElementById('flashcard');
        const questionElement = document.getElementById('question');
        const answerElement = document.getElementById('answer');
    
        function displayCard() {
        questionElement.textContent = flashcards[currentcard].question;
        answerElement.textContent = flashcards[currentcard].answer;
        flashcardElement.classList.remove('is-flipped');
        } 
    document.getElementById('flip-card').addEventListener('click', () => {
        flashcardElement.classList.toggle('is-flipped');
    });
    document.getElementById('next-card').addEventListener('click', () => {
        currentcard = (currentcard + 1) % flashcards.length;
        displayCard();
    });
    displayCard();
});
