import { Scheduler, FakeClock } from "./scheduler"

describe("Scheduler", () => {
  test("should be empty initially", () => {
    const clock = new FakeClock(new Date("2025-01-01T00:00:00"))
    const scheduler = new Scheduler(clock)

    expect(scheduler.getTasks()).toHaveLength(0)
  })
})
