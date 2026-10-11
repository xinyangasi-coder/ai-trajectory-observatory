import Link from "next/link";

export default function Bottlenecks() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Bottlenecks & Limitations</h1>
      <p className="text-gray-600 mb-8">
        This page collects the main current bottlenecks and limitations that constrain AI capability progress and real-world reliability. It focuses on structural constraints rather than individual model scores. Content is based on publicly available information as of October 2026 and will be revised as evidence changes.
      </p>

      <div className="space-y-8">
        <div className="p-6 border rounded-lg bg-white">
          <div className="flex justify-between items-start mb-3">
            <h2 className="text-xl font-semibold">Reliability & Error Accumulation</h2>
            <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">Evidence: Medium</span>
          </div>
          <p className="text-sm text-gray-800 mb-2">
            On multi-step tasks, small per-step errors can compound. Long-horizon autonomous performance remains unstable outside tightly controlled settings, with elevated rates of failure, inconsistency, or task-specific cheating.
          </p>
          <p className="text-sm text-gray-700"><strong>Primary observations:</strong> METR time horizon data and agent evaluations show clear progress on controlled software tasks, but reliability drops as task length and openness increase.</p>
          <p className="text-sm text-amber-800 bg-amber-50 p-3 rounded mt-3">
            <strong>Limitations:</strong> Most rigorous measurements are still on controlled or self-scoring tasks. Open-ended reliability is harder to quantify consistently.
          </p>
        </div>

        <div className="p-6 border rounded-lg bg-white">
          <div className="flex justify-between items-start mb-3">
            <h2 className="text-xl font-semibold">Evaluation Gaps</h2>
            <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">Evidence: Medium</span>
          </div>
          <p className="text-sm text-gray-800 mb-2">
            Benchmarks saturate quickly and can be optimized for. There is a persistent gap between high benchmark scores and reliable real-world performance, including issues of contamination, distribution shift, and context degradation.
          </p>
          <p className="text-sm text-gray-700"><strong>Primary observations:</strong> Many previously hard benchmarks have been largely saturated. Independent audits and real deployment reports often show higher failure rates than benchmark results suggest.</p>
          <p className="text-sm text-amber-800 bg-amber-50 p-3 rounded mt-3">
            <strong>Limitations:</strong> Systematic comparison between benchmark conditions and real deployment conditions remains incomplete.
          </p>
        </div>

        <div className="p-6 border rounded-lg bg-white">
          <div className="flex justify-between items-start mb-3">
            <h2 className="text-xl font-semibold">Physical & Infrastructure Constraints</h2>
            <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">Evidence: Medium</span>
          </div>
          <p className="text-sm text-gray-800 mb-2">
            Large-scale training and inference face growing constraints around electricity supply, memory bandwidth (memory wall), high-bandwidth memory availability, chip production, and data-center construction timelines.
          </p>
          <p className="text-sm text-gray-700"><strong>Primary observations:</strong> Multiple reports note that power and infrastructure lead times have become material planning constraints for frontier training runs.</p>
          <p className="text-sm text-amber-800 bg-amber-50 p-3 rounded mt-3">
            <strong>Limitations:</strong> Public data on exact bottlenecks for specific labs is limited. Some constraints may be temporary while others are more structural.
          </p>
        </div>

        <div className="p-6 border rounded-lg bg-white">
          <div className="flex justify-between items-start mb-3">
            <h2 className="text-xl font-semibold">Data & Algorithmic Returns</h2>
            <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">Evidence: Low–Medium</span>
          </div>
          <p className="text-sm text-gray-800 mb-2">
            High-quality human-generated text is approaching practical limits for further scaling. Pure scaling shows signs of diminishing returns in some dimensions, increasing reliance on algorithmic improvements, synthetic data, and better training methods.
          </p>
          <p className="text-sm text-gray-700"><strong>Primary observations:</strong> Research literature and lab signals suggest that data quality and algorithmic efficiency are becoming relatively more important than raw scale alone.</p>
          <p className="text-sm text-amber-800 bg-amber-50 p-3 rounded mt-3">
            <strong>Limitations:</strong> The degree and timeline of diminishing returns remain uncertain and are actively debated.
          </p>
        </div>

        <div className="p-6 border rounded-lg bg-white">
          <div className="flex justify-between items-start mb-3">
            <h2 className="text-xl font-semibold">Safety, Alignment & Evaluation–Deployment Gap</h2>
            <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">Evidence: Low–Medium</span>
          </div>
          <p className="text-sm text-gray-800 mb-2">
            There is a growing gap between what can be evaluated in controlled settings and what occurs in real deployment. Alignment and reliability techniques have not consistently kept pace with capability increases in all reported cases.
          </p>
          <p className="text-sm text-gray-700"><strong>Primary observations:</strong> Incident reports and internal evaluations have highlighted cases where models behave differently under deployment conditions than under evaluation conditions.</p>
          <p className="text-sm text-amber-800 bg-amber-50 p-3 rounded mt-3">
            <strong>Limitations:</strong> Public evidence is incomplete. Many relevant evaluations remain internal to labs.
          </p>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-3">Relation to Other Pages</h2>
        <p className="text-gray-700 text-sm">
          These bottlenecks directly affect progress on several items tracked in the <Link href="/gaps" className="text-blue-600 hover:underline">Gaps & Signposts</Link> page, particularly long-horizon reliability, AI R&D automation, and embodied capabilities. They also shape the scenarios described on the <Link href="/scenarios" className="text-blue-600 hover:underline">Scenarios</Link> page.
        </p>
      </section>

      <p className="mt-8 text-sm text-gray-500">
        Material updates to bottleneck assessments will be recorded in the <Link href="/updates" className="text-blue-600 hover:underline">Update Log</Link>.
      </p>

      <p className="mt-6">
        <Link href="/" className="text-blue-600 hover:underline">← Back to homepage</Link>
      </p>
    </main>
  );
}
