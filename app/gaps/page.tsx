import Link from "next/link";

const signposts = [
  {
    name: "Software Task Time Horizon",
    current: "Frontier models reach ~12–17 hours at 50% success on METR’s software task suite (Time Horizon 1.1, as of Sep 2026). Measurements above ~16 hours are unreliable with the current task suite. 80% horizons are substantially shorter (~1–3 hours).",
    target: "Reliable completion of multi-day or week-long software engineering tasks at high success rates.",
    measurement: "METR Time Horizon methodology (or equivalent third-party agent evaluations on software tasks).",
    linked: "METR Time Horizon (Dashboard)",
    limitations: "Current task suite has a practical ceiling. Cheating and reliability issues have been reported on longer tasks. Domain is limited to software engineering.",
  },
  {
    name: "AI R&D Automation",
    current: "Models can assist with coding, debugging, and some research engineering tasks. Public evaluations and lab signals show rising assistance ratios, but full autonomous completion of novel AI research engineering work remains limited.",
    target: "Autonomous completion of the majority of routine AI research engineering tasks (e.g., implementing and iterating on experiments, debugging training runs) with minimal human intervention.",
    measurement: "Public disclosures from labs, third-party agent benchmarks focused on ML engineering, and evaluations such as those tracking AI R&D automation progress.",
    linked: "None currently strong; related to software task horizon.",
    limitations: "Limited public quantitative data on full autonomy. Most evidence is qualitative or from controlled internal settings.",
  },
  {
    name: "Continual Learning",
    current: "Current frontier models do not reliably accumulate new knowledge from ongoing experience without significant forgetting or the need for full retraining. Catastrophic forgetting remains a known issue.",
    target: "Reliable accumulation of knowledge and skills from new experience or interaction, without substantial loss of prior capabilities.",
    measurement: "Relevant research literature, specialized continual learning benchmarks, and evaluations of models that claim online or incremental learning.",
    linked: "None currently strong.",
    limitations: "Currently lacks reliable public measurement at scale. Most progress remains in research papers rather than deployed systems.",
  },
  {
    name: "Long-Horizon Reliability",
    current: "Rapid progress on controlled software tasks (see METR). Open-ended, multi-step tasks in less constrained environments still show high rates of failure, inconsistency, or cheating.",
    target: "Stable completion of multi-day tasks in realistic, open-ended environments with low failure rates.",
    measurement: "Agent evaluations beyond controlled software suites, failure-mode analysis, and long-running real-world deployment studies.",
    linked: "Related to METR Time Horizon.",
    limitations: "Most rigorous evaluations remain on controlled or self-scoring tasks. Open-ended reliability is harder to measure consistently.",
  },
  {
    name: "Embodied / Physical World Gap",
    current: "Digital and language-based task progress significantly outpaces robotics and real-world physical manipulation. Current robots can perform some structured tasks but lag far behind digital agents in generality and reliability.",
    target: "Reliable multi-step physical tasks in home, laboratory, or industrial settings (e.g., complex assembly, experimental manipulation).",
    measurement: "Robotics benchmarks (e.g., from academic labs and industry), real-world deployment data, and embodied AI evaluations.",
    linked: "None currently strong.",
    limitations: "Currently lacks reliable public measurement at scale. Data is sparse and often from controlled lab environments.",
  },
  {
    name: "Scientific Discovery Capability",
    current: "Strong performance on existing math and science benchmarks (including FrontierMath). Limited demonstrated ability to propose and verify genuinely novel scientific hypotheses or resolve previously unsolved problems at scale.",
    target: "Ability to propose, formalize, and verify genuinely new scientific hypotheses or mathematical results that advance the frontier of knowledge.",
    measurement: "Hard benchmarks such as FrontierMath (especially higher tiers), rates of resolving previously unsolved problems, and expert evaluation of novelty.",
    linked: "Hard Unsaturated Benchmarks (Dashboard).",
    limitations: "Distinguishing genuine discovery from sophisticated pattern matching or memorization remains difficult. Most current success is on known problem distributions.",
  },
];

export default function Gaps() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Gaps & Signposts</h1>
      <p className="text-gray-600 mb-8">
        Gaps are tracked via observable signposts rather than abstract percentages. Closing any single signpost does not equal AGI. Status descriptions are based on publicly available information as of October 2026.
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
