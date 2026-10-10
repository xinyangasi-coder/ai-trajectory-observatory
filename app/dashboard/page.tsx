import { AsOfSource } from "../components/AsOfSource";
import { LimitationsBox } from "../components/LimitationsBox";
import { UpdateLink } from "../components/UpdateLink";
import { TrendChart } from "../components/TrendChart";
import Link from "next/link";

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

export default function Dashboard() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Capabilities Dashboard</h1>
      <p className="text-gray-600 mb-8">
        Highest-signal quantitative metrics. Absolute scores are not meaningful in isolation.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Epoch Capabilities Index (ECI)</h2>
        <TrendChart
          series={eciSeries}
          title="ECI Frontier Trend"
          yLabel="ECI"
          note="Illustrative placeholder data, not for quantitative use."
          className="mb-4"
        />
        <p className="text-gray-700 mb-2">
          The ECI frontier has advanced roughly linearly since the introduction of reasoning models. Absolute scores are arbitrary; relative trends and the distinction between reasoning and non-reasoning models are more informative.
        </p>
        <AsOfSource date="October 10, 2026" source="Epoch AI" sourceUrl="https://epoch.ai/benchmarks" />
        <LimitationsBox>
          Absolute ECI scores have no intrinsic meaning. Focus on slopes and relative changes. Reasoning models show a steeper trend than non-reasoning models.
        </LimitationsBox>
        <UpdateLink anchor="eci" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">METR Time Horizon</h2>
        <TrendChart
          series={metrSeries}
          title="METR Time Horizon (log scale)"
          yLabel="Hours"
          logScale
          note="Illustrative placeholder data, not for quantitative use. Log scale used because horizons grow approximately exponentially."
          className="mb-4"
        />
        <p className="text-gray-700 mb-2">
          50% time horizon measures the human expert task duration at which models succeed half the time on software engineering tasks. Recent frontier models reach low double-digit hours, but measurements above approximately 16 hours are unreliable with the current task suite.
        </p>
        <AsOfSource date="September 8, 2026 (Time Horizon 1.1)" source="METR" sourceUrl="https://metr.org/time-horizons/" />
        <LimitationsBox>
          Task suite has a practical ceiling. Cheating and reliability issues have been reported on longer tasks. 80% horizons are substantially shorter than 50% horizons.
        </LimitationsBox>
        <UpdateLink anchor="metr" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Hard Unsaturated Benchmarks</h2>
        <p className="text-gray-700 mb-3">
          Currently tracking a small number of benchmarks that still differentiate frontier models according to the criteria in Methodology (clear score gaps between leading models and not yet near human ceiling).
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="text-left p-2 font-medium">Benchmark</th>
                <th className="text-left p-2 font-medium">Current frontier (approx.)</th>
                <th className="text-left p-2 font-medium">Why still discriminative</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">ARC-AGI-2 / ARC-AGI-3</td>
                <td className="p-2">Low-to-mid double digits</td>
                <td className="p-2">Large gap to human performance on novel visual reasoning</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">FrontierMath (Tier 4 / Erdős)</td>
                <td className="p-2">Low single-digit %</td>
                <td className="p-2">Research-level problems; most remain unsolved by models</td>
              </tr>
            </tbody>
          </table>
        </div>
        <AsOfSource date="October 2026" source="ARC Prize / Epoch AI" sourceUrl="https://arcprize.org/" />
        <LimitationsBox>
          Scores are approximate placeholders. Benchmarks can saturate quickly. These are included while they still differentiate models. Replacement criteria are documented in Methodology.
        </LimitationsBox>
        <UpdateLink anchor="benchmarks" />
      </section>

      <p className="mt-8">
        <Link href="/" className="text-blue-600 hover:underline">← Back to homepage</Link>
      </p>
    </main>
  );
}