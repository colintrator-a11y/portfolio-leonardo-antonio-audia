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

/* WhatsApp and Telegram bot conversations, drawn in each platform's own
   chrome so the result reads like a screenshot of the running bots. */
function ChatOps() {
  const PH_W = 288
  const PH_H = 392
  const LEFT = 20
  const RIGHT = 332
  const TOP = 22

  const waIn = [
    ['Hi! I am the Bella Boutique', 'assistant. How can I help?'],
  ]
  const waOut = [['Where is my order?']]
  const waIn2 = [
    ['Order #48213 was shipped today', 'with SDA Express.'],
    ['Estimated delivery: tomorrow', 'before 18:00.'],
  ]
  const waOut2 = [['Perfect, thanks!']]

  const bubble = (x, y, w, h, fill, stroke, tail) => (
    <>
      <rect x={x} y={y} width={w} height={h} rx="8" fill={fill} stroke={stroke || 'none'} />
      {tail === 'left' ? <path d={`M${x} ${y + 6} l-5 -4 l5 -3 z`} fill={fill} /> : null}
      {tail === 'right' ? <path d={`M${x + w} ${y + 6} l5 -4 l-5 -3 z`} fill={fill} /> : null}
    </>
  )

  const line = (x, y, text, fill, size = 9, anchor = 'start', weight = '400') => (
    <text x={x} y={y} fill={fill} fontSize={size} fontFamily="Helvetica, Arial, sans-serif" textAnchor={anchor} fontWeight={weight}>
      {text}
    </text>
  )

  const ticks = (x, y, color) => (
    <path
      d={`M${x} ${y} l2.2 2.4 l4.4 -5 M${x + 4} ${y} l2.2 2.4 l4.4 -5`}
      fill="none"
      stroke={color}
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  )

  return (
    <>
      <rect x="0" y="0" width="640" height="452" rx="14" fill="#fbfcfe" />
      <rect x="0.5" y="0.5" width="639" height="451" rx="13.5" fill="none" stroke={C.border} />

      {/* ================= WhatsApp ================= */}
      <g>
        <rect x={LEFT} y={TOP} width={PH_W} height={PH_H} rx="20" fill="#ffffff" stroke={C.barMid} strokeWidth="1.2" />
        <clipPath id="wa-clip">
          <rect x={LEFT + 5} y={TOP + 5} width={PH_W - 10} height={PH_H - 10} rx="16" />
        </clipPath>
        <g clipPath="url(#wa-clip)">
          <rect x={LEFT + 5} y={TOP + 5} width={PH_W - 10} height={PH_H - 10} fill="#ece5dd" />

          {/* header */}
          <rect x={LEFT + 5} y={TOP + 5} width={PH_W - 10} height="46" fill="#008069" />
          <path d={`M${LEFT + 20} ${TOP + 28} l-6 -5 l6 -5`} stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" />
          <circle cx={LEFT + 42} cy={TOP + 28} r="13" fill="#ffffff" fillOpacity="0.25" />
          <circle cx={LEFT + 42} cy={TOP + 24} r="4.4" fill="#ffffff" fillOpacity="0.85" />
          <path d={`M${LEFT + 34} ${TOP + 38} a8 8 0 0 1 16 0 z`} fill="#ffffff" fillOpacity="0.85" />
          {line(LEFT + 62, TOP + 25, 'Bella Boutique', '#ffffff', 10.5, 'start', '600')}
          {line(LEFT + 62, TOP + 37, 'online', '#d6efe6', 8.5)}
          <circle cx={LEFT + 246} cy={TOP + 28} r="1.6" fill="#fff" />
          <circle cx={LEFT + 246} cy={TOP + 22} r="1.6" fill="#fff" />
          <circle cx={LEFT + 246} cy={TOP + 34} r="1.6" fill="#fff" />

          {/* date chip */}
          <rect x={LEFT + 112} y={TOP + 62} width="64" height="17" rx="8.5" fill="#ffffff" fillOpacity="0.85" />
          {line(LEFT + 144, TOP + 74, 'TODAY', '#5c6b73', 7.5, 'middle', '600')}

          {/* bot message */}
          {bubble(LEFT + 16, TOP + 90, 178, 44, '#ffffff', null, 'left')}
          {waIn[0].map((t, i) => line(LEFT + 26, TOP + 107 + i * 13, t, '#111b21', 9))}
          {line(LEFT + 182, TOP + 129, '09:41', '#8696a0', 7)}

          {/* user message */}
          {bubble(LEFT + 128, TOP + 144, 138, 26, '#d9fdd3', null, 'right')}
          {waOut[0].map((t, i) => line(LEFT + 138, TOP + 161 + i * 13, t, '#111b21', 9))}
          {line(LEFT + 236, TOP + 166, '09:41', '#667781', 7)}
          {ticks(LEFT + 254, TOP + 164, '#53bdeb')}

          {/* bot reply */}
          {bubble(LEFT + 16, TOP + 180, 190, 58, '#ffffff', null, 'left')}
          {waIn2[0].map((t, i) => line(LEFT + 26, TOP + 197 + i * 13, t, '#111b21', 9))}
          {waIn2[1].map((t, i) => line(LEFT + 26, TOP + 223 + i * 13, t, '#111b21', 9))}

          {/* order card */}
          <rect x={LEFT + 16} y={TOP + 244} width={190} height="56" rx="8" fill="#ffffff" />
          <rect x={LEFT + 22} y={TOP + 250} width={178} height="26" rx="5" fill="#f0f2f5" />
          <circle cx={LEFT + 36} cy={TOP + 263} r="7.5" fill="#008069" fillOpacity="0.15" />
          <path d={`M${LEFT + 32} ${TOP + 263} l3 3 l6 -6`} stroke="#008069" strokeWidth="1.4" fill="none" strokeLinecap="round" />
          {line(LEFT + 50, TOP + 261, 'Out for delivery', '#111b21', 8.5, 'start', '600')}
          {line(LEFT + 50, TOP + 270, 'SDA Express · #48213', '#667781', 7.5)}
          <rect x={LEFT + 22} y={TOP + 282} width={178} height="12" rx="6" fill="#008069" fillOpacity="0.12" />
          {line(LEFT + 111, TOP + 291, 'TRACK MY PARCEL', '#008069', 7.5, 'middle', '700')}

          {/* user reply */}
          {bubble(LEFT + 168, TOP + 308, 98, 26, '#d9fdd3', null, 'right')}
          {line(LEFT + 178, TOP + 325, 'Perfect, thanks!', '#111b21', 9)}
          {ticks(LEFT + 254, TOP + 328, '#53bdeb')}

          {/* input bar */}
          <rect x={LEFT + 5} y={TOP + PH_H - 52} width={PH_W - 10} height="47" fill="#f0f2f5" />
          <rect x={LEFT + 14} y={TOP + PH_H - 44} width={214} height="30" rx="15" fill="#ffffff" />
          {line(LEFT + 30, TOP + PH_H - 24, 'Message', '#8696a0', 9)}
          <circle cx={LEFT + 252} cy={TOP + PH_H - 29} r="15" fill="#008069" />
          <path d={`M${LEFT + 246} ${TOP + PH_H - 35} l12 6 l-12 6 l3 -6 z`} fill="#ffffff" />
        </g>
        {line(LEFT + 4, TOP + PH_H + 22, 'WhatsApp Business API', C.muted, 9, 'start', '600')}
      </g>

      {/* ================= Telegram ================= */}
      <g>
        <rect x={RIGHT} y={TOP} width={PH_W} height={PH_H} rx="20" fill="#ffffff" stroke={C.barMid} strokeWidth="1.2" />
        <clipPath id="tg-clip">
          <rect x={RIGHT + 5} y={TOP + 5} width={PH_W - 10} height={PH_H - 10} rx="16" />
        </clipPath>
        <g clipPath="url(#tg-clip)">
          <rect x={RIGHT + 5} y={TOP + 5} width={PH_W - 10} height={PH_H - 10} fill="#eef3f7" />

          {/* header */}
          <rect x={RIGHT + 5} y={TOP + 5} width={PH_W - 10} height="46" fill="#527da3" />
          <path d={`M${RIGHT + 20} ${TOP + 28} l-6 -5 l6 -5`} stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" />
          <circle cx={RIGHT + 42} cy={TOP + 28} r="13" fill="#ffffff" fillOpacity="0.25" />
          {line(RIGHT + 42, TOP + 32, 'BB', '#ffffff', 10, 'middle', '700')}
          {line(RIGHT + 62, TOP + 25, 'BellaBoutiqueBot', '#ffffff', 10.5, 'start', '600')}
          {line(RIGHT + 62, TOP + 37, 'bot', '#cfe1f0', 8.5)}

          {/* bot greeting */}
          {bubble(RIGHT + 16, TOP + 68, 196, 44, '#ffffff', null, 'left')}
          {line(RIGHT + 26, TOP + 85, 'Welcome back, Marco.', '#0f1419', 9)}
          {line(RIGHT + 26, TOP + 98, 'What would you like to do?', '#0f1419', 9)}
          {line(RIGHT + 196, TOP + 107, '09:38', '#8b9aa7', 7)}

          {/* inline keyboard */}
          {['Track my order', 'Book a fitting', 'Talk to a human'].map((label, i) => (
            <g key={label}>
              <rect
                x={RIGHT + 16}
                y={TOP + 118 + i * 26}
                width={196}
                height="22"
                rx="6"
                fill="#ffffff"
                stroke="#d7e3ec"
              />
              {line(RIGHT + 114, TOP + 133 + i * 26, label, '#2b7cd3', 8.5, 'middle', '600')}
            </g>
          ))}

          {/* user tap */}
          {bubble(RIGHT + 128, TOP + 200, 138, 26, '#effdde', null, 'right')}
          {line(RIGHT + 138, TOP + 217, 'Track my order', '#0f1419', 9)}
          {line(RIGHT + 236, TOP + 222, '09:38', '#5eaa5e', 7)}
          {ticks(RIGHT + 254, TOP + 220, '#4fae4e')}

          {/* bot answer + status card */}
          {bubble(RIGHT + 16, TOP + 236, 200, 30, '#ffffff', null, 'left')}
          {line(RIGHT + 26, TOP + 254, 'Order #48213 — out for delivery', '#0f1419', 9)}

          <rect x={RIGHT + 16} y={TOP + 272} width={200} height="62" rx="8" fill="#ffffff" />
          {line(RIGHT + 28, TOP + 289, 'DELIVERY STATUS', '#8b9aa7', 7, 'start', '700')}
          {[
            ['Packed', true],
            ['Shipped', true],
            ['Out for delivery', true],
            ['Delivered', false],
          ].map(([label, done], i) => (
            <g key={label}>
              <circle cx={RIGHT + 32 + i * 46} cy={TOP + 302} r="4.6" fill={done ? '#4fae4e' : '#d7e3ec'} />
              {i < 3 ? (
                <rect x={RIGHT + 37 + i * 46} y={TOP + 301} width="36" height="2" fill={done ? '#4fae4e' : '#d7e3ec'} />
              ) : null}
            </g>
          ))}
          {line(RIGHT + 28, TOP + 322, 'Arriving today before 18:00', '#0f1419', 8)}

          {/* input bar */}
          <rect x={RIGHT + 5} y={TOP + PH_H - 52} width={PH_W - 10} height="47" fill="#ffffff" />
          <line x1={RIGHT + 5} y1={TOP + PH_H - 52} x2={RIGHT + PH_W - 5} y2={TOP + PH_H - 52} stroke="#e3ebf1" />
          {line(RIGHT + 22, TOP + PH_H - 24, 'Message', '#8b9aa7', 9)}
          <rect x={RIGHT + 196} y={TOP + PH_H - 38} width="30" height="16" rx="4" fill="#eef3f7" />
          {line(RIGHT + 211, TOP + PH_H - 27, 'MENU', '#527da3', 7, 'middle', '700')}
          <path d={`M${RIGHT + 246} ${TOP + PH_H - 36} l14 7 l-14 7 l3 -7 z`} fill="#527da3" />
        </g>
        {line(RIGHT + 4, TOP + PH_H + 22, 'Telegram Bot API', C.muted, 9, 'start', '600')}
      </g>
    </>
  )
}

const scenes = {
  automation: Automation,
  chatbot: Chatbot,
  python: PythonAutomation,
  chatops: ChatOps,
}

/* Scenes that need a canvas other than the default 640x400. */
const sizes = {
  chatops: [640, 452],
}

/**
 * Falls back to a drawn scene for projects that have no published screenshot.
 * Projects carrying a real screenshot render an <img> in Projects.jsx instead.
 */
export default function ProjectVisual({ variant, title }) {
  const Scene = scenes[variant]
  if (!Scene) return null

  const id = `pv-${variant}`
  const [vw, vh] = sizes[variant] ?? [W, H]

  return (
    <svg
      className="projectVisual"
      viewBox={`0 0 ${vw} ${vh}`}
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
