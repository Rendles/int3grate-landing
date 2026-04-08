export function splitArrayIntoSubArrays<T>(arr: T[]) {
  const result = [];
  let i = 0;
  const sizes = [2, 3];
  let toggle = 0;

  while (i < arr.length) {
    const size = sizes[toggle % 2];
    result.push(arr.slice(i, i + size));
    i += size;
    toggle++;
  }

  return result;
}
