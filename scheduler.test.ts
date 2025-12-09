import { Scheduler, FakeClock } from "./scheduler"

describe("Scheduler", () => {
  let clock: FakeClock
  let scheduler: Scheduler
  beforeEach(() => {
    clock = new FakeClock(new Date("2025-01-01T00:00:00"))
    scheduler = new Scheduler(clock)
  })
  test("should be empty initially", () => {
    expect(scheduler.getTasks()).toHaveLength(0)
  })
  test("should add a task", () => {
    const mockAction = jest.fn()

    scheduler.setTask("Test Task", mockAction)

    const tasks = scheduler.getTasks()
    expect(tasks).toHaveLength(1)
    expect(tasks[0].name).toBe("Test Task")
  })
})
