const yaml = require('js-yaml');
const fs = require('fs');
const Time = require('./time');

const startTime = new Time(7, 0);
const endTime = new Time(22, 0);
let time = startTime;
let a = []; // tasks without start time
let b = []; // tasks with start time
let runningTask;

let doc = yaml.safeLoad(fs.readFileSync('./tasks.yml'));
let tasks = doc['tasks'];
// console.log(tasks);

function prioritizeTask(taskList) {
  for (let i of taskList) {
    if (i.start === null) {
      a.push(i.duration);
    } else {
      b.push(i);
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
  console.log(b);
}

function getTaskByStart(startTime) {
  for (task of tasks) {
    if (startTime === task.start)
      return task;
  }
}

function printTask(task, startTime, endTime) {
  console.log(task.description + ', ' + startTime + '-' + endTime);
}

function scheduleTask(taskArray) {
  console.log(time.stringTime());
  let f = time.stringTime();
  runningTask = getTaskByStart(time.stringTime());
  console.log(runningTask.description);
  time.addMinute(runningTask.duration);
  let t = time.stringTime();
  console.log(time.stringTime());
  printTask(runningTask, f, t);


  /*
  while (time !== endTime ) {
    runningTask = getTaskByStart(time);
    // printTask(runningTask, sTime, eTime);
  }
  */
}

scheduleTask(tasks);
// prioritizeTask(tasks);











