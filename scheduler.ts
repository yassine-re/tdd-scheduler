export interface Clock {
  getCurrentTime(): Date
}

export interface Task {
  name: string
  action: () => void
}
export class Scheduler {
  private tasks: Task[] = []

  constructor(private clock: FakeClock) {}

  getTasks(): Task[] {
    return this.tasks
  }
  setTask(name: string, action: () => void): void {
    this.tasks.push({ name, action })
  }
}

export class FakeClock implements Clock {
  constructor(private time: Date) {}
  getCurrentTime(): Date {
    return this.time
  }
}
