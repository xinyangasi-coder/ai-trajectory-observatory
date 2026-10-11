import Link from "next/link";

interface AsOfSourceProps {
  date: string;
  source: string;
  sourceUrl: string;
  className?: string;
}

export function AsOfSource({ date, source, sourceUrl, className = "" }: AsOfSourceProps) {
  return (
    <p className={`text-xs text-gray-500 mt-1.5 leading-relaxed ${className}`}>
      <span className="text-gray-400">As of</span> {date}
      <span className="mx-1.5 text-gray-300">·</span>
      <span className="text-gray-400">Source:</span>{" "}
      <a
        href={sourceUrl}
        className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 underline-offset-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        {source}
      </a>
    </p>
  );
}
