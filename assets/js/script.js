const quizContainer = document.querySelector('.quiz__container');
const total = document.querySelector('.quiz__total');

const questionData = [
    {
        question: 'What is the capital of Argentina?',
        answers: [
            { text: 'Mendoza', correct: false },
            { text: 'Buenos Aires', correct: true },
            { text: 'Cordoba', correct: false },
            { text: 'Ushuaia', correct: false },
        ]
    },
    {
        question: 'What is the capital of Italy?',
        answers: [
            { text: 'Mantova', correct: false },
            { text: 'Milan', correct: false },
            { text: 'Rome', correct: true },
            { text: 'Venice', correct: false }
        ]
    },
    {
        question: 'What is the capital of Australia?',
        answers: [
            { text: 'Sydney', correct: false },
            { text: 'Camberra', correct: true },
            { text: 'Perth', correct: false },
            { text: 'Melbourne', correct: false }
        ]
    },
    {
        question: 'What is the capital of Egito?',
        answers: [
            { text: 'Cairo', correct: true },
            { text: 'Alexandria', correct: false },
            { text: 'Giza', correct: false },
            { text: 'Suez', correct: false },

        ]
    },
    {
        question: 'What is the capital of Norway?',
        answers: [
            { text: 'Flam', correct: false },
            { text: 'Oslo', correct: true },
            { text: 'Stavanger', correct: false },
            { text: 'Bergen', correct: false }
        ]
    },
]