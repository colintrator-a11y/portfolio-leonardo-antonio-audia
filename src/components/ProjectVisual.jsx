/**
 * Screenshot mockups drawn as inline SVG — one scene per project.
 * Light-mode interfaces to match the editorial paper theme. Vector art keeps
 * the page fast, crisp on every display and free of external asset requests.
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

function PlainFrame({ id, label }) {
  return (
    <g>
      <rect x="0" y="0" width={W} height={H} rx="14" fill={`url(#${id}-bg)`} />
      <rect x="0.5" y="0.5" width={W - 1} height={H - 1} rx="13.5" fill="none" stroke={C.border} />
      <text x="28" y="34" fill={C.muted} fontFamily="monospace" fontSize="11">
        {label}
      </text>
    </g>
  )
}

/* -------------------------------------------------------------------------- */

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

function Ecommerce({ id }) {
  return (
    <>
      <BrowserChrome id={id} label="store.example/catalogue" />

      {/* Top bar */}
      <rect x="16" y="60" width="608" height="44" rx="10" fill={C.panel} stroke={C.border} />
      <rect x="34" y="76" width="64" height="10" rx="5" fill={C.ink} />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={128 + i * 62} y="78" width="44" height="7" rx="3.5" fill={C.barMid} />
      ))}
      <rect x="418" y="72" width="130" height="20" rx="10" fill={C.bg} stroke={C.border} />
      <circle cx="580" cy="82" r="13" fill={C.accentSoft} />
      <path d="M574 79 h12 l-1.6 8.4 h-8.8 Z" fill="none" stroke={C.accent} strokeWidth="1.5" />

      {/* Filters */}
      <rect x="16" y="118" width="132" height="266" rx="10" fill={C.bg} stroke={C.border} />
      <text x="32" y="142" fill={C.muted} fontSize="8.5" fontFamily="monospace" letterSpacing="0.08em">
        FILTERS
      </text>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={i}>
          <rect
            x="32"
            y={156 + i * 26}
            width="12"
            height="12"
            rx="3"
            fill={i < 2 ? C.accent : C.bg}
            stroke={i < 2 ? C.accent : C.barMid}
          />
          <rect x="52" y={160 + i * 26} width={72 - (i % 3) * 14} height="6" rx="3" fill={C.barMid} />
        </g>
      ))}
      <rect x="32" y="324" width="100" height="5" rx="2.5" fill={C.barLight} />
      <circle cx="70" cy="326" r="7" fill={C.accent} />
      <circle cx="112" cy="326" r="7" fill={C.sky} />
      <rect x="32" y="348" width="100" height="24" rx="12" fill={C.ink} />

      {/* Product grid */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const col = i % 3
        const row = Math.floor(i / 3)
        const x = 164 + col * 156
        const y = 118 + row * 136
        return (
          <g key={i}>
            <rect x={x} y={y} width="144" height="124" rx="10" fill={C.bg} stroke={C.border} />
            <rect x={x + 10} y={y + 10} width="124" height="62" rx="7" fill={C.panel} />
            <circle cx={x + 72} cy={y + 41} r="17" fill={C.accentSoft} opacity={0.55 + (i % 3) * 0.2} />
            <rect x={x + 10} y={y + 82} width={96 - (i % 3) * 12} height="7" rx="3.5" fill={C.barMid} />
            <rect x={x + 10} y={y + 95} width="52" height="6" rx="3" fill={C.barLight} />
            <rect x={x + 10} y={y + 106} width="40" height="9" rx="4.5" fill={C.ink} opacity="0.8" />
            <rect x={x + 104} y={y + 100} width="30" height="16" rx="8" fill={C.accentSoft} />
          </g>
        )
      })}
    </>
  )
}

function Fitness({ id }) {
  const phone = (x, y, w, h) => (
    <>
      <rect x={x} y={y} width={w} height={h} rx="24" fill={C.bg} stroke={C.barMid} strokeWidth="1.5" />
      <rect x={x + 6} y={y + 6} width={w - 12} height={h - 12} rx="19" fill={C.panel} />
      <rect x={x + w / 2 - 22} y={y + 12} width="44" height="5" rx="2.5" fill={C.barLight} />
    </>
  )

  return (
    <>
      <PlainFrame id={id} label="coaching.app · athlete + coach" />

      {/* Customer phone */}
      {phone(56, 52, 210, 320)}
      <rect x="76" y="86" width="90" height="8" rx="4" fill={C.barMid} />
      <rect x="76" y="102" width="58" height="6" rx="3" fill={C.barLight} />
      <rect x="76" y="122" width="170" height="96" rx="10" fill={C.bg} stroke={C.border} />
      <path
        d="M88 200 C118 176 132 150 172 142 C204 136 214 152 236 140"
        fill="none"
        stroke={`url(#${id}-brand)`}
        strokeWidth="2.5"
        strokeDasharray="5 4"
      >
        <animate attributeName="stroke-dashoffset" values="18;0" dur="1.4s" repeatCount="indefinite" />
      </path>
      <circle cx="88" cy="200" r="5" fill={C.sky} />
      <circle cx="236" cy="140" r="6" fill={C.accent} />
      <circle cx="236" cy="140" r="11" fill="none" stroke={C.accent} strokeOpacity="0.4">
        <animate attributeName="r" values="7;15;7" dur="2.2s" repeatCount="indefinite" />
        <animate attributeName="stroke-opacity" values="0.5;0;0.5" dur="2.2s" repeatCount="indefinite" />
      </circle>

      <rect x="76" y="232" width="170" height="46" rx="10" fill={C.bg} stroke={C.border} />
      <circle cx="98" cy="255" r="12" fill={C.accentSoft} />
      <rect x="118" y="246" width="82" height="7" rx="3.5" fill={C.barMid} />
      <rect x="118" y="258" width="60" height="6" rx="3" fill={C.barLight} />
      <rect x="76" y="290" width="170" height="8" rx="4" fill={C.barLight} />
      <rect x="76" y="290" width="118" height="8" rx="4" fill={`url(#${id}-brand)`} />
      {['Warm-up', 'Main set', 'Cool-down'].map((t, i) => (
        <text
          key={t}
          x={78 + i * 62}
          y="316"
          fill={i < 2 ? C.accent : C.muted}
          fontSize="8"
          fontFamily="sans-serif"
        >
          {t}
        </text>
      ))}
      <rect x="76" y="330" width="170" height="26" rx="13" fill={C.ink} />

      {/* Driver phone */}
      {phone(322, 52, 210, 320)}
      <rect x="342" y="86" width="72" height="8" rx="4" fill={C.barMid} />
      <rect x="342" y="106" width="170" height="70" rx="10" fill={C.bg} stroke={C.border} />
      <text x="356" y="130" fill={C.muted} fontSize="8.5" fontFamily="monospace" letterSpacing="0.08em">
        TODAY'S SESSION
      </text>
      <rect x="356" y="140" width="112" height="7" rx="3.5" fill={C.barMid} />
      <rect x="356" y="154" width="80" height="6" rx="3" fill={C.barLight} />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="342" y={190 + i * 50} width="170" height="42" rx="10" fill={C.bg} stroke={C.border} />
          <circle cx="364" cy={211 + i * 50} r="9" fill={i === 0 ? C.accent : C.barLight} />
          <rect x="382" y={203 + i * 50} width={92 - i * 16} height="6" rx="3" fill={C.barMid} />
          <rect x="382" y={215 + i * 50} width="52" height="5" rx="2.5" fill={C.barLight} />
        </g>
      ))}
      <rect x="342" y="342" width="170" height="12" rx="6" fill={C.barLight} />
      <rect x="342" y="342" width="96" height="12" rx="6" fill={C.sky} />

      {/* Push notification */}
      <rect
        x="248"
        y="58"
        width="140"
        height="36"
        rx="10"
        fill={C.bg}
        stroke={C.border}
        strokeWidth="1"
      />
      <circle cx="268" cy="76" r="7" fill={`url(#${id}-brand)`} />
      <rect x="284" y="69" width="86" height="5" rx="2.5" fill={C.barMid} />
      <rect x="284" y="79" width="60" height="5" rx="2.5" fill={C.barLight} />
    </>
  )
}

function Maps({ id }) {
  const roads = ['M0 120 H640', 'M0 250 H640', 'M150 44 V400', 'M330 44 V400', 'M480 44 V400', 'M0 330 H640']

  return (
    <>
      <BrowserChrome id={id} label="fleet.maps/geolocation" />
      <clipPath id={`${id}-clip`}>
        <rect x="1" y="44" width={W - 2} height={H - 45} rx="13" />
      </clipPath>
      <g clipPath={`url(#${id}-clip)`}>
        <rect x="0" y="44" width={W} height={H - 44} fill="#f4f6fa" />
        {roads.map((d, i) => (
          <path key={i} d={d} stroke="#ffffff" strokeWidth={i % 3 === 0 ? 11 : 7} fill="none" />
        ))}
        {roads.map((d, i) => (
          <path key={`c${i}`} d={d} stroke="#e3e8f0" strokeWidth="1" fill="none" />
        ))}

        {/* Blocks */}
        {[
          [30, 150, 100, 80],
          [180, 60, 120, 40],
          [360, 150, 96, 80],
          [510, 60, 110, 40],
          [180, 270, 120, 44],
          [510, 270, 110, 44],
        ].map(([x, y, w, h], i) => (
          <rect key={i} x={x} y={y} width={w} height={h} rx="5" fill="#eaeef5" />
        ))}

        {/* Coverage geofence */}
        <circle cx="330" cy="250" r="96" fill={C.sky} fillOpacity="0.07" stroke={C.sky} strokeOpacity="0.4" strokeDasharray="6 6" />
        <circle cx="330" cy="250" r="60" fill={C.accent} fillOpacity="0.08" stroke={C.accent} strokeOpacity="0.35" />

        {/* Route */}
        <path
          d="M110 330 L150 330 L150 250 L330 250 L330 120 L480 120 L480 90"
          fill="none"
          stroke={`url(#${id}-brand)`}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray="10 8"
        >
          <animate attributeName="stroke-dashoffset" values="36;0" dur="1.6s" repeatCount="indefinite" />
        </path>

        {/* Pins */}
        {[
          [110, 330, C.sky],
          [330, 250, C.accent],
          [480, 90, '#7c3aed'],
        ].map(([x, y, c], i) => (
          <g key={i}>
            <path
              d={`M${x} ${y - 22} a11 11 0 0 1 11 11 c0 8-11 20-11 20 s-11-12-11-20 a11 11 0 0 1 11-11 z`}
              fill={c}
            />
            <circle cx={x} cy={y - 11} r="4" fill="#ffffff" />
          </g>
        ))}

        {/* Moving vehicle */}
        <circle r="6" fill={C.ink} stroke="#ffffff" strokeWidth="2">
          <animateMotion
            dur="6s"
            repeatCount="indefinite"
            path="M110 330 L150 330 L150 250 L330 250 L330 120 L480 120 L480 90"
          />
        </circle>

        {/* Panel */}
        <rect x="440" y="216" width="180" height="162" rx="10" fill="#ffffff" stroke={C.border} />
        <text x="458" y="240" fill={C.muted} fontSize="8.5" fontFamily="monospace" letterSpacing="0.08em">
          ROUTE SUMMARY
        </text>
        {[
          ['Distance', '18.4 km'],
          ['ETA', '24 min'],
          ['Stops', '6'],
          ['Geofences', '3 active'],
        ].map(([k, v], i) => (
          <g key={k}>
            <text x="458" y={266 + i * 24} fill={C.muted} fontSize="10" fontFamily="sans-serif">
              {k}
            </text>
            <text
              x="602"
              y={266 + i * 24}
              fill={C.ink}
              fontSize="10"
              fontWeight="600"
              textAnchor="end"
              fontFamily="sans-serif"
            >
              {v}
            </text>
          </g>
        ))}
        <rect x="458" y="350" width="144" height="7" rx="3.5" fill={C.barLight} />
        <rect x="458" y="350" width="98" height="7" rx="3.5" fill={`url(#${id}-brand)`} />
      </g>
    </>
  )
}

function Api({ id }) {
  const endpoints = [
    ['GET', '/v1/customers', C.green],
    ['POST', '/v1/orders', C.accent],
    ['GET', '/v1/orders/{id}', C.green],
    ['PUT', '/v1/inventory', C.amber],
    ['DELETE', '/v1/sessions', C.red],
  ]

  return (
    <>
      <BrowserChrome id={id} label="api.gateway/v1/docs" />

      {/* Endpoint list */}
      <rect x="16" y="60" width="330" height="324" rx="10" fill={C.bg} stroke={C.border} />
      <text x="34" y="84" fill={C.muted} fontSize="8.5" fontFamily="monospace" letterSpacing="0.08em">
        ENDPOINTS
      </text>
      {endpoints.map(([method, path, color], i) => (
        <g key={path}>
          <rect x="32" y={96 + i * 44} width="298" height="34" rx="8" fill={C.panel} stroke={C.hair} />
          <rect x="42" y={106 + i * 44} width="54" height="14" rx="4" fill={color} fillOpacity="0.12" />
          <text x="69" y={116 + i * 44} fill={color} fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="600">
            {method}
          </text>
          <text x="108" y={117 + i * 44} fill={C.ink} fontSize="10" fontFamily="monospace">
            {path}
          </text>
          <circle cx="312" cy={113 + i * 44} r="3.5" fill={C.green} />
        </g>
      ))}
      <rect x="32" y="320" width="298" height="50" rx="8" fill={C.panel} stroke={C.hair} />
      <text x="46" y="340" fill={C.muted} fontSize="8.5" fontFamily="monospace" letterSpacing="0.08em">
        AUTH
      </text>
      <text x="46" y="357" fill={C.accent} fontSize="9.5" fontFamily="monospace">
        Bearer eyJhbGciOiJIUzI1NiIsInR5…
      </text>

      {/* Response */}
      <rect x="362" y="60" width="262" height="196" rx="10" fill={C.bg} stroke={C.border} />
      <path d="M372 60 H614 A10 10 0 0 1 624 70 V88 H362 V70 A10 10 0 0 1 372 60 Z" fill={C.panel} />
      <line x1="362" y1="88" x2="624" y2="88" stroke={C.hair} />
      <circle cx="378" cy="74" r="3.5" fill={C.green} />
      <text x="390" y="78" fill={C.muted} fontSize="9" fontFamily="monospace">
        200 OK · 84 ms
      </text>
      {[
        ['{', C.muted, 0],
        ['"id"', C.accent, 12],
        ['"status"', C.accent, 12],
        ['"items"', C.accent, 12],
        ['"total"', C.accent, 12],
        ['}', C.muted, 0],
      ].map(([t, c, indent], i) => (
        <g key={i}>
          <text x={382 + indent} y={112 + i * 22} fill={c} fontSize="10" fontFamily="monospace">
            {t}
          </text>
          {indent ? (
            <>
              <text x={382 + indent + 62} y={112 + i * 22} fill={C.muted} fontSize="10" fontFamily="monospace">
                :
              </text>
              <rect
                x={382 + indent + 74}
                y={104 + i * 22}
                width={i % 2 ? 74 : 54}
                height="8"
                rx="4"
                fill={C.green}
                fillOpacity="0.28"
              />
            </>
          ) : null}
        </g>
      ))}

      {/* Metrics */}
      {[
        ['UPTIME', '99.9%'],
        ['P95', '120ms'],
        ['REQ/MIN', '4.2k'],
      ].map(([k, v], i) => (
        <g key={k}>
          <rect x={362 + i * 90} y="272" width="82" height="52" rx="9" fill={C.panel} stroke={C.hair} />
          <text x={376 + i * 90} y="292" fill={C.muted} fontSize="8" fontFamily="monospace" letterSpacing="0.06em">
            {k}
          </text>
          <text x={376 + i * 90} y="313" fill={C.ink} fontSize="15" fontWeight="600" fontFamily="Georgia, serif">
            {v}
          </text>
        </g>
      ))}

      {/* Throughput sparkline */}
      <rect x="362" y="336" width="262" height="48" rx="9" fill={C.panel} stroke={C.hair} />
      <path
        d="M376 372 L404 358 L432 364 L460 346 L488 354 L516 340 L544 350 L572 336 L600 344 L610 340"
        fill="none"
        stroke={`url(#${id}-brand)`}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
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

/* Product detail with a configurable option set — the modular furniture build. */
function Storefront({ id }) {
  return (
    <>
      <BrowserChrome id={id} label="store.example/product/modular-sofa" />

      {/* Top bar */}
      <rect x="16" y="60" width="608" height="40" rx="10" fill={C.panel} stroke={C.border} />
      <rect x="34" y="74" width="70" height="10" rx="5" fill={C.ink} />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={134 + i * 62} y="76" width="44" height="7" rx="3.5" fill={C.barMid} />
      ))}
      <circle cx="596" cy="80" r="12" fill={C.accentSoft} />

      {/* Gallery */}
      <rect x="16" y="114" width="300" height="200" rx="10" fill={C.panel} stroke={C.border} />
      <rect x="60" y="176" width="212" height="76" rx="8" fill={C.accentSoft} />
      <rect x="60" y="176" width="98" height="76" rx="8" fill="#c9dcf8" />
      <rect x="96" y="252" width="140" height="12" rx="4" fill={C.barLight} />
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={16 + i * 78}
          y="326"
          width="70"
          height="58"
          rx="8"
          fill={C.bg}
          stroke={i === 0 ? C.accent : C.border}
        />
      ))}

      {/* Configurator */}
      <rect x="332" y="114" width="292" height="270" rx="10" fill={C.bg} stroke={C.border} />
      <rect x="352" y="136" width="170" height="11" rx="5.5" fill={C.barMid} />
      <text x="352" y="176" fill={C.ink} fontSize="20" fontWeight="600" fontFamily="Georgia, serif">
        € 1,840
      </text>
      <rect x="440" y="163" width="60" height="8" rx="4" fill={C.barLight} />

      {['MODULES', 'FABRIC', 'FINISH'].map((label, row) => (
        <g key={label}>
          <text
            x="352"
            y={206 + row * 56}
            fill={C.muted}
            fontSize="8.5"
            fontFamily="monospace"
            letterSpacing="0.08em"
          >
            {label}
          </text>
          {[0, 1, 2, 3].map((i) => (
            <rect
              key={i}
              x={352 + i * 62}
              y={214 + row * 56}
              width="54"
              height="24"
              rx="6"
              fill={i === row % 3 ? C.accent : C.bg}
              stroke={i === row % 3 ? C.accent : C.barMid}
            />
          ))}
        </g>
      ))}

      <rect x="352" y="344" width="150" height="26" rx="13" fill={C.ink} />
      <rect x="516" y="344" width="88" height="26" rx="13" fill={C.bg} stroke={C.barMid} />
      <circle cx="596" cy="204" r="5" fill={C.green} />
      <text x="524" y="208" fill={C.muted} fontSize="8.5" fontFamily="monospace">
        IN STOCK
      </text>
    </>
  )
}

/* Editorial studio site — the Next.js build. */
function Studio({ id }) {
  return (
    <>
      <BrowserChrome id={id} label="lumina.studio" />

      {/* Nav */}
      <rect x="40" y="72" width="58" height="11" rx="5.5" fill={C.ink} />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={420 + i * 58} y="74" width="42" height="7" rx="3.5" fill={C.barMid} />
      ))}

      {/* Hero */}
      <rect x="40" y="118" width="330" height="16" rx="6" fill={C.ink} opacity="0.88" />
      <rect x="40" y="146" width="264" height="16" rx="6" fill={C.ink} opacity="0.88" />
      <rect x="40" y="174" width="180" height="16" rx="6" fill={C.accent} opacity="0.75" />
      <rect x="40" y="212" width="240" height="7" rx="3.5" fill={C.barMid} />
      <rect x="40" y="226" width="200" height="7" rx="3.5" fill={C.barLight} />
      <rect x="40" y="252" width="112" height="28" rx="14" fill={C.ink} />

      {/* Hero image */}
      <rect x="410" y="112" width="214" height="168" rx="10" fill={C.panel} stroke={C.border} />
      <circle cx="517" cy="182" r="44" fill={C.accentSoft} />
      <path d="M446 246 L490 206 L522 236 L560 198 L588 246 Z" fill="#c9dcf8" />

      {/* Work grid */}
      <line x1="40" y1="306" x2="600" y2="306" stroke={C.hair} />
      <text x="40" y="328" fill={C.muted} fontSize="8.5" fontFamily="monospace" letterSpacing="0.08em">
        SELECTED WORK
      </text>
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x={40 + i * 142} y="340" width="126" height="44" rx="8" fill={C.bg} stroke={C.border} />
          <rect x={52 + i * 142} y="352" width="26" height="20" rx="5" fill={C.accentSoft} />
          <rect x={88 + i * 142} y="356" width={64 - i * 8} height="6" rx="3" fill={C.barMid} />
          <rect x={88 + i * 142} y="367" width="40" height="5" rx="2.5" fill={C.barLight} />
        </g>
      ))}
    </>
  )
}

const scenes = {
  chatbot: Chatbot,
  ecommerce: Ecommerce,
  storefront: Storefront,
  studio: Studio,
  fitness: Fitness,
  maps: Maps,
  api: Api,
  automation: Automation,
}

export default function ProjectVisual({ variant, title }) {
  const Scene = scenes[variant] ?? Chatbot
  const id = `pv-${variant}`

  return (
    <svg
      className="projectVisual"
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={`Interface mockup for ${title}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <title>{`${title} — interface mockup`}</title>
      <Defs id={id} />
      <Scene id={id} />
    </svg>
  )
}
