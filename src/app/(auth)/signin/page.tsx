import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import SignInForm from "./SignInForm";

const SignInPage = () => {
  return (
    <div className="flex justify-center items-center p-5">
      <Card className="w-full min-w-125 max-w-125 flex flex-col gap-6">
        <CardHeader>
          <CardTitle>
            <h1 className="text-center text-2xl font-medium">
              Sign In
            </h1>
          </CardTitle>
          <CardDescription>
            <p className="text-center">
              Enter your email, password below to sign in to your account
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignInForm />
        </CardContent>
      </Card>
    </div>
  )
}

export default SignInPage;
