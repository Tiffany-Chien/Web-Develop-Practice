let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, true, false];


// Classes
class Car {


}

let car: Car = new Car();

type Point = {
  x: number,
  y: number
};
// Object literal 
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};



//Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) functions that returns 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number} = JSON.parse(json);
console.log(coordinates); //{x: 10; y: 20}

let words = ['red', 'green', 'blue'];
let foundWord = false;

for (let i = 0; i < words.length; ++i) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
for (let i = 0; i < words.length; ++i) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

const add = (a: number, b: number) : number => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
};

const multiply = function(a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
}

const forecast = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};


logWeather(forecast);

const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  }
};

const {age}: { age: number } = profile;

const { coords: { lat, lng } }: {coords : {lat: number; lng: number}} = profile;

const carMakers: string[] = [];
const dates = [new Date(), new Date()];

const casByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

const myCar = carMakers.pop;

const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
