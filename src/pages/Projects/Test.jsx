import React, { useState } from 'react';
import HamburgerMenu from '../components/Menu';
import Contacts from '../components/Contacts';
import '../../styles/Test.css';
import '../../styles/DiseaseInfo.css';
import {questionslist} from '../../data/texts/test';

export default function Test(){
    const questions = questionslist;
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showResults, setShowResults] = useState(false);

    const handleAnswerChange = (optionIndex) => {
        const newAnswers = [...answers];
        newAnswers[currentIndex] = optionIndex;
        setAnswers(newAnswers);
    };

    const nextQuestion = () => {
        if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
        }
    };

    const prevQuestion = () => {
        if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
        }
    };

    const finishTest = () => {
        if (answers.some((a) => a === null)) {
        alert('Пожалуйста, ответьте на все вопросы перед завершением.');
        return;
        }
        setShowResults(true);
    };

    const calculateScore = () => {
        return questions.reduce((score, q, idx) => {
        return score + (answers[idx] === q.correct ? 1 : 0);
        }, 0);
    };

    const resetTest = () => {
        setAnswers(Array(questions.length).fill(null));
        setCurrentIndex(0);
        setShowResults(false);
    };

    const progress = ((currentIndex + 1) / questions.length) * 100;
    const currentQuestion = questions[currentIndex];
    const selectedAnswer = answers[currentIndex];

    return (
        <div>
            <HamburgerMenu />
        <div className="generalStyle">
        <h1>Тест: проверка знаний</h1>

        {!showResults ? (
            <>
            {/* Индикатор прогресса */}
            <div className="progress-container">
                <div className="progress-bar-wrapper">
                <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
                </div>
                <span className="progress-text">
                Вопрос {currentIndex + 1} из {questions.length}
                </span>
            </div>

            {/* Карточка вопроса */}
            <div className="question-card">
                <h3>{currentQuestion.question}</h3>
                <div className="options">
                {currentQuestion.options.map((option, idx) => (
                    <label key={idx} className="option-label">
                    <input
                        type="radio"
                        name={`q${currentIndex}`}
                        value={idx}
                        checked={selectedAnswer === idx}
                        onChange={() => handleAnswerChange(idx)}
                    />
                    {option}
                    </label>
                ))}
                </div>
            </div>

            {/* Кнопки навигации */}
            <div className="navigation">
                <button
                className="button"
                onClick={prevQuestion}
                disabled={currentIndex === 0}
                >
                ← Назад
                </button>

                {currentIndex === questions.length - 1 ? (
                <button className="button finish-button" onClick={finishTest}>
                    Завершить
                </button>
                ) : (
                <button
                    className="button"
                    onClick={nextQuestion}
                    disabled={currentIndex === questions.length - 1}
                >
                    Далее →
                </button>
                )}
            </div>
            </>
        ) : (
            // Блок результатов
            <div className="results">
            <h2>Результат</h2>
            <p className="score">
                Правильных ответов: {calculateScore()} из {questions.length}
            </p>
            <h3>Детали:</h3>
            {questions.map((q, idx) => {
                const userAnswer = answers[idx];
                const isCorrect = userAnswer === q.correct;
                return (
                <div
                    key={q.id}
                    className={`result-item ${isCorrect ? 'correct' : 'incorrect'}`}
                >
                    <p>
                    <strong>
                        {idx + 1}. {q.question}
                    </strong>
                    </p>
                    <p>
                    Ваш ответ: {q.options[userAnswer]} {isCorrect ? '✅' : '❌'}
                    </p>
                    {!isCorrect && (
                    <p className="correct-answer">
                        Правильный ответ: {q.options[q.correct]}
                    </p>
                    )}
                </div>
                );
            })}
            <button className="button" onClick={resetTest}>
                Пройти заново
            </button>
            </div>
        )}
        
        </div>
        <Contacts />
        </div>
    );
};