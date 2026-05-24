type BodomProps = {
  className?: string;
};

export function Bodom({ className }: BodomProps) {
  return (
    <svg
      viewBox="0 0 16 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path d="M8 0 C 14 6 14 18 8 24 C 2 18 2 6 8 0 Z" fill="currentColor" />
    </svg>
  );
}
