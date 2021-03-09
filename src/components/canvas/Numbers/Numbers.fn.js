export const isEven = n => n % 2 == 0

export const getCellNums = size => {
  const nums = []

  let n = 1;
  for (let j = 1; j < size; j++) {
    if (isEven(n)) {
      n = n + 1
    }

    if (nums[nums.length - 1] == n) {
      n = n + 2
    }

    nums.push(n)
  }

  return nums
}
