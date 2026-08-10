import { useMutation } from "@tanstack/react-query"
import { signInMutationFn, signUpMutationFn } from "./mutations";

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

export {
  useSignupMutation,
  useSignInMutation
}