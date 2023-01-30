import BN from "bn.js";
import { Cell, beginCell, Address } from "ton";
import { beginMessage } from "./helpers";

export function data(params: { val: number }): Cell {
  return beginCell().storeUint(params.val, 32).endCell();
}
