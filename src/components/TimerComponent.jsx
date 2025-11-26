import {useTimer} from "../hooks/useTimer";

function TimerComponent({allTime, onTimeOver, isTick, key})
{

    const {timer} = useTimer(allTime, onTimeOver, isTick, key);

    return (
        <>
        <div className="timer">
        <span>{timer}</span>
        </div>
        </>
    );
}

export default TimerComponent;