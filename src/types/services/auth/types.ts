type SignUpReqBody = {
  name: string;
  email: string;
  password: string;
  callbackURL: string;
}

type SignInReqBody = {
  email: string;
  password: string;
}

type ResendVerificationEmailReqBody = {
  email: string;
  callback: string;
}

export type {
  SignUpReqBody,
  SignInReqBody,
  ResendVerificationEmailReqBody
}
