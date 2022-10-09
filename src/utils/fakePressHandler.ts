export function fakePressHandler (message: string): () => void {
   return () => alert(message);
}
