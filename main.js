const yaml = require('js-yaml');
const fs = require('fs');
const Time = require('./time');
const Task = require('./task');
let doc = yaml.safeLoad(fs.readFileSync('./tasks.yml'));
let tasks = doc['tasks'];
let bigList = [];
for (i of tasks) {
  bigList.push(new Task(i));
}

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

function pp(a) {
  let isSorted = false;
  while(!isSorted) {
    isSorted = true;
    for (let i = 0; i < a.length-1; i++) {
      if (a[i].duration > a[i+1].duration) {
        let b = a[i];
        a[i] = a[i+1];
        a[i+1] = b;
        isSorted = false;
      }
    }
  }
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

function deleteTask(task) {
  bigList.splice( bigList.indexOf(task), 1 );
}

function checkShortest(task1, task2) {
  (task1.duration < task2.duration) ? task1.duration : task2.duration;
}

let tn = 0;
function scheduleTask(taskArray) {
  // while (tn < 3) {
  //   let st = time;
  //   let t1 = bigList.shift();
  //   tn++;
  //   let t2 = bigList.shift();
  //   tn++;
  //   let ts = checkShortest(t1, t2);
  //   st.addMinute(ts.duration);
  //   // ts.

  // }
  while (bigList.length !== 0 /*&& tn < 3*/) {
    let q = bigList.shift();
    tn++;
    let y = bigList.shift();
    tn++;
    let oo = (time.stringTime()); // start time
    q.startTime = oo;
    y.startTime = oo;
    // q.endTime = time.addMinute(q.duration);
    time.addMinute(q.duration);
    let rr = (time.stringTime()); // end time
    printTask(q, oo, rr);
    printTask(y, oo, rr);
  }
  // for (task of bigList) {
  //   console.log(task.description + ', ' + task.startTime + '-' + task.endTime);
  // }
}

pp(bigList);
console.log('----');
scheduleTask(tasks);
// prioritizeTask(tasks);

