import { Scheduler, FakeClock } from "./scheduler"

describe("Scheduler", () => {
  test("should be empty initially", () => {
    const clock = new FakeClock(new Date("2025-01-01T00:00:00"))
    const scheduler = new Scheduler(clock)

    expect(scheduler.getTasks()).toHaveLength(0)
  })
  test("should add a task", () => {
    const clock = new FakeClock(new Date("2025-01-01T00:00:00"))
    const scheduler = new Scheduler(clock)
    const mockAction = jest.fn()

    scheduler.setTask("Test Task", mockAction)

    const tasks = scheduler.getTasks()
    expect(tasks).toHaveLength(1)
    expect(tasks[0].name).toBe("Test Task")
  })
})
