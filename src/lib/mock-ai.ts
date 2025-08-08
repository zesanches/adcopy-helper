export type MockCopy = { id: string; text: string }

const tones = [
  "Bold and punchy",
  "Friendly and upbeat",
  "Concise and direct",
  "Premium and aspirational",
  "Urgent and action-driven",
  "Witty and memorable",
]

const openings = [
  "Stop scrolling:",
  "New:",
  "Heads up:",
  "Big news:",
  "You deserve this:",
  "Ready to upgrade?",
]

const ctAs = [
  "Try it today.",
  "Join now.",
  "Start your free trial.",
  "See the difference.",
  "Level up now.",
  "Get started in minutes.",
]

function pick<T>(arr: T[]) {
  return arr[Math.floor(Math.random() * arr.length)]
}

export async function generateMockCopies(description: string, count = 4): Promise<MockCopy[]> {
  // Simulate network/processing latency
  await new Promise((r) => setTimeout(r, 1200))

  const base = description.trim().replace(/\s+/g, " ").slice(0, 180)
  const variations: MockCopy[] = Array.from({ length: count }).map((_, i) => {
    const tone = pick(tones)
    const opening = pick(openings)
    const cta = pick(ctAs)
    const text = `${opening} ${base}. ${tone}. ${cta}`
    return { id: `copy-${Date.now()}-${i}`, text }
  })
  return variations
}
