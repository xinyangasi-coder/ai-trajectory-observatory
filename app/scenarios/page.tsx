import Link from "next/link";

export default function Scenarios() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-slate-800">Ultimate Possibilities & Scenarios</h1>
      <p className="text-gray-600 mb-8">
        This page examines longer-term possible forms of AI capability using multiple scenarios rather than single-point predictions. Scenarios are linked to observable indicators where possible. All content is provisional and will be revised as new evidence appears. Current version based on publicly available information as of October 2026.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-slate-800">Key Assumptions & Uncertainties</h2>
        <p className="text-gray-700 mb-4">
          Longer-term outcomes depend on several major variables. Current evidence strength is noted where possible.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li><strong>Continual learning & long-term memory</strong> — Whether models can reliably accumulate knowledge from ongoing experience. <span className="text-sm text-gray-500">(Evidence: Low)</span></li>
          <li><strong>Long-horizon reliability</strong> — Whether error accumulation and consistency issues on multi-day tasks can be substantially reduced. <span className="text-sm text-gray-500">(Evidence: Medium)</span></li>
          <li><strong>Physical & energy constraints</strong> — Degree to which power, chips, and infrastructure bottlenecks are mitigated. <span className="text-sm text-gray-500">(Evidence: Medium)</span></li>
          <li><strong>Economic returns</strong> — Whether commercial value continues to support large-scale investment. <span className="text-sm text-gray-500">(Evidence: Medium)</span></li>
          <li><strong>Safety & alignment progress</strong> — Whether reliability and control techniques keep pace with capability growth. <span className="text-sm text-gray-500">(Evidence: Low–Medium)</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-slate-800">Near-to-Medium Term Scenarios (to ~2030)</h2>
        <p className="text-gray-700 mb-4">
          Illustrative scenarios. These are not forecasts. Each includes example observable indicators that could support or weaken it.
        </p>

        <div className="space-y-6">
          <div className="p-5 border border-slate-200 rounded-lg bg-white">
            <h3 className="text-lg font-semibold mb-2 text-slate-900">Continued Rapid Progress</h3>
            <p className="text-sm text-gray-700 mb-2">Capabilities continue advancing at roughly current rates. Software task horizons extend into multi-day range for some tasks, but reliability remains uneven outside controlled settings.</p>
            <p className="text-sm text-gray-700 mb-1"><strong>Example supporting indicators:</strong></p>
            <ul className="list-disc pl-5 text-sm text-gray-700 mb-2">
              <li>METR 50% time horizon continues to lengthen at a similar pace</li>
              <li>ECI frontier trend remains roughly linear</li>
              <li>New hard benchmarks continue to show clear gaps between leading models</li>
            </ul>
            <p className="text-sm text-gray-600"><strong>Key uncertainties:</strong> Sustained algorithmic progress and manageable infrastructure constraints.</p>
          </div>

          <div className="p-5 border border-slate-200 rounded-lg bg-white">
            <h3 className="text-lg font-semibold mb-2 text-slate-900">Acceleration via AI-Assisted R&D</h3>
            <p className="text-sm text-gray-700 mb-2">Models become substantially more effective at automating portions of AI research and engineering, creating a positive feedback loop that accelerates capability growth.</p>
            <p className="text-sm text-gray-700 mb-1"><strong>Example supporting indicators:</strong></p>
            <ul className="list-disc pl-5 text-sm text-gray-700 mb-2">
              <li>Public or third-party evaluations show rising rates of autonomous ML engineering task completion</li>
              <li>Lab disclosures report models contributing to a larger share of research engineering work</li>
              <li>METR-style horizons or related agent benchmarks accelerate beyond recent trends</li>
            </ul>
            <p className="text-sm text-gray-600"><strong>Key uncertainties:</strong> Degree of genuine R&D autonomy and whether gains compound or saturate.</p>
          </div>

          <div className="p-5 border border-slate-200 rounded-lg bg-white">
            <h3 className="text-lg font-semibold mb-2 text-slate-900">Slowdown from Physical or Economic Constraints</h3>
            <p className="text-sm text-gray-700 mb-2">Progress continues but is materially constrained by energy, hardware supply, or diminishing economic returns, leading to slower capability gains than recent trends.</p>
            <p className="text-sm text-gray-700 mb-1"><strong>Example supporting indicators:</strong></p>
            <ul className="list-disc pl-5 text-sm text-gray-700 mb-2">
              <li>Reports of delayed training runs due to power or chip availability</li>
              <li>Slowing growth in frontier training compute or capital expenditure</li>
              <li>Flattening or slower improvement on ECI and METR relative to 2024–2026 trends</li>
            </ul>
            <p className="text-sm text-gray-600"><strong>Key uncertainties:</strong> Severity and persistence of infrastructure and capital bottlenecks.</p>
          </div>

          <div className="p-5 border border-slate-200 rounded-lg bg-white">
            <h3 className="text-lg font-semibold mb-2 text-slate-900">Jagged Progress with Persistent Reliability Limits</h3>
            <p className="text-sm text-gray-700 mb-2">Strong gains continue on certain benchmarks and controlled tasks, while long-horizon reliability, open-ended performance, and physical-world capabilities improve more slowly.</p>
            <p className="text-sm text-gray-700 mb-1"><strong>Example supporting indicators:</strong></p>
            <ul className="list-disc pl-5 text-sm text-gray-700 mb-2">
              <li>Continued improvement on hard benchmarks and controlled software tasks</li>
              <li>Limited progress on open-ended multi-day reliability or embodied tasks</li>
              <li>Persistent gap between benchmark scores and real-world deployment success rates</li>
            </ul>
            <p className="text-sm text-gray-600"><strong>Key uncertainties:</strong> Whether reliability and generalization issues are fundamental or engineering problems.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-slate-800">Longer-Term Possible Forms</h2>
        <p className="text-gray-700 mb-4">
          Possible capability regimes rather than dated predictions. Each depends on progress on specific current gaps.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li><strong>Reliable multi-day to multi-week autonomous software agents</strong> — Primarily depends on Software Task Time Horizon and Long-Horizon Reliability gaps.</li>
          <li><strong>Systems capable of proposing and verifying genuinely novel scientific or mathematical results at scale</strong> — Primarily depends on Scientific Discovery Capability gap.</li>
          <li><strong>Broad automation of substantial portions of knowledge work</strong> — Depends on reliability, task horizon, and economic integration.</li>
          <li><strong>Models with robust continual learning and long-term memory</strong> — Depends on Continual Learning gap.</li>
          <li><strong>Significantly improved physical-world manipulation</strong> — Depends on Embodied / Physical World gap (or continued large gap relative to digital capabilities).</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-slate-800">Relation to Current Gaps</h2>
        <p className="text-gray-700">
          Most longer-term forms depend on substantial progress on one or more of the gaps tracked on the <Link href="/gaps" className="text-blue-600 hover:underline">Gaps & Signposts</Link> page. Physical and infrastructure constraints relevant to several scenarios are summarized on the <Link href="/bottlenecks" className="text-blue-600 hover:underline">Bottlenecks</Link> page. Quantitative anchors remain on the <Link href="/dashboard" className="text-blue-600 hover:underline">Dashboard</Link>.
        </p>
      </section>

      <p className="mt-8 text-sm text-gray-500">
        Major revisions to scenarios will be recorded in the <Link href="/updates" className="text-blue-600 hover:underline">Update Log</Link>.
      </p>

      <p className="mt-6">
        <Link href="/" className="text-blue-600 hover:underline">← Back to homepage</Link>
      </p>
    </main>
  );
}
