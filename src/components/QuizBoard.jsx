import { useState } from "react";
import dataTest from "../data/dataTest";

function QuizBoard(props)
{
    const onFinish = props.onFinish;
    const [score, setScore] = useState(props.score);

    const listItems = dataTest.map((item) =>
        <div key={item.id}>
            <h2>{item.question}</h2>
            <div className="quiz">
                <ul>
                    {
                        item.options.map((option, index) =>
                        (
                            <li key={index} onClick={() => isRight(option == item.answer)}>{option}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );

    // const {score} = props;
    // const onFinish = props.onFinish;
    // const [userScore, setUserScore] = useState(score);

    const isRight = (right) => {
        if(right)
            setScore((prevCounter) => prevCounter +1);
    }

    return (
        <>
        <h1>Loading quiz...</h1>
        {/* <h2>{dataTest.question}</h2> */}
        {listItems[0]}
        <p>Now u have {score} points</p>
        <button className = "btn-exit" onClick={onFinish}>Exit</button>
        </>
    );
}

export default QuizBoard;