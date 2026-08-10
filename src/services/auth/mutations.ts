import { authClient } from "@/lib/auth-client";
import type { SignInReqBody, SignUpReqBody } from "@/types/services/auth/types";

const signUpMutationFn = async (reqBody: SignUpReqBody) => {
  const {
    data, error
  } = await authClient.signUp.email(reqBody);
  if (error) throw error;
  return data;
}

const signInMutationFn = async (reqBody: SignInReqBody) => {
  const {
    data, error
  } = await authClient.signIn.email(reqBody);
  if (error) throw error;
  return data;
}

export {
  signInMutationFn, signUpMutationFn
};

