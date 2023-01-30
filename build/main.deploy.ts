import * as main from "../contracts/main";
import dotenv from "dotenv";
dotenv.config();

export function initData() {
  return main.data({
    val: 200,
  });
}

export function initMessage() {
  return null;
}
