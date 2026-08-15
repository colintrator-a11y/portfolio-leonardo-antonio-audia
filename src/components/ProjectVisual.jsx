/**
 * Inline-SVG scene for the one project without a published screenshot.
 * Real screenshots are used everywhere else; this keeps the section complete
 * without an external asset request.
 */

const W = 640
const H = 400

/* Shared light-UI palette so every scene reads as the same product family. */
const C = {
  bg: '#ffffff',
  chrome: '#f5f6f9',
  border: '#e4e7ee',
  hair: '#eef0f5',
  panel: '#f8f9fc',
  barLight: '#e7eaf1',
  barMid: '#ccd3e0',
  barDark: '#aab4c6',
  ink: '#0d1b30',
  muted: '#8a95a6',
  accent: '#1d4ed8',
  accentSoft: '#e4edfc',
  sky: '#0ea5e9',
  green: '#16a34a',
  amber: '#d97706',
  red: '#dc2626',
}

function Defs({ id }) {
  return (
    <defs>
      <linearGradient id={`${id}-brand`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor={C.accent} />
        <stop offset="100%" stopColor={C.sky} />
      </linearGradient>
      <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#fbfcfe" />
      </linearGradient>
    </defs>
  )
}

function BrowserChrome({ id, label }) {
  return (
    <g>
      <rect x="0" y="0" width={W} height={H} rx="14" fill={`url(#${id}-bg)`} />
      <rect x="0.5" y="0.5" width={W - 1} height={H - 1} rx="13.5" fill="none" stroke={C.border} />
      <path d={`M14 0 H${W - 14} A14 14 0 0 1 ${W} 14 V44 H0 V14 A14 14 0 0 1 14 0 Z`} fill={C.chrome} />
      <line x1="0" y1="44" x2={W} y2="44" stroke={C.border} />
      <circle cx="22" cy="22" r="4.5" fill="#e5e8ee" />
      <circle cx="38" cy="22" r="4.5" fill="#e5e8ee" />
      <circle cx="54" cy="22" r="4.5" fill="#e5e8ee" />
      <rect x="76" y="12" width="230" height="20" rx="10" fill={C.bg} stroke={C.border} />
      <text x="90" y="26" fill={C.muted} fontFamily="monospace" fontSize="10">
        {label}
      </text>
    </g>
  )
}

function Automation({ id }) {
  const nodes = [
    { x: 90, y: 130, label: 'Trigger' },
    { x: 250, y: 100, label: 'Validate' },
    { x: 250, y: 210, label: 'Enrich' },
    { x: 410, y: 155, label: 'Approve' },
    { x: 552, y: 155, label: 'Sync' },
  ]

  return (
    <>
      <BrowserChrome id={id} label="automation.platform/workflows" />

      {/* Connectors */}
      {[
        'M132 130 C180 130 190 100 208 100',
        'M132 130 C180 130 190 210 208 210',
        'M292 100 C340 100 350 155 368 155',
        'M292 210 C340 210 350 155 368 155',
        'M452 155 H510',
      ].map((d, i) => (
        <path key={i} d={d} fill="none" stroke={C.barMid} strokeWidth="1.8" strokeDasharray="6 6">
          <animate attributeName="stroke-dashoffset" values="24;0" dur="1.8s" repeatCount="indefinite" />
        </path>
      ))}

      {nodes.map((n, i) => (
        <g key={n.label}>
          <rect
            x={n.x - 42}
            y={n.y - 26}
            width="84"
            height="52"
            rx="10"
            fill={C.bg}
            stroke={i === 3 ? C.accent : C.border}
          />
          <circle cx={n.x} cy={n.y - 6} r="9" fill={i === 3 ? C.accent : C.accentSoft} />
          <text x={n.x} y={n.y + 19} fill={C.ink} fontSize="9" fontFamily="sans-serif" textAnchor="middle">
            {n.label}
          </text>
        </g>
      ))}

      {/* Rule builder */}
      <rect x="16" y="252" width="286" height="132" rx="10" fill={C.panel} stroke={C.border} />
      <text x="34" y="276" fill={C.muted} fontSize="8.5" fontFamily="monospace" letterSpacing="0.08em">
        RULES
      </text>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="32" y={288 + i * 32} width="254" height="24" rx="7" fill={C.bg} stroke={C.hair} />
          <rect x="42" y={297 + i * 32} width="38" height="7" rx="3.5" fill={C.barMid} />
          <rect x="90" y={297 + i * 32} width="26" height="7" rx="3.5" fill={C.accent} fillOpacity="0.55" />
          <rect x="126" y={297 + i * 32} width={110 - i * 22} height="7" rx="3.5" fill={C.barLight} />
          <circle cx="272" cy={300 + i * 32} r="5.5" fill={i === 2 ? C.barLight : C.green} fillOpacity={i === 2 ? 1 : 0.85} />
        </g>
      ))}

      {/* Audit log */}
      <rect x="318" y="252" width="306" height="132" rx="10" fill={C.panel} stroke={C.border} />
      <text x="336" y="276" fill={C.muted} fontSize="8.5" fontFamily="monospace" letterSpacing="0.08em">
        AUDIT LOG
      </text>
      {[
        ['09:04', 'workflow.started', C.accent],
        ['09:04', 'validation.passed', C.green],
        ['09:05', 'approval.granted', C.green],
        ['09:05', 'erp.sync.ok', C.green],
      ].map(([time, event, color], i) => (
        <g key={i}>
          <text x="336" y={296 + i * 22} fill={C.muted} fontSize="9" fontFamily="monospace">
            {time}
          </text>
          <circle cx="384" cy={292 + i * 22} r="3.5" fill={color} />
          <text x="398" y={296 + i * 22} fill={C.ink} fontSize="9.5" fontFamily="monospace">
            {event}
          </text>
        </g>
      ))}
      <rect x="336" y="360" width="272" height="7" rx="3.5" fill={C.barLight} />
      <rect x="336" y="360" width="228" height="7" rx="3.5" fill={`url(#${id}-brand)`} />
    </>
  )
}

const scenes = {
  automation: Automation,
}

/**
 * Falls back to a drawn scene for projects that have no published screenshot.
 * Projects carrying a real screenshot render an <img> in Projects.jsx instead.
 */
export default function ProjectVisual({ variant, title }) {
  const Scene = scenes[variant]
  if (!Scene) return null

  const id = `pv-${variant}`

  return (
    <svg
      className="projectVisual"
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={`Interface diagram for ${title}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <title>{`${title} — process diagram`}</title>
      <Defs id={id} />
      <Scene id={id} />
    </svg>
  )
}
