import { useRecoilValue } from "recoil"
import { FriendSecretResult } from "../atom"

export const useDrawerResult = () => {
  return useRecoilValue(FriendSecretResult)
}