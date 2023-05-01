//UC1
const IS_ABSENT=0
let empCheck = Math.floor(Math.random()*10) %2;
if(empCheck == IS_ABSENT){
    console.log("Employee is ABSENT");
    return;
}
else{
    console.log("Employee is PRESENT");
}
//UC2
const FULL_TIME=0, PART_TIME=1,ABSENT=2,PART_TIME_HR=4,FULL_TIME_HR=8,WAGE_PER_HR=20;
let empHR=0;
checkemp=Math.floor(Math.random()*3);
switch(checkemp){
    case FULL_TIME:
        checkemp=PART_TIME_HR;
        break;
        case PART_TIME:
            checkemp=FULL_TIME_HR;
            break;
            case ABSENT:
                checkemp=empHR;                
}
let empWage=checkemp*WAGE_PER_HR;
console.log("Employee Wage = "+empWage);
//Functionsws
// 'use strict';
// function askDefault(yes, no, theQue='Can you Answer?'){
//     if(question(theQue)) yes();
//     else no();
// }
// function ask(theQue,...others){
//     if(question(theQue)) others[0]()
//     else others[1]();
// }
// function showOk(){
//     alert ("You agreed.");
// }
// function showCancel(){
//     alert("You cancelled the execution.");
// }
// let question=function(theQue){
//     return confirm(theQue);
// };
// ask("Do you agree?", showOk, showCancel);
// askDefault(showOk,showCancel);
//UC3
function getWorkingHours(empCheck){
    switch(empCheck){
        case PART_TIME:
            return PART_TIME_HR;
            case FULL_TIME:
                return FULL_TIME_HR;
                default:
                    return 0;    
    }
}
 let empHRS=0;
let employeeCheck=Math.floor(Math.random()*10) %3;
empHRS=getWorkingHours(employeeCheck);
 employeWage=empHR * WAGE_PER_HR;
console.log("Employee Wage: "+employeWage);
//UC4
const NUMOF_WORKING_HRS=20;
empHR=0;
for(let day=0; day < NUMOF_WORKING_HRS; day++){
    let empCheck=Math.floor(Math.random() *10) %3;
    empHRS+=getWorkingHours(empCheck);
}
empWage=empHRS * WAGE_PER_HR;
console.log("Total Hrs: "+empHRS+" Emp Wage: "+empWage)
//UC5
const MAX_HRS_IN_MONTH =160;
const NUM_OF_WORKING_DAYS=20;
let totalEmpHrs = 0;
let totalWorkingDays=0;
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck =Math.floor(Math.random() * 10)%3
    totalEmpHrs += getWorkingHours(empCheck);
}
empWage=totalEmpHrs * WAGE_PER_HR;
console.log("UC5 - Total Days: " + totalWorkingDays + " Total Hrs: "+totalEmpHrs+" Emp Wage: "+empWage);
//UC6 Arrays
function calDailyWage(empHRS) {
    return empHRS*WAGE_PER_HR;
}
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck=Math.floor(Math.random() * 10) %3;
    let empHRS=getWorkingHours(empCheck);
    totalEmpHrs+=empHRS;
    empDailyWageArr.push(calDailyWage(empHRS));
}
let empWag=calDailyWage(totalEmpHrs);
console.log("UC6 - Total Days: " + totalWorkingDays+" Taotal Hrs: "+totalEmpHrs+" Emp Wage"+empWag);
//UC 7A Array Helper functions
let totEmpWage=0;
function sum(dailyWage){
    totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum)
console.log("UC7A - Total Days: " +totalWorkingDays+" Total Hrs: "+totalEmpHrs +" Emp Wage: "+totEmpWage);
function totalWages(totalWage, dailyWage){
    return totalWage + dailyWage;
}
console.log("UC7A - Emp Wage with resuce: "+empDailyWageArr.reduce(totalWages,0));
//UC 7B
let dailyCntr=0;
function mapDayWithWage(dailyWage){
    dailyCntr+ " = "+dailyWage
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B-Daily Wage Map");
console.log(mapDayWithWageArr);
//UC 7C
function fulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C - Daily Wage Filter when Fulltime Wage Earned");
console.log(fullDayWageArr);
//UC 7D
function findFulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC 7D - First time Fulltime Wage was earned on Day: "+mapDayWithWageArr.find(findFulltimeWage));
//UC 7E
function isFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC 7E - Check All Element have Full Time Wage: "+fullDayWageArr.every(isFullTimeWage));
//UC 7F
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("UC 7F - Check If Any Part Time Wage: "+mapDayWithWageArr.some(isAnyPartTimeWage));
//UC 7G
function totalDaysWorked(numOfDays, dailyWage){
    if (dailyWage > 0)
    return numOfDays+1;
    return numOfDays;
}
console.log("UC 7G - Num of Days Emp Worked: "+empDailyWageArr.redice(totalDaysWorked,0));
//UC8
let empDailyWageArr=new Array();
let empDailyWageMap=new Map();
function calcDailyWage(empHRS){
    return empHRS * WAGE_PER_HR;
}
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck=Math.floor(Math.random()*10)%3;
    let empHRS=getWorkingHours(empCheck);
    totalEmpHrs+=empHRS;
    empDailyWageArr.push(calDailyWage(empHRS));
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHRS));
}
console.log(empDailyWageMap);
function totalWages(totalWage, dailyWage){
    return totalWage + dailyWage;
}
console.log("UC8-Emp Map totalHrs: "+Array.from(empDailyWageMap.values()).reduce(totEmpWage, 0));
//UC9
const findTotal=(totalVal, dailyVal) => {
    return  totalVal + dailyVal;
}
let count=0;
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
console.log("UC9A - Emp Wage with Arrow: "+" Total Hours: "+totalHours+" Total Wages: "+totalSalary);
let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach( (value, key, map) => {
    if (value == 8) fullWorkingDays.push(key);
    else if (value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full Working Days: "+ fullWorkingDays);
console.log("Part Time Working Days: "+partWorkingDays);
console.log("Non Working Days: "+nonWorkingDays);
//UC10
totalEmpHrs =0;
totalWorkingDays=0;
empDailyHrsAndWageArr = new Array();
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    let empHRS = getWorkingHours(empCheck);
    totalEmpHrs += empHRS;
    empDailyHrsAndWageArr.push(
        {
            dayNum:totalDaysWorked,
            dailyHours:empHRS,
            dailyWage(){
                return '\nDay'+this.dayNum+'=> Working Hours is '+this.dailyHours+'And Wage Earned = '+this.dailyWage
            },
        });
}
console.log("UC 10 - Daily Hous Worked and Wage Earned: "+empDailyHrsAndWageArr);
//UC11 
//UC11A
let totalwages = empDailywageandHrsArr.filter(dailywageandhrs=>dailywageandhrs.dailywage>0).reduce((totalWage,dailywageandhrs)=>totalWage += dailywageandhrs.dailywage,0);
let totalhrs = empDailywageandHrsArr.filter(dailywageandhrs=>dailywageandhrs.dailywage>0).reduce((totalhr,dailywageandhrs)=>totalhr += dailywageandhrs.dailywage,0);
console.log("UC 11A Total Wages"+totalwages+" Total Hrs ----->"+totalhrs);
let d=0;
function mapDaywithWage1(dailywage)
{
    d++;
    return dailyCntr + " = "+dailywage;
}
let mapDaywage = empDailywageandHrsArr.map(mapDaywithWage1);
console.log("Daily Wage Map");
console.log(mapDaywage);
//UC11C
empDailywageandHrsArr.filter(dailywageandhrs=>dailywageandhrs.dailyhrs==8).forEach(dailywageandhrs=>console.log(dailywageandhrs.toString()));
//UC11D
empDailywageandHrsArr.find(dailywageandhrs=>dailywageandhrs.dailyhrs==8).forEach(dailywageandhrs=>console.log(dailywageandhrs.toString()));
//UC11D
//UC11E
let flag1=empDailywageandHrsArr.every(dailywageandhrs=>dailywageandhrs.dailywage==160);
console.log(flag1);
//UC11F
let flag2=empDailywageandHrsArr.some(dailywageandhrs=>dailywageandhrs.dailywage==80);
console.log(flag2);
//UC11G
let totalworkedday = empDailywageandHrsArr.filter(dailywageandhrs=>dailywageandhrs.dailywage>0).reduce((numday,dailywageandhrs)=>numday += dailywageandhrs.dailywage,0);
console.log(totalworkedday);


