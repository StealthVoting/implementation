const randNum = (): string => {
  const bytes = new Uint8Array(8);

  window.crypto.getRandomValues(bytes);

  const bytesHex = bytes.reduce((o, v) => o + ("00" + v.toString(16)).slice(-2), "");

  return BigInt("0x" + bytesHex).toString(16);
};

export { randNum };
