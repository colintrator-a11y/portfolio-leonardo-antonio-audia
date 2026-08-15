/**
 * Inline-SVG scenes for entries with no published screenshot: the Pipefy
 * engagement, and the two capability examples. Delivered client projects use
 * their real screenshots instead.
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

function Chatbot({ id }) {
  return (
    <>
      <BrowserChrome id={id} label="support.assistant/console" />

      {/* Sidebar */}
      <rect x="16" y="60" width="150" height="324" rx="10" fill={C.panel} stroke={C.border} />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <circle cx="38" cy={90 + i * 46} r="11" fill={i === 0 ? C.accentSoft : C.barLight} />
          <rect
            x="56"
            y={83 + i * 46}
            width={i === 0 ? 84 : 70}
            height="7"
            rx="3.5"
            fill={i === 0 ? `url(#${id}-brand)` : C.barMid}
          />
          <rect x="56" y={95 + i * 46} width="56" height="5" rx="2.5" fill={C.barLight} />
        </g>
      ))}

      {/* Conversation */}
      <rect x="180" y="60" width="292" height="324" rx="10" fill={C.bg} stroke={C.border} />
      <rect x="196" y="78" width="180" height="46" rx="10" fill={C.panel} />
      <rect x="210" y="94" width="130" height="6" rx="3" fill={C.barMid} />
      <rect x="210" y="106" width="92" height="6" rx="3" fill={C.barLight} />

      <rect x="276" y="138" width="180" height="60" rx="10" fill={C.accentSoft} />
      <rect x="292" y="154" width="146" height="6" rx="3" fill="#a9c5f2" />
      <rect x="292" y="167" width="120" height="6" rx="3" fill="#bcd2f5" />
      <rect x="292" y="180" width="86" height="6" rx="3" fill="#cadcf8" />

      <rect x="196" y="212" width="200" height="60" rx="10" fill={C.panel} />
      <rect x="210" y="228" width="164" height="6" rx="3" fill={C.barMid} />
      <rect x="210" y="241" width="132" height="6" rx="3" fill={C.barLight} />
      <rect x="210" y="254" width="98" height="6" rx="3" fill={C.barLight} />

      {/* Typing indicator */}
      <rect x="196" y="286" width="74" height="26" rx="13" fill={C.panel} />
      {[214, 228, 242].map((cx, i) => (
        <circle key={cx} cx={cx} cy="299" r="3.5" fill={C.accent}>
          <animate
            attributeName="opacity"
            values="0.25;1;0.25"
            dur="1.2s"
            begin={`${i * 0.2}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}

      <rect x="196" y="330" width="260" height="34" rx="17" fill={C.bg} stroke={C.border} />
      <rect x="212" y="344" width="120" height="6" rx="3" fill={C.barLight} />
      <circle cx="436" cy="347" r="12" fill={`url(#${id}-brand)`} />

      {/* Insight panel */}
      <rect x="486" y="60" width="138" height="150" rx="10" fill={C.panel} stroke={C.border} />
      <text x="502" y="84" fill={C.muted} fontSize="8.5" fontFamily="monospace" letterSpacing="0.08em">
        RESOLUTION RATE
      </text>
      <text x="502" y="118" fill={C.ink} fontSize="27" fontWeight="600" fontFamily="Georgia, serif">
        86%
      </text>
      <rect x="502" y="132" width="106" height="6" rx="3" fill={C.barLight} />
      <rect x="502" y="132" width="91" height="6" rx="3" fill={`url(#${id}-brand)`} />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="502" y={154 + i * 18} width={70 - i * 14} height="5" rx="2.5" fill={C.barLight} />
          <rect x="588" y={154 + i * 18} width="20" height="5" rx="2.5" fill={C.barMid} />
        </g>
      ))}

      <rect x="486" y="224" width="138" height="160" rx="10" fill={C.panel} stroke={C.border} />
      <text x="502" y="248" fill={C.muted} fontSize="8.5" fontFamily="monospace" letterSpacing="0.08em">
        INTENTS
      </text>
      {[62, 48, 71, 35, 55].map((v, i) => (
        <g key={i}>
          <rect x="502" y={262 + i * 22} width="106" height="8" rx="4" fill={C.barLight} />
          <rect
            x="502"
            y={262 + i * 22}
            width={v * 1.06}
            height="8"
            rx="4"
            fill={`url(#${id}-brand)`}
            opacity={0.9 - i * 0.12}
          />
        </g>
      ))}
    </>
  )
}

/* Scheduled Python job: sources in, transform, report out. */
function PythonAutomation({ id }) {
  const log = [
    ['09:00:01', 'scheduler', 'job.start  sync_daily', C.accent],
    ['09:00:04', 'extract  ', 'api.orders        1,284 rows', C.ink],
    ['09:00:09', 'extract  ', 'sheets.pricing      312 rows', C.ink],
    ['09:00:15', 'transform', 'validate + normalise', C.ink],
    ['09:00:21', 'load     ', 'warehouse.upsert  1,596', C.green],
    ['09:00:23', 'notify   ', 'report.emailed', C.green],
  ]

  return (
    <>
      <BrowserChrome id={id} label="automation/jobs/sync_daily.py" />

      {/* Pipeline */}
      {[
        { x: 92, label: 'Sources' },
        { x: 246, label: 'Extract' },
        { x: 400, label: 'Transform' },
        { x: 554, label: 'Load' },
      ].map((n, i) => (
        <g key={n.label}>
          <rect x={n.x - 54} y="72" width="108" height="46" rx="10" fill={C.bg} stroke={C.border} />
          <circle cx={n.x} cy="90" r="7" fill={i === 3 ? C.green : C.accentSoft} />
          <text x={n.x} y="112" fill={C.ink} fontSize="9" fontFamily="sans-serif" textAnchor="middle">
            {n.label}
          </text>
          {i < 3 ? (
            <path
              d={`M${n.x + 56} 95 H${n.x + 136}`}
              stroke={C.barMid}
              strokeWidth="1.8"
              strokeDasharray="5 5"
              fill="none"
            >
              <animate attributeName="stroke-dashoffset" values="20;0" dur="1.5s" repeatCount="indefinite" />
            </path>
          ) : null}
        </g>
      ))}

      {/* Schedule panel */}
      <rect x="16" y="140" width="180" height="120" rx="10" fill={C.panel} stroke={C.border} />
      <text x="34" y="164" fill={C.muted} fontSize="8.5" fontFamily="monospace" letterSpacing="0.08em">
        SCHEDULE
      </text>
      <text x="34" y="190" fill={C.accent} fontSize="12" fontFamily="monospace">
        0 9 * * *
      </text>
      <text x="34" y="212" fill={C.muted} fontSize="9" fontFamily="sans-serif">
        Daily at 09:00
      </text>
      <rect x="34" y="228" width="144" height="6" rx="3" fill={C.barLight} />
      <rect x="34" y="228" width="108" height="6" rx="3" fill={`url(#${id}-brand)`} />
      <text x="34" y="250" fill={C.muted} fontSize="8.5" fontFamily="monospace">
        NEXT RUN 22h 14m
      </text>

      {/* Run log */}
      <rect x="212" y="140" width="412" height="120" rx="10" fill={C.panel} stroke={C.border} />
      <text x="230" y="164" fill={C.muted} fontSize="8.5" fontFamily="monospace" letterSpacing="0.08em">
        RUN LOG
      </text>
      {log.map(([t, stage, msg, color], i) => (
        <g key={i}>
          <text x="230" y={182 + i * 13} fill={C.muted} fontSize="7.5" fontFamily="monospace">
            {t}
          </text>
          <text x="288" y={182 + i * 13} fill={C.accent} fontSize="7.5" fontFamily="monospace">
            {stage}
          </text>
          <text x="352" y={182 + i * 13} fill={color} fontSize="7.5" fontFamily="monospace">
            {msg}
          </text>
        </g>
      ))}

      {/* Result tiles */}
      {[
        ['ROWS SYNCED', '1,596'],
        ['DURATION', '23s'],
        ['FAILURES', '0'],
        ['MANUAL STEPS', '0'],
      ].map(([k, v], i) => (
        <g key={k}>
          <rect x={16 + i * 154} y="278" width="140" height="60" rx="10" fill={C.bg} stroke={C.border} />
          <text x={32 + i * 154} y="300" fill={C.muted} fontSize="8" fontFamily="monospace" letterSpacing="0.06em">
            {k}
          </text>
          <text x={32 + i * 154} y="324" fill={C.ink} fontSize="17" fontWeight="600" fontFamily="Georgia, serif">
            {v}
          </text>
        </g>
      ))}

      <rect x="16" y="352" width="608" height="32" rx="10" fill={C.panel} stroke={C.border} />
      <circle cx="38" cy="368" r="5" fill={C.green} />
      <text x="54" y="372" fill={C.muted} fontSize="9" fontFamily="monospace">
        Last 30 runs: 30 succeeded · 0 failed · average 24s
      </text>
    </>
  )
}

const scenes = {
  automation: Automation,
  chatbot: Chatbot,
  python: PythonAutomation,
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
