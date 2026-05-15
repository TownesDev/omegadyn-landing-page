type IconName = "about" | "book" | "mail" | "quill";

interface BrandIconProps {
  name: IconName;
  className?: string;
}

export function BrandIcon({ name, className }: BrandIconProps) {
  if (name === "about") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={className}
        focusable="false"
      >
        <circle cx="12" cy="8" r="3.2" fill="currentColor" />
        <path
          d="M6.7 18.6c1.1-2.6 3-4 5.3-4s4.2 1.4 5.3 4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "book") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={className}
        focusable="false"
      >
        <path
          d="M4.5 5.4h6.7c1.5 0 2.4.5 3.1 1.4v11.9c-.7-.8-1.6-1.2-3.1-1.2H4.5V5.4Zm15 0h-6.7c-1.5 0-2.4.5-3.1 1.4v11.9c.7-.8 1.6-1.2 3.1-1.2h6.7V5.4Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={className}
        focusable="false"
      >
        <rect
          x="4"
          y="6"
          width="16"
          height="12"
          rx="1.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M5.2 7.1 12 12.7l6.8-5.6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      focusable="false"
    >
      <path
        d="m4 18 3.7-.8L16.8 8l-2.8-2.8-9 9.1L4 18Zm10.7-11.5 2.8 2.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3 4.7 15 3l2.8 2.8-1.7 1.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
