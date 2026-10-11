import Link from "next/link";

const evidenceCards = [
  {
    name: "Software Task Time Horizon",
    primaryMetric: "~12–17 hours at 50% success (METR Time Horizon 1.1)",
    currentStatus: "Frontier models reach roughly 12–17 hours of human-expert task duration at 50% success on METR’s software task suite. 80% horizons are substantially shorter (roughly 1–3 hours). Measurements above ~16 hours are unreliable with the current task suite.",
    targetMilestone: "Reliable completion of multi-day or week-long software engineering tasks at high success rates.",
    evidenceStrength: "Medium-High",
    keySources: "METR Time Horizon 1.1 (last updated Sep 8, 2026)",
    linkedMetrics: "METR Time Horizon (Dashboard)",
    relatedExamples: "Controlled software engineering tasks show clear progress; open-ended longer tasks still show elevated failure or cheating rates.",
    limitations: "Task suite has a practical ceiling. Cheating and reliability issues reported on longer tasks. Limited to software engineering domain.",
  },
  {
    name: "AI R&D Automation",
    primaryMetric: "Rising assistance ratios; full autonomy still limited",
    currentStatus: "Models can assist with coding, debugging, and some research engineering tasks. Public evaluations and lab signals indicate rising assistance ratios, but full autonomous completion of novel AI research engineering work remains limited.",
    targetMilestone: "Autonomous completion of the majority of routine AI research engineering tasks with minimal human intervention.",
    evidenceStrength: "Medium",
    keySources: "Lab disclosures, third-party ML engineering agent benchmarks",
    linkedMetrics: "Related to METR Time Horizon",
    relatedExamples: "Internal reports of models contributing to training and evaluation pipelines; few public demonstrations of end-to-end novel research autonomy.",
    limitations: "Limited public quantitative data on full autonomy. Most evidence is qualitative or from controlled internal settings.",
  },
  {
    name: "Continual Learning",
    primaryMetric: "No reliable public demonstration at scale",
    currentStatus: "Current frontier models do not reliably accumulate new knowledge from ongoing experience without significant forgetting or full retraining. Catastrophic forgetting remains a known issue.",
    targetMilestone: "Reliable accumulation of knowledge and skills from new experience without substantial loss of prior capabilities.",
    evidenceStrength: "Low",
    keySources: "Research literature on continual learning and catastrophic forgetting",
    linkedMetrics: "None currently strong",
    relatedExamples: "Most progress remains in research papers rather than deployed systems.",
    limitations: "Currently lacks reliable public measurement at scale.",
  },
  {
    name: "Long-Horizon Reliability",
    primaryMetric: "Strong on controlled tasks; weak on open-ended multi-day work",
    currentStatus: "Rapid progress on controlled software tasks. Open-ended, multi-step tasks in less constrained environments still show high rates of failure, inconsistency, or cheating.",
    targetMilestone: "Stable completion of multi-day tasks in realistic, open-ended environments with low failure rates.",
    evidenceStrength: "Medium",
    keySources: "METR evaluations, agent failure-mode studies",
    linkedMetrics: "Related to METR Time Horizon",
    relatedExamples: "Success rates drop and error accumulation increases as task length and openness grow.",
    limitations: "Most rigorous evaluations remain on controlled or self-scoring tasks. Open-ended reliability is harder to measure consistently.",
  },
  {
    name: "Embodied / Physical World Gap",
    primaryMetric: "Digital progress far ahead of real-world robotics",
    currentStatus: "Digital and language-based task progress significantly outpaces robotics and real-world physical manipulation. Current robots can perform some structured tasks but lag far behind digital agents in generality and reliability.",
    targetMilestone: "Reliable multi-step physical tasks in home, laboratory, or industrial settings.",
    evidenceStrength: "Low-Medium",
    keySources: "Robotics benchmarks, embodied AI evaluations, real-world deployment reports",
    linkedMetrics: "None currently strong",
    relatedExamples: "Structured lab tasks show progress; unstructured real-world success rates remain low.",
    limitations: "Sparse public data at scale. Most results come from controlled lab environments.",
  },
  {
    name: "Scientific Discovery Capability",
    primaryMetric: "Strong on existing benchmarks; limited novel discovery",
    currentStatus: "Strong performance on existing math and science benchmarks (including FrontierMath). Limited demonstrated ability to propose and verify genuinely novel scientific hypotheses or resolve previously unsolved problems at scale.",
    targetMilestone: "Ability to propose, formalize, and verify genuinely new scientific hypotheses or mathematical results that advance the frontier of knowledge.",
    evidenceStrength: "Medium",
    keySources: "FrontierMath, other hard benchmarks, expert evaluations of novelty",
    linkedMetrics: "Hard Unsaturated Benchmarks (Dashboard)",
    relatedExamples: "High scores on known problem distributions; rare verified cases of genuine novelty.",
    limitations: "Distinguishing genuine discovery from sophisticated pattern matching or memorization remains difficult.",
  },
];

export default function Gaps() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Gaps & Signposts</h1>
      <p className="text-gray-600 mb-8">
        Gaps are tracked via structured evidence cards rather than abstract percentages. Closing any single signpost does not equal AGI. Descriptions are based on publicly available information as of October 2026.
      </p>

      <div className="space-y-8">
        {evidenceCards.map((card) => (
          <div key={card.name} className="p-6 border rounded-lg bg-white shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-xl font-semibold">{card.name}</h2>
              <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                Evidence: {card.evidenceStrength}
              </span>
            </div>

            <div className="space-y-2 text-sm text-gray-800">
              <p><strong>Primary metric:</strong> {card.primaryMetric}</p>
              <p><strong>Current status:</strong> {card.currentStatus}</p>
              <p><strong>Target milestone:</strong> {card.targetMilestone}</p>
              <p><strong>Key sources:</strong> {card.keySources}</p>
              <p><strong>Linked dashboard metrics:</strong> {card.linkedMetrics}</p>
              <p><strong>Related examples:</strong> {card.relatedExamples}</p>
            </div>

            <p className="text-sm text-amber-800 bg-amber-50 p-3 rounded mt-4">
              <strong>Limitations / open questions:</strong> {card.limitations}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-10">
        <Link href="/dashboard" className="text-blue-600 hover:underline">View Capabilities Dashboard →</Link>
      </p>
      <p className="mt-2">
        <Link href="/" className="text-blue-600 hover:underline">← Back to homepage</Link>
      </p>
    </main>
  );
}
