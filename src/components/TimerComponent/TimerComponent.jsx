import {useTimer} from "../../hooks/useTimer";
import styles from "./TimerComponent.module.css";

function TimerComponent({allTime, onTimeOver, isTick, key})
{

    const {timer} = useTimer(allTime, onTimeOver, isTick, key);

    return (
        <>
        <div className={styles.timer}>
        <span>{timer}</span>
        </div>
        </>
    );
}

export default TimerComponent;