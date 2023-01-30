import * as called from "../contracts/called";
import dotenv from "dotenv";
dotenv.config();

export function initData() {
  return called.data({
    val: 100,
  });
}

export function initMessage() {
  return null;
}
