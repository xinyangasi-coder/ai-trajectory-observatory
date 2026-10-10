import Link from "next/link";

interface AsOfSourceProps {
  date: string;
  source: string;
  sourceUrl: string;
}

export function AsOfSource({ date, source, sourceUrl }: AsOfSourceProps) {
  return (
    <p className="text-sm text-gray-500 mt-1">
      As of {date} · Source:{" "}
      <a href={sourceUrl} className="underline hover:text-gray-700" target="_blank" rel="noopener noreferrer">
        {source}
      </a>
    </p>
  );
}
