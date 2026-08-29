import { addMilliseconds, differenceInMinutes, differenceInSeconds, isAfter, isBefore, isEqual } from "date-fns";
import { useEffect, useRef, useState } from "react";

type Props = {
  //ms = milliseconds
  msToCountDownFromCurrentTime: number;
  propToResetTimer?: number;
  textToPrepend?: string;
  onCompleted?: () => void;
  onStart?: () => void;
}

function CountDownWithDateObj({
  msToCountDownFromCurrentTime,
  propToResetTimer,
  textToPrepend = "",
  onCompleted,
  onStart
}: Props) {

  const [date, setDate] = useState<Date>(new Date());
  const [targetDate, setTargetDate] = useState<Date>(new Date(date.getTime() + msToCountDownFromCurrentTime));
  const timeoutRef = useRef<any>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const hasCalledOnStartRef = useRef(false);

  const handleReset = () => {
    const newDateObj = new Date();
    setDate(newDateObj);
    setTargetDate(new Date(newDateObj.getTime() + msToCountDownFromCurrentTime));
    hasCalledOnStartRef.current = false;
  }

  useEffect(() => {
    if (isBefore(date, targetDate) && !isPaused) {
      if (!hasCalledOnStartRef.current) {
        onStart?.();
        hasCalledOnStartRef.current = true;
      }
      timeoutRef.current = setTimeout(() => {
        setDate(addMilliseconds(date, 1000));
      }, 1000);
    } else if (isAfter(date, targetDate) || isEqual(date, targetDate)) {
      onCompleted?.();
      hasCalledOnStartRef.current = true;
    }
    return () => {
      clearTimeout(timeoutRef.current);
    }
  }, [date, targetDate, isPaused]);

  useEffect(() => {
    handleReset();
  }, [msToCountDownFromCurrentTime, propToResetTimer]);

  const differenceInMinsVal = differenceInMinutes(targetDate, date);
  const differenceInSecondsVal = differenceInSeconds(targetDate, date);

  // this is for showing remaining seconds for that minute.
  const secondsVal = Math.floor(differenceInSecondsVal % 60);

  const strToDisplay = `${`${String(differenceInMinsVal).padStart(2, '0')}:`}${String(secondsVal).padStart(2, '0')}`;

  return (
    <span className="whitespace-nowrap">
    {`${textToPrepend}${strToDisplay}`}
    </span>
  )
}

export default CountDownWithDateObj;

{/* <Button
  onClick={() => {
    handleReset();
  }}
>
  Reset
</Button>
<Button
  onClick={() => {
    setIsPaused(!isPaused);
  }}
>
  Pause/Resume
</Button> */}
