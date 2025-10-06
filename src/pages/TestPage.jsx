import { useState } from "react";
import QuizBoard from "../components/QuizBoard"

function TestPage({onFinish})
{
    const [score, setScore] = useState(0)

    return (
        <QuizBoard score = {score} onFinish = {onFinish}/>
    );
}

export default TestPage;