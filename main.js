const yaml = require('js-yaml');
const fs = require('fs');
const Time = require('./time');
const Task = require('./task');
let doc = yaml.safeLoad(fs.readFileSync('./tasks.yml'));
let tasks = doc['tasks'];

const startTime = new Time(7, 0);
let time = startTime;
let a = []; // tasks without start time
let b = []; // tasks with start time
let runningTask;

// console.log(tasks);

function prioritizeTask(taskList) {
  for (let i of taskList) {
    a.push(i.duration);
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
  while (tasks.length !== 0) {
  
  }
  let f = time.stringTime();
  runningTask = getTaskByStart(time.stringTime());
  time.addMinute(runningTask.duration);
  let t = time.stringTime();
  printTask(runningTask, f, t);
}

scheduleTask(tasks);
prioritizeTask(tasks);











