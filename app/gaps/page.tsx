import Link from "next/link";

const signposts = [
  {
    name: "Software Task Time Horizon",
    current: "50% success on the order of hours to low double-digit hours. Measurements above ~16 hours are unreliable.",
    target: "Reliable completion of 1 day / 1 week of software work",
    measurement: "METR or equivalent methodology",
    linked: "METR Time Horizon",
    limitations: "Current task suite ceiling and reported cheating issues on long tasks.",
  },
  {
    name: "AI R&D Automation",
    current: "Internal lab signals show rising assistance ratios, but far from dominant or autonomous.",
    target: "Autonomous completion of the majority of AI research engineering tasks",
    measurement: "Public disclosures cross-checked with third-party evaluations",
    linked: "None currently strong",
    limitations: "Limited public quantitative data. Currently lacks reliable public measurement of full autonomy.",
  },
  {
    name: "Continual Learning",
    current: "Largely absent; catastrophic forgetting remains common.",
    target: "Reliable accumulation of knowledge from new experience without significant loss of prior capabilities",
    measurement: "Relevant benchmarks and research literature",
    linked: "None currently strong",
    limitations: "Currently lacks reliable public measurement.",
  },
  {
    name: "Long-Horizon Reliability",
    current: "Rapid progress on controlled software tasks; open-ended tasks still prone to failure or cheating.",
    target: "Stable multi-day task completion in realistic open environments",
    measurement: "Agent evaluations and failure-mode analysis",
    linked: "Related to METR",
    limitations: "Most evaluations remain on controlled or self-scoring tasks.",
  },
  {
    name: "Embodied / Physical World Gap",
    current: "Digital task progress far exceeds robotics and real experimental manipulation.",
    target: "Reliable multi-step physical tasks in home or laboratory settings",
    measurement: "Robotics benchmarks and real-world deployment data",
    linked: "None currently strong",
    limitations: "Currently lacks reliable public measurement at scale.",
  },
  {
    name: "Scientific Discovery Capability",
    current: "Strong on existing benchmarks; limited original scientific insight.",
    target: "Ability to propose and verify genuinely new scientific hypotheses or mathematical results",
    measurement: "FrontierMath, unsolved problem resolution rates, and related measures",
    linked: "Hard benchmarks",
    limitations: "Distinguishing genuine discovery from pattern matching remains difficult.",
  },
];

export default function Gaps() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Gaps & Signposts</h1>
      <p className="text-gray-600 mb-8">
        Gaps are tracked via observable signposts rather than abstract percentages. Closing any single signpost does not equal AGI.
      </p>

      <div className="space-y-6">
        {signposts.map((s) => (
          <div key={s.name} className="p-5 border rounded-lg bg-white">
            <h2 className="text-xl font-semibold mb-3">{s.name}</h2>
            <p className="mb-2"><strong>Current status:</strong> {s.current}</p>
            <p className="mb-2"><strong>Target milestone:</strong> {s.target}</p>
            <p className="mb-2"><strong>Measurement approach:</strong> {s.measurement}</p>
            <p className="mb-2"><strong>Linked dashboard metrics:</strong> {s.linked}</p>
            <p className="text-sm text-amber-800 bg-amber-50 p-3 rounded mt-3">
              <strong>Limitations / open questions:</strong> {s.limitations}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-8">
        <Link href="/dashboard" className="text-blue-600 hover:underline">View Capabilities Dashboard →</Link>
      </p>
      <p className="mt-2">
        <Link href="/" className="text-blue-600 hover:underline">← Back to homepage</Link>
      </p>
    </main>
  );
}
