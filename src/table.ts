export function generateMultiplicationTable<T extends number>(width: T): string {
  let result = "";

  for (let i = 1; i <= width; i++) {
    for (let j = 1; j <= width; j++) {
      result += `${i} x ${j} = ${i * j}\t`;
    }
    result += "\n";
  }

  return result;
}
