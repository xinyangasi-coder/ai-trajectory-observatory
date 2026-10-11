import Link from "next/link";
import { TrendChart } from "./components/TrendChart";
import { AsOfSource } from "./components/AsOfSource";

const eciSeries = [
  {
    name: "Frontier",
    color: "#2563eb",
    data: [
      { label: "2024 Q2", value: 130 },
      { label: "2024 Q4", value: 140 },
      { label: "2025 Q2", value: 148 },
      { label: "2025 Q4", value: 155 },
      { label: "2026 Q2", value: 162 },
      { label: "2026 Q3", value: 166 },
      { label: "2026 Q4", value: 167 },
    ],
  },
];

const metrSeries = [
  {
    name: "50% horizon (hrs)",
    color: "#2563eb",
    data: [
      { label: "2024 Q2", value: 0.2 },
      { label: "2024 Q4", value: 0.6 },
      { label: "2025 Q2", value: 2 },
      { label: "2025 Q4", value: 5.3 },
      { label: "2026 Q1", value: 12 },
      { label: "2026 Q2", value: 17 },
    ],
  },
  {
    name: "80% horizon (hrs)",
    color: "#9333ea",
    data: [
      { label: "2024 Q2", value: 0.03 },
      { label: "2024 Q4", value: 0.1 },
      { label: "2025 Q2", value: 0.4 },
      { label: "2025 Q4", value: 0.8 },
      { label: "2026 Q1", value: 1.2 },
      { label: "2026 Q2", value: 3.1 },
    ],
  },
];

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">AI Trajectory Observatory</h1>
        <p className="mt-3 text-lg text-gray-700">
          A transparent tracker of measured AI capabilities, gaps, and longer-term possibilities.
        </p>
        <p className="mt-2 text-sm">
          <Link href="/methodology" className="text-blue-600 hover:underline">
            Methodology
          </Link>
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Current Status Snapshot</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg bg-gray-50">
            <p className="text-sm text-gray-500">ECI Frontier</p>
            <p className="text-2xl font-bold">167</p>
            <AsOfSource date="Oct 10, 2026" source="Epoch AI" sourceUrl="https://epoch.ai/benchmarks" />
          </div>
          <div className="p-4 border rounded-lg bg-gray-50">
            <p className="text-sm text-gray-500">METR 50% Time Horizon</p>
            <p className="text-2xl font-bold">~17 hrs</p>
            <AsOfSource date="Sep 8, 2026" source="METR (TH 1.1)" sourceUrl="https://metr.org/time-horizons/" />
          </div>
          <div className="p-4 border rounded-lg bg-gray-50">
            <p className="text-sm text-gray-500">Last Material Update</p>
            <p className="text-2xl font-bold">Oct 10</p>
            <AsOfSource date="2026" source="Update Log" sourceUrl="/updates" />
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Primary Trends</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-lg">
            <TrendChart
              series={eciSeries}
              title="ECI Over Time"
              yLabel="ECI"
              note="Approximate frontier trend based on public Epoch AI data (Claude 3.5 Sonnet ≈130, Opus 5.5 =167). Not a full time series."
            />
            <p className="text-xs text-gray-500 mt-2">As of Oct 2026 · Epoch AI. Absolute scores are arbitrary; focus on trends.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <TrendChart
              series={metrSeries}
              title="METR Time Horizon"
              yLabel="Hours"
              logScale
              note="Approximate frontier based on public METR TH 1.1 (Opus 4.6 ~12h, Mythos early ~17h at 50%). Above ~16h unreliable. Not a full series."
            />
            <p className="text-xs text-gray-500 mt-2">As of May 2026 · METR. Measurements above ~16 hours are unreliable with current task suite.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">How This Site Is Organized</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="p-4 border rounded-lg">
            <p className="font-semibold mb-1">Current Capabilities</p>
            <p className="text-gray-600">Quantitative metrics and trends (Dashboard).</p>
          </div>
          <div className="p-4 border rounded-lg">
            <p className="font-semibold mb-1">Gaps & Constraints</p>
            <p className="text-gray-600">Observable distance to key milestones and current bottlenecks.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <p className="font-semibold mb-1">Longer-Term Possibilities</p>
            <p className="text-gray-600">Multiple scenarios linked to observable indicators.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Latest Updates</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="/updates#2026-10-10" className="text-blue-600 hover:underline">
              Oct 10, 2026 — Initial page structure and placeholder data
            </Link>
          </li>
        </ul>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link href="/dashboard" className="p-6 border rounded-lg hover:bg-gray-50">
          <h3 className="font-semibold">Capabilities Dashboard →</h3>
          <p className="text-sm text-gray-600 mt-1">Quantitative metrics with sources and limitations</p>
        </Link>
        <Link href="/gaps" className="p-6 border rounded-lg hover:bg-gray-50">
          <h3 className="font-semibold">Gaps & Signposts →</h3>
          <p className="text-sm text-gray-600 mt-1">Observable milestones versus current status</p>
        </Link>
        <Link href="/scenarios" className="p-6 border rounded-lg hover:bg-gray-50">
          <h3 className="font-semibold">Scenarios →</h3>
          <p className="text-sm text-gray-600 mt-1">Longer-term possibilities and key uncertainties</p>
        </Link>
        <Link href="/bottlenecks" className="p-6 border rounded-lg hover:bg-gray-50">
          <h3 className="font-semibold">Bottlenecks →</h3>
          <p className="text-sm text-gray-600 mt-1">Current structural constraints and limitations</p>
        </Link>
      </section>

      <footer className="mt-12 text-xs text-gray-500">
        This platform revises based on evidence.
      </footer>
    </main>
  );
}