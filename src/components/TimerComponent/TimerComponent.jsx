import { useTimer } from "../../hooks/useTimer";
import styles from "./TimerComponent.module.css";

function TimerComponent({
  allTime,
  onTimeOver,
  isTick,
  timerValue,
  useHook = true
}) {

  const hookData = useHook
    ? useTimer(allTime, onTimeOver, isTick)
    : null;

  const timer = useHook ? hookData.timer : timerValue;

  const isExpired = timer === 0;
  const isCritical = timer > 0 && timer <= 3;

  return (
    <div
      className={`${styles.timer}
        ${isExpired ? styles.expired : ""}
        ${isCritical ? styles.critical : ""}
      `}
    >
      <span>
        {timer}
        {isCritical && " 😨"}
      </span>
    </div>
  );
}

export default TimerComponent;