class Task {
  constructor(obj) {
    this.id = obj.id;
    this.description = obj.description;
    this.duration = obj.duration;
    this.compatibility = obj.compatibility;
    this.startTime = obj.startTime;
    this.endTime = obj.endTime;
  }
  getId() {
    return this.id;
  }
}

module.exports = Task;
