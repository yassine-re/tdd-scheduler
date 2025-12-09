export interface Clock {
  getCurrentTime(): Date
}

export interface Task {
  name: string
}
export class Scheduler {
  private tasks: Task[] = []

  constructor(private clock: FakeClock) {}

  getTasks(): Task[] {
    return this.tasks
  }
}

export class FakeClock implements Clock {
  constructor(private time: Date) {}
  getCurrentTime(): Date {
    return this.time
  }
}
