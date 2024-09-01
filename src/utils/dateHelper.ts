function getMaxDate(dates: string[]): Date {
  return new Date(Math.max(...dates.map(date => new Date(date).getTime())));
}

function isMaxDateLessThan(formattedDateTime: string, maxDate: Date): boolean {
  const formattedDate = new Date(formattedDateTime);
  return maxDate < formattedDate;
}