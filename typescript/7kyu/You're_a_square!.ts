export default function isSquare(n: number): boolean {
  if (n < 0) return false;
  return Math.ceil(Math.sqrt(n)) == Math.floor(Math.sqrt(n));
}
