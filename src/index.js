import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import quizzes from './Flashcards/flashcardObject'
import './index.css';
import FlashQuiz from './Flashcards/quizApp'

function App() {
  const [card] = useState(quizzes) 
  return (
    <div className="myName">
      <h1>React FlashCards</h1>
      {card.map((elem)=>{
        return (
         <FlashQuiz key={elem.id} {...elem}/>
        )
        
      })}
     
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

