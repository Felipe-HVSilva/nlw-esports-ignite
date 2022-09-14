export function convertMinutesStringToHour(minutesAmount: number) {
  const hours = Math.floor(minutesAmount / 60)
  const minuts = minutesAmount % 60

  return `${String(hours).padStart(2, '0')}:${String(minuts).padStart(2, '0')}`
}