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