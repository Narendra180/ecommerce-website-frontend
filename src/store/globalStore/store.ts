import type { LoggedInUser } from "@/types";
import { create, createStore } from "zustand";

type State = {
  emailToVerify: string | null;
}

type Action = {
  setEmailToVerify: (email: string | null) => void;
}

export type GlobalStore = State & Action;

export const defaultInitState: State = {
  emailToVerify: null
}

export const createGlobalStore = (
  initState: State = defaultInitState,
) => {
  return createStore<GlobalStore>()((set) => {
    return {
      ...initState,
      setEmailToVerify: (email) => {
        set({
          emailToVerify: email
        })
      }
    }
  });
}



