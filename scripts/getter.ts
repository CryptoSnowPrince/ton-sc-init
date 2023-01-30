import { beginCell, Dictionary } from "ton-core";
import { contractAddress, Cell  } from "ton-core";
import { TonClient, SendMode, Address } from "ton";
import { getHttpEndpoint } from "@orbs-network/ton-access"
import dotenv from "dotenv"

dotenv.config()

const contractAddr = "EQBizflUR_CAaY1x2vEqaObJxSCPVq8-mglhIsR3ayixLGBp"

async function callGetter() {
  try {
    const mainContract = Address.parse(contractAddr);
    const endpoint = await getHttpEndpoint({
      network: (process.env.TESTNET ? "testnet" : "mainnet")
    });
    const client = new TonClient({ endpoint });
    const call = await client.callGetMethod(mainContract, "get_Val");
    console.log(`val value is ${call.stack.readBigNumber().toString()}`);
  } catch (error) {
    console.log("[getter err]: ", error)
  }
}

callGetter();
