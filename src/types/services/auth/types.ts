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

export type {
  SignUpReqBody,
  SignInReqBody
}
