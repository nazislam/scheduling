const yaml = require('js-yaml');
const fs = require('fs');

const startTime = '07:00';
const endTime = '22:00';
let time = '';
let a = [];

let doc = yaml.safeLoad(fs.readFileSync('./tasks.yml'));
let tasks = doc['tasks'];
// console.log(tasks);

function prioritizeTask(taskList) {
  for (let i of taskList) {
    if (i.start === null) {
      a.push(i.duration);
    }
  }
  let isSorted = false;
  while(!isSorted) {
    isSorted = true;
    for (let i = 0; i < a.length-1; i++) {
      if (a[i] > a[i+1]) {
        let b = a[i];
        a[i] = a[i+1];
        a[i+1] = b;
        isSorted = false;
      }
    }
  }
  console.log(a);
}

function scheduleTask(taskArray) {

}


// scheduleTask(tasks);
prioritizeTask(tasks);











