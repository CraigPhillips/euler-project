export const answer = 171;

export const daysOfTheWeek = {
  monday: 0,
  tuesday: 1,
  wednesday: 2,
  thursday: 3,
  friday: 4,
  saturday: 5,
  sunday: 6,
};
export const monthsOfTheYear = {
  january: 1,
  february: 2,
  march: 3,
  april: 4,
  may: 5,
  june: 6,
  july: 7,
  august: 8,
  september: 9,
  october: 10,
  november: 11,
  december: 12,
};

export function solve() {
  const daysInAWeek = Object.keys(daysOfTheWeek).length;
  const today = {
    firstDayOfTheMonth: daysOfTheWeek.monday,
    month: monthsOfTheYear.january,
    year: 1900,
  };
  const firstInBoundsYear = 1901;
  const firstOutOfBoundsYear = 2001;
  const monthsThatStartWithSundayInRange = [];

  while (today.year < firstOutOfBoundsYear) {
    if (today.year >= firstInBoundsYear
        && today.firstDayOfTheMonth === daysOfTheWeek.sunday) {
      monthsThatStartWithSundayInRange.push(Object.assign({}, today));
    }

    const isDivisbleBy400 = today.year % 400 === 0;
    const isANonLeapYearCentury = today.year % 100 === 0 && !isDivisbleBy400;
    const isALeapYear = today.year % 4 === 0 && !isANonLeapYearCentury;

    let daysInThisMonth;
    switch (today.month) {
      case monthsOfTheYear.february:
        daysInThisMonth = isALeapYear ? 29 : 28;
        break;
      case monthsOfTheYear.september:
      case monthsOfTheYear.april:
      case monthsOfTheYear.june:
      case monthsOfTheYear.november:
        daysInThisMonth = 30;
        break;
      default:
        daysInThisMonth = 31;
        break;
    }

    // advances 'today' to the first day of the next month
    today.firstDayOfTheMonth = (today.firstDayOfTheMonth + daysInThisMonth)
      % daysInAWeek;
    if (today.month === monthsOfTheYear.december) {
      today.year += 1;
      today.month = monthsOfTheYear.january;
    } else today.month += 1;
  }

  return monthsThatStartWithSundayInRange.length;
}
