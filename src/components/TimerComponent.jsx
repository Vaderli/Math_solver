import { useEffect, useState } from "react";

function TimerComponent(props){

    const {allTime} = props;
    const [timer, setTimer] = useState(6); //брати з пропсів?

    const tick = () => {
        setTimer((prevCount) => (prevCount - 1) < 0 ? 0 : prevCount - 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {tick()},1000)

        return () => clearInterval(interval);
    }, []);

    return (
        <>
        <div className="timer">
        <span>{timer}</span>
        </div>
        </>
    );
}

export default TimerComponent;