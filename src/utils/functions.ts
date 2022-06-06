import { BigNumber } from "ethers";

const randNum = (): BigNumber => {
  const bytes = new Uint8Array(8);

  window.crypto.getRandomValues(bytes);

  const bytesHex = bytes.reduce((o, v) => o + ("00" + v.toString(16)).slice(-2), "");

  return BigNumber.from("0x" + bytesHex);
};

export { randNum };
