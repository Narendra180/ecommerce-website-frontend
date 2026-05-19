import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";

const SigninWithGoogleBtn = () => {

  const handleClick = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });

    console.log(data)
  }

  return (
    <Button
      onClick={handleClick}
      variant={"ghost"}
      className="absolute bottom-0 left-0 cursor-pointer hover:bg-transparent"
    >
      <img
        src={"/images/google-signin-g.svg"}
        alt="login with google"
      />
    </Button>
  )
}

export default SigninWithGoogleBtn;
