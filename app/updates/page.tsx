export default function Updates() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Update Log</h1>
      <p className="text-gray-600 mb-6">
        Key metrics are checked at least once per month (or sooner after major releases). Material changes are recorded here with the date, what changed, and the source or reason.
      </p>

      <div id="2026-10-10-charts" className="mb-6 pb-6 border-b">
        <p className="font-semibold">October 10, 2026 (charts)</p>
        <p className="mt-1">Updated trend charts with denser approximate series based on public data points:</p>
        <ul className="list-disc pl-5 mt-1 text-gray-700">
          <li>ECI: anchored to known points (Claude 3.5 Sonnet ≈130, Opus 5.5 =167) and ~14 pts/year reasoning-era trend.</li>
          <li>METR: denser points including Opus 4.5 (~5.3h), Opus 4.6 (~12h), Mythos early (~17h 50% / ~3.1h 80%).</li>
        </ul>
        <p className="mt-1 text-sm text-gray-500">Charts remain approximate frontiers, not full extracted time series. Sources: Epoch AI, METR Time Horizon 1.1.</p>
      </div>

      <div id="eci" className="mb-6 pb-6 border-b">
        <p className="font-semibold">ECI updates</p>
        <p className="mt-1 text-gray-700">Placeholder entry. Future ECI data revisions will be recorded here with source and reason.</p>
      </div>

      <div id="metr" className="mb-6 pb-6 border-b">
        <p className="font-semibold">METR Time Horizon updates</p>
        <p className="mt-1 text-gray-700">Placeholder entry. Future METR measurement updates will be recorded here with source and reason.</p>
      </div>

      <div id="benchmarks" className="mb-6 pb-6 border-b">
        <p className="font-semibold">Hard benchmark updates</p>
        <p className="mt-1 text-gray-700">Placeholder entry. Changes to selected hard benchmarks (inclusion or replacement) will be recorded here.</p>
      </div>

      <p className="text-sm text-gray-500">Future metric and analysis updates will be recorded here with reasons and evidence.</p>
    </main>
  );
}