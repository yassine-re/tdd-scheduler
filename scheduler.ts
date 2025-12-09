export class Scheduler {
  private tasks: any[] = []

  constructor(private clock: FakeClock) {}

  getTasks() {
    return this.tasks
  }
}

export class FakeClock {
  constructor(private time: Date) {}
  getCurrentTime(): Date {
    return this.time
  }
}
