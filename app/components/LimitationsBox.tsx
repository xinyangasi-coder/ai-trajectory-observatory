interface LimitationsBoxProps {
  children: React.ReactNode;
  className?: string;
}

export function LimitationsBox({ children, className = "" }: LimitationsBoxProps) {
  return (
    <div className={`mt-4 p-3.5 bg-amber-50 border border-amber-200 rounded-md text-sm text-amber-900 leading-relaxed ${className}`}>
      <strong className="font-semibold text-amber-950">Limitations: </strong>
      {children}
    </div>
  );
}
