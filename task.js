class Task {
  constructor(id, description, start, duration, compatibility, startTime, endTime) {
    this.id = id;
    this.description = description;
    this.duration = duration;
    this.compatibility = compatibility;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}

module.exports = Task;
