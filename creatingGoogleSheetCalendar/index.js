const APP = SpreadsheetApp;
const ACTIVE_SHEET = APP.getActiveSpreadsheet().getActiveSheet();
const SHEET_BY_NAME = APP.getActiveSpreadsheet().getSheetByName('Аркуш1');

//creating table header
function creatingHeadPart(){
 const HEAD_DATA = ['Date US','Date UA','Day US','Day UA', 'Day', 'Month', 'Year', 'Time']; 
 for(let i = 0; i < 8; i++){
   ACTIVE_SHEET.getRange(1, i + 1).setValue(HEAD_DATA[i]);
 }
}

// main function that fills table with data
function setData(){
 let startDay = 10, month = 8, year = 2020;
 const END_DAY = 17;
 let timeCounter = 9; 
 const COLUMN_COUNT = 8;
 
 for(let i = 2; true; i++) {
   let date = new Date(year,month - 1,startDay);
   for(let j = 1; j <= COLUMN_COUNT; j++){
     switch(j){
       case 1:
         ACTIVE_SHEET.getRange(i,j).setValue(formatDate(date, j));
         break;
       case 2: 
         ACTIVE_SHEET.getRange(i,j).setValue(formatDate(date, j));
         break;
       case 3:
         ACTIVE_SHEET.getRange(i,j).setValue(getWeekDay(date, j));
         break;
       case 4:
         ACTIVE_SHEET.getRange(i,j).setValue(getWeekDay(date, j));
         break;
       case 5:
         ACTIVE_SHEET.getRange(i,j).setValue(dayMonthYear(date, j));
         break;
       case 6:
         ACTIVE_SHEET.getRange(i,j).setValue(dayMonthYear(date, j));
         break;
       case 7:
         ACTIVE_SHEET.getRange(i,j).setValue(dayMonthYear(date, j));
         break;
       case 8:
         ACTIVE_SHEET.getRange(i,j).setValue(showTime(timeCounter));
         break;
     }
   }
   if(timeCounter == 21){
       timeCounter = 8;
       startDay++;
     }
   timeCounter++;
   if(startDay == END_DAY) break;
 } 
}

//formatting date to two different formats
function formatDate(date, flag) {
 let dd = date.getDate();
 let mm = date.getMonth() + 1;
 let yy = date.getFullYear();
 
 if (dd < 10) dd = '0' + dd;
 if (mm < 10) mm = '0' + mm;
 if (yy < 10) yy = '0' + yy;
 if(flag == 1) return mm + '.' + dd + '.' +  yy;
 else if( flag == 2) return dd + '.' + mm + '.' + yy;
}

//choose day of the week
function getWeekDay(date, flag) {
 let daysUS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 let daysUA = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота'];
 
 if(flag == 3) return daysUS[date.getDay()];
 else if(flag == 4) return daysUA[date.getDay()]; 
}

//showing day, month and year columns
function dayMonthYear(date, flag){
 let stringDate = formatDate(date, 2);
 let data = stringDate.split('.');
 let tempData, tempData2;
 if(data[0] < 10){
   tempData = data[0].toString();
   data[0] = tempData[1];
 }
 if(data[1] < 10){
   tempData2 = data[1].toString();
   data[1] = tempData2[1];
 }
 switch(flag){
   case 5:
    return data[0]; 
    break;
   case 6:
    return data[1]; 
    break;
   case 7:
    return data[2]; 
    break;   
 }   
}

//showing last column with time
function showTime(counter){
 return counter + ':' + '00' + ':' + '00';
}

//clear table
function clearSheet(){
 SHEET_BY_NAME.getRange('A1:Z2000').clearContent();
}