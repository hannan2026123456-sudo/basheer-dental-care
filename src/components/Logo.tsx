export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <path
        d="M16 4c-3.5 0-5 2-8 2S4 9 4 13c0 6 3 15 6 15 1.5 0 2-3 3-5s1.5-3 3-3 2 1 3 3 1.5 5 3 5c3 0 6-9 6-15 0-4-1-7-4-7s-4.5-2-8-2z"
        fill="currentColor"
      />
      <circle cx="24" cy="8" r="2" fill="#1d8a7a" />
    </svg>
  );
}
