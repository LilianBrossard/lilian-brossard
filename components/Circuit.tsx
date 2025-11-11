export default function Footer() {
  return (
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern
          id="circuit-pattern"
          x="0"
          y="0"
          width="1000"
          height="1000"
          patternUnits="userSpaceOnUse"
        >
          <rect width="1000" height="1000" fill="var(--background)" />
          <path
            d="M50,50 L50,250 L250,250 L250,450 L450,450"
            stroke="var(--background-secondary)"
            strokeWidth="20"
            fill="none"
          />
          <path
            d="M450,450 L650,450 L650,250 L850,250"
            stroke="var(--background-secondary)"
            strokeWidth="20"
            fill="none"
          />
          <path
            d="M250,50 L450,50 L450,250"
            stroke="var(--background-secondary)"
            strokeWidth="20"
            fill="none"
          />
          <path
            d="M-150,450 L50,450 L50,650 L250,650"
            stroke="var(--background-secondary)"
            strokeWidth="20"
            fill="none"
          />
          <path
            d="M450,650 L650,650 L650,850"
            stroke="var(--background-secondary)"
            strokeWidth="20"
            fill="none"
          />
          <circle cx="50" cy="250" r="30" fill="var(--background-secondary)" />
          <circle cx="250" cy="450" r="30" fill="var(--background-secondary)" />
          <circle cx="450" cy="50" r="30" fill="var(--background-secondary)" />
          <circle cx="650" cy="650" r="30" fill="var(--background-secondary)" />
          <rect
            x="200"
            y="400"
            width="100"
            height="100"
            fill="var(--background-secondary)"
          />
          <rect
            x="0"
            y="600"
            width="100"
            height="100"
            fill="var(--background-secondary)"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
    </svg>
  );
}
