"use client";

import { Button } from "@/components/ui/button";
import { useResendVerificationEmailMutation } from "@/services/auth";
import { useGlobalStore } from "@/store/globalStore/globalStoreHook";
import { use, useEffect, useRef, useState } from "react";
import { useCountdown, UseCountdownProps } from "react-countdown/hook";
import { CountdownProps, zeroPad } from "react-countdown";
import { toast } from "sonner";
import CountDown from "./CountDown";
import CountDownWithDateObj from "./CountDownWithDateObj";

const CheckInboxPage = () => {
  const emailToVerify = useGlobalStore(state => state.emailToVerify);

  const [isCountDownStarted, setIsCountDownStarted] = useState(false);
  const [isCountDownCompleted, setIsCountDownCompleted] = useState(false);
  const [timerResetVal, setTimerResetVal] = useState(0);

  const resendVerificationEmailMutation = useResendVerificationEmailMutation();

  const handleResendClick = async () => {
    console.log("Clicked resend")
    try {
      setIsCountDownCompleted(false);
      setTimerResetVal((prev) => prev + 1);
      if (!emailToVerify) throw new Error("Failed to send verification email.");
      await resendVerificationEmailMutation.mutateAsync({
        email: emailToVerify,
        callback: `${process.env.NEXT_PUBLIC_BASE_URL}/`
      });
    } catch (err: any) {
      // This is betterauth error object.
      const errMessage = err.message;
      toast.error(errMessage, {
        position: "bottom-right",
      })
    }
  }

  useEffect(() => {
    console.log(isCountDownStarted)
  }, [isCountDownStarted]);

  return (
    <div
      className="flex flex-col gap-4"
    >
      <h1
        className="text-center text-2xl font-medium text-black"
      >
        Check your inbox
      </h1>

      <p>
        {`We sent a verification link to ${emailToVerify} Click the link in the email to get started.`}
      </p>

      <div className="flex flex-col gap-2">
        <p className="text-center">
          Didn't receive email?
        </p>

        <div
          className="flex justify-center"
        >
          {
            isCountDownCompleted ? (
              <Button
                className="block"
                onClick={handleResendClick}
                disabled={!isCountDownCompleted}
              >
                Resend
              </Button>
            ) : (
              <CountDownWithDateObj
                msToCountDownFromCurrentTime={1000}
                propToResetTimer={timerResetVal}
                onCompleted={() => {
                  console.log("countdown completed")
                  setIsCountDownCompleted(true);
                  setIsCountDownStarted(false);
                }}
                onStart={() => {
                  setIsCountDownStarted(true);
                }}
                textToPrepend={"Resend in "}
              />
            )

          }
        </div>
      </div>
    </div>
  )
}

export default CheckInboxPage;
