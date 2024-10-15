export const range = (start: number, end: number, step: number = 1): number[] => {
  const result: number[] = []

  if (step === 0) throw new Error('Step cannot be 0')

  // Xác định hướng của step để tạo mảng đúng chiều
  const increasing = step > 0

  if (increasing) {
    for (let i = start; i < end; i += step) {
      result.push(i)
    }
  } else {
    for (let i = start; i > end; i += step) {
      result.push(i)
    }
  }

  return result
}
