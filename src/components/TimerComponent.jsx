import {useTimer} from "../hooks/useTimer";

function TimerComponent({allTime, onTimeOver, isTick})
{

    const {timer} = useTimer(allTime, onTimeOver, isTick);

    return (
        <>
        <div className="timer">
        <span>{timer}</span>
        </div>
        </>
    );
}

export default TimerComponent;