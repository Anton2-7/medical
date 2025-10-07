export function unicodeToBase64(str) {
  const utf8Bytes = new TextEncoder().encode(str);
  let binaryString = "";
  for (const byte of utf8Bytes) {
    binaryString += String.fromCharCode(byte);
  }
  return btoa(binaryString);
}

export function base64ToUnicode(b64) {
  const binaryString = atob(b64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return new TextDecoder().decode(bytes);
}
