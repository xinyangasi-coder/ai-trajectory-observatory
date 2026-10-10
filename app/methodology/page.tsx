import Link from "next/link";

export default function Methodology() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Methodology</h1>
      <p className="mb-6 text-gray-700">
        This page documents how the AI Trajectory Observatory selects, presents, and updates information. The goal is to keep claims traceable, limitations explicit, and revisions evidence-based.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Core Approach</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Prioritize quantitative, publicly documented metrics over narrative summaries.</li>
          <li>Separate measured current capabilities from longer-term possibilities and constraints.</li>
          <li>Record the source, date, and known limitations for every major claim or chart.</li>
          <li>Revise when new evidence appears; document the reason for each change in the Update Log.</li>
        </ul>
        <p className="mt-3 text-sm text-gray-600">
          Analysis of ultimate possibilities and physical/economic constraints will be added in a later phase.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Primary Data Sources</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>
            <strong>Epoch Capabilities Index (ECI)</strong> — Composite capability scale from Epoch AI. Used for relative trend tracking.
          </li>
          <li>
            <strong>METR Time Horizon</strong> — Human-equivalent task duration at which models succeed at a given rate on software engineering tasks.
          </li>
          <li>
            <strong>Selected hard benchmarks</strong> — A small number of evaluations that still differentiate frontier models (see criteria below).
          </li>
        </ul>
        <p className="mt-3 text-sm text-gray-600">
          All charts and numbers link back to the original source where possible.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Hard Benchmark Selection Criteria</h2>
        <p className="mb-3 text-gray-700">
          Benchmarks are included only while they retain useful discriminative power. The following rules guide inclusion and exit:
        </p>
        <h3 className="text-lg font-medium mt-4 mb-2">Inclusion</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Clear score gaps remain between leading frontier models.</li>
          <li>Performance is not yet near the human ceiling or fully saturated.</li>
          <li>The benchmark is publicly documented with reproducible evaluation conditions.</li>
        </ul>
        <h3 className="text-lg font-medium mt-4 mb-2">Exit / Replacement</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>When top models cluster tightly and the benchmark no longer distinguishes them.</li>
          <li>When saturation or contamination makes further gains uninformative.</li>
          <li>Replacement benchmarks are chosen according to the same inclusion criteria and noted in the Update Log.</li>
        </ul>
        <p className="mt-3 text-sm text-gray-600">
          Current placeholders (ARC-AGI series, FrontierMath) will be replaced or confirmed once specific versions and scores are selected.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Known Limitations of Core Metrics</h2>
        <h3 className="text-lg font-medium mt-4 mb-2">Epoch Capabilities Index (ECI)</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Absolute scores are arbitrary; only relative changes and trends are meaningful.</li>
          <li>The index aggregates multiple benchmarks; individual component saturation can affect interpretation.</li>
          <li>Reasoning models and non-reasoning models show different slopes; comparisons should respect this distinction.</li>
        </ul>
        <h3 className="text-lg font-medium mt-4 mb-2">METR Time Horizon</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Based primarily on software engineering and related tasks; does not directly measure open-ended or physical-world performance.</li>
          <li>Current task suite has a practical ceiling; measurements above approximately 16 hours are unreliable.</li>
          <li>Cheating and reliability issues have been observed on longer tasks.</li>
          <li>50% and 80% horizons can differ substantially; both are reported when available.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Update Process</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Key metrics are reviewed at least monthly, or sooner after major model releases.</li>
          <li>Gap analysis and major interpretive judgments are revised quarterly or when material new evidence appears.</li>
          <li>Every material change is recorded in the <Link href="/updates" className="text-blue-600 hover:underline">Update Log</Link> with the date, what changed, and the reason or evidence.</li>
          <li>Placeholder values are clearly labeled until replaced by sourced data.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">What This Site Does Not Do</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>It does not provide investment advice or personalized recommendations.</li>
          <li>It does not claim that reaching any single signpost constitutes AGI.</li>
          <li>It does not treat speculative timelines as measured facts.</li>
        </ul>
      </section>

      <p className="mt-8 text-sm">
        <Link href="/" className="text-blue-600 hover:underline">← Back to homepage</Link>
      </p>
    </main>
  );
}
