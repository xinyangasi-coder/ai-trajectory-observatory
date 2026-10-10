interface LimitationsBoxProps {
  children: React.ReactNode;
}

export function LimitationsBox({ children }: LimitationsBoxProps) {
  return (
    <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-md text-sm text-amber-900">
      <strong className="font-semibold">Limitations: </strong>
      {children}
    </div>
  );
}
