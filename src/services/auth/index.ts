import { useMutation } from "@tanstack/react-query"
import { resendVerificationEmailMutationFn, signInMutationFn, signUpMutationFn } from "./mutations";

const useSignupMutation = () => {
  return useMutation({
    mutationFn: signUpMutationFn
  });
}

const useSignInMutation = () => {
  return useMutation({
    mutationFn: signInMutationFn
  })
}

const useResendVerificationEmailMutation = () => {
  return useMutation({
    mutationFn: resendVerificationEmailMutationFn
  });
}

export {
  useSignupMutation,
  useSignInMutation,
  useResendVerificationEmailMutation
}