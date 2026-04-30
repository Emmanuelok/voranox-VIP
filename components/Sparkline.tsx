type Props = {
  values: number[];
  width?: number;
  height?: number;
  className?: string;
  ariaLabel?: string;
};

export function Sparkline({
  values,
  width = 120,
  height = 28,
  className = "",
  ariaLabel,
}: Props) {
  if (!values || values.length < 2) {
    return (
      <svg
        width={width}
        height={height}
        className={className}
        aria-label={ariaLabel}
      >
        <line
          x1="0"
          x2={width}
          y1={height / 2}
          y2={height / 2}
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="2 3"
          opacity="0.3"
        />
      </svg>
    );
  }

  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const padY = 2;
  const drawH = height - padY * 2;

  const path = values
    .map((v, i) => {
      const x = (i / (values.length - 1)) * width;
      const y = padY + drawH - ((v - min) / range) * drawH;
      return `${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");

  const last = values[values.length - 1];
  const first = values[0];
  const lastX = width;
  const lastY = padY + drawH - ((last - min) / range) * drawH;

  // Build a closed area path for the subtle fill underneath.
  const fillPath = `${path} L ${lastX.toFixed(2)} ${(padY + drawH).toFixed(2)} L 0 ${(padY + drawH).toFixed(2)} Z`;

  return (
    <svg
      width={width}
      height={height}
      className={className}
      aria-label={ariaLabel}
      role="img"
    >
      <path d={fillPath} fill="currentColor" opacity="0.08" />
      <path
        d={path}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={lastX} cy={lastY} r="2" fill="currentColor" />
      <title>
        {first.toFixed(4)} → {last.toFixed(4)}
      </title>
    </svg>
  );
}
