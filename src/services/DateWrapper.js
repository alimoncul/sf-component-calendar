const moment = require("moment");

function notValidDateThrowanError(date){
  if(moment(date).isValid()){
    throw new Error("Specified date is not valid.");
  }
}

export function weekOfYear(date){
  return date.week();
}

export function clone(date){
  return date.clone();
}

export function date(dt=null){
  const _date = dt !== null 
    ? typeof dt === "string" || dt instanceof Object
      ? moment(dt)
      : clone(dt)
    : moment();
    
  const dateObject = _date.toObject();
  
  class DateWrapper {
    month(num){
      return num ? month(num, _date) : dateObject.months;
    }
    
    day(num){
      return num ? day(num, _date) : dateObject.dates;
    }
    
    year(num){
      return num ? year(num, _date) : dateObject.years;
    }
    
    startDayOfMonth(){
      return startDayOfMonth(_date);
    }
    
    monthShort(){
      return monthsShort(_date);
    }
    
    monthLong(){
      return monthsLong(_date);
    }
    
    daysCount(){
      return daysCount(_date);
    }
    
    nextMonth(){
      return date(nextMonth(_date))
    }
    
    prevMonth(){
      return date(prevMonth(_date))
    }
    
    toString(){
      return _date.toString();
    }
    
    toObject(){
      return {
        year: dateObject.years,
        day: dateObject.date,
        month: dateObject.months
      }
    }
  }
  
  return new DateWrapper();
}

export function month(month, date){
  return date !== undefined ? date.month(month) : moment().month(month);
}

export function year(year, date){
  return date !== undefined ? date.year(year) : moment().year(year);
}

export function day(year, date){
  return date !== undefined ? date.day(year) : moment().day(year);
}

export function startDayOfMonth(date){
  return date.weekday();
}

export function monthsShort(date){
  return date ? moment.monthsShort(date.month()) : moment.monthsShort();
}

export function monthsLong(date){
  return date ? moment.months(date.month()) : moment.months();
}

export function weekdaysShort(date){
  return date ? moment.weekdaysMin(date.weekday()) : moment.weekdaysMin();
}

export function weekdaysLong(date) {
  return date ? moment.weekdays(date.weekday()) : moment.weekdays();
}

export function daysCount(date) {
  return date.daysInMonth();
}

export function nextMonth(date){
  return date.clone().add(1, 'month');
}

export function prevMonth(date){
  return date.clone().subtract(1, 'month');
}

export function prevYear(date){
}

export function nextYear(date){
}

export function dateLang(sh="en"){
  return moment.locale(sh);
}