import {useTimer} from "../hooks/useTimer";

function TimerComponent({allTime, onTimeOver})
{

    const {timer} = useTimer(allTime, onTimeOver);

    return (
        <>
        <div className="timer">
        <span>{timer}</span>
        </div>
        </>
    );
}

export default TimerComponent;