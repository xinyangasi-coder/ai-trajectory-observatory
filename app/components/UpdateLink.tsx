import Link from "next/link";

export function UpdateLink({ anchor }: { anchor?: string }) {
  const href = anchor ? `/updates#${anchor}` : "/updates";
  return (
    <p className="mt-3 text-sm">
      <Link href={href} className="text-blue-600 hover:underline">
        View update history →
      </Link>
    </p>
  );
}
