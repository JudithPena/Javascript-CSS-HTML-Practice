export default function range(start, end) {
  const startNum = +start;
  const endNum = +end;
  if (startNum > endNum) return range(endNum, startNum);
  const result = [];

  for (let index = +startNum; index <= endNum; index++) {
    result.push(index);
  }
  return result;
}
