// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(){
    return drivers.slice(0,2);
}
const returnLastTwoDrivers = function(){
    return drivers.slice(2,4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(fare = 5,number = 5){
    return function fareMultiplier(){
        return fare * number;
        };
    };

function fareDoubler(fare) {
    return fare * 2;
} 

function fareTripler(fare) {
    return fare * 3;
}

const selectDifferentDrivers = (array1, parameter2) => {
    return parameter2(array1);
}