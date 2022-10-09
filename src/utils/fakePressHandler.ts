export function fakePressHandler(message: string): () => void {
  // eslint-disable-next-line no-alert
  return () => alert(message);
}
