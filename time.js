class Time {
  constructor (h, m) {
    this.h = h;
    this.m = m;
  }
  getHour() {
    return this.h;
  }
  getMinute() {
    return this.m;
  }
  stringTime() {
    if (this.h.toString().length === 1) this.h = '0' + this.h;
    if (this.m.toString().length === 1) this.m = '0' + this.m;
    return this.h + ':' + this.m;
  }
  printTime() {
    console.log(this.h.toString() + ':' + this.m.toString());
  }
  addMinute(num) {
    this.m = parseInt(this.m);
    this.h = parseInt(this.h);
    
    this.m += num;
    if (this.m === 60) {
      this.h++;
      this.m = 0;
    } else if (this.m > 60) {
      this.h++;
      this.m -= 60;
    }
  }
}

let d = new Time(7, 30);
d.addMinute(40);
// let r = new Time(7, 5);
// console.log(d.stringTime());
// console.log(r.stringTime());
// d.addMinute(30);
// d.printDate();
// d.addMinute(40);
// d.printDate();
// d.addMinute(35);
// d.printDate();


module.exports = Time;
