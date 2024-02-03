function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return year + " - year is leap year";
    }
    else {
        return year + " - year is not leap year";
    }
}
console.log(isLeapYear(2024));
console.log(isLeapYear(2000));
console.log(isLeapYear(1900));
console.log(isLeapYear(2004));
console.log(isLeapYear(2050));
console.log(isLeapYear(2052));