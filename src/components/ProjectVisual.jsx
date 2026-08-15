/**
 * Screenshot mockups drawn as inline SVG — one scene per project.
 * Vector art keeps the page fast, crisp on every display and free of
 * external asset requests.
 */

const W = 640
const H = 400

function Defs({ id }) {
  return (
    <defs>
      <linearGradient id={`${id}-brand`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="100%" stopColor="#22d3ee" />
      </linearGradient>
      <linearGradient id={`${id}-glass`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.09" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02" />
      </linearGradient>
      <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#0d1730" />
        <stop offset="100%" stopColor="#070c1a" />
      </linearGradient>
    </defs>
  )
}

function BrowserChrome({ id, label }) {
  return (
    <g>
      <rect x="0" y="0" width={W} height={H} rx="18" fill={`url(#${id}-bg)`} />
      <rect x="0.75" y="0.75" width={W - 1.5} height={H - 1.5} rx="17.25" fill="none" stroke="#243352" />
      <path d={`M18 0 H${W - 18} A18 18 0 0 1 ${W} 18 V44 H0 V18 A18 18 0 0 1 18 0 Z`} fill="#111c36" />
      <line x1="0" y1="44" x2={W} y2="44" stroke="#243352" />
      <circle cx="22" cy="22" r="4.5" fill="#f87171" opacity="0.75" />
      <circle cx="38" cy="22" r="4.5" fill="#fbbf24" opacity="0.75" />
      <circle cx="54" cy="22" r="4.5" fill="#34d399" opacity="0.75" />
      <rect x="76" y="12" width="220" height="20" rx="10" fill="#0b1428" stroke="#243352" />
      <text x="90" y="26" fill="#7d8db0" fontFamily="monospace" fontSize="10">
        {label}
      </text>
    </g>
  )
}

function PhoneChrome({ id, label }) {
  return (
    <g>
      <rect x="0" y="0" width={W} height={H} rx="18" fill={`url(#${id}-bg)`} />
      <rect x="0.75" y="0.75" width={W - 1.5} height={H - 1.5} rx="17.25" fill="none" stroke="#243352" />
      <text x="28" y="34" fill="#7d8db0" fontFamily="monospace" fontSize="11">
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
      <rect x="16" y="60" width="150" height="324" rx="12" fill={`url(#${id}-glass)`} stroke="#22304d" />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <circle cx="38" cy={90 + i * 46} r="11" fill="#1c2a49" />
          <rect x="56" y={83 + i * 46} width={i === 0 ? 84 : 70} height="7" rx="3.5" fill={i === 0 ? `url(#${id}-brand)` : '#31415f'} />
          <rect x="56" y={95 + i * 46} width="56" height="5" rx="2.5" fill="#25334f" />
        </g>
      ))}

      {/* Conversation */}
      <rect x="180" y="60" width="292" height="324" rx="12" fill="#ffffff" fillOpacity="0.025" stroke="#22304d" />
      <rect x="196" y="78" width="180" height="46" rx="12" fill="#18243f" />
      <rect x="210" y="94" width="130" height="6" rx="3" fill="#3d4f70" />
      <rect x="210" y="106" width="92" height="6" rx="3" fill="#33445f" />

      <rect x="276" y="138" width="180" height="60" rx="12" fill={`url(#${id}-brand)`} fillOpacity="0.18" stroke="#3f7fd0" />
      <rect x="292" y="154" width="146" height="6" rx="3" fill="#8fc4f5" />
      <rect x="292" y="167" width="120" height="6" rx="3" fill="#6ea9e3" />
      <rect x="292" y="180" width="86" height="6" rx="3" fill="#5b95cf" />

      <rect x="196" y="212" width="200" height="60" rx="12" fill="#18243f" />
      <rect x="210" y="228" width="164" height="6" rx="3" fill="#3d4f70" />
      <rect x="210" y="241" width="132" height="6" rx="3" fill="#33445f" />
      <rect x="210" y="254" width="98" height="6" rx="3" fill="#2c3b56" />

      {/* Typing indicator */}
      <rect x="196" y="286" width="74" height="26" rx="13" fill="#18243f" />
      <circle cx="214" cy="299" r="3.5" fill="#60a5fa">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="228" cy="299" r="3.5" fill="#60a5fa">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.2s" begin="0.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="242" cy="299" r="3.5" fill="#60a5fa">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.2s" begin="0.4s" repeatCount="indefinite" />
      </circle>

      <rect x="196" y="330" width="260" height="34" rx="17" fill="#0d1730" stroke="#28385a" />
      <rect x="212" y="344" width="120" height="6" rx="3" fill="#2c3b56" />
      <circle cx="436" cy="347" r="12" fill={`url(#${id}-brand)`} />

      {/* Insight panel */}
      <rect x="486" y="60" width="138" height="150" rx="12" fill="#ffffff" fillOpacity="0.025" stroke="#22304d" />
      <text x="502" y="84" fill="#7d8db0" fontSize="9" fontFamily="monospace">
        RESOLUTION RATE
      </text>
      <text x="502" y="116" fill="#e7eefb" fontSize="26" fontWeight="700" fontFamily="sans-serif">
        86%
      </text>
      <rect x="502" y="130" width="106" height="6" rx="3" fill="#1e2c48" />
      <rect x="502" y="130" width="91" height="6" rx="3" fill={`url(#${id}-brand)`} />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="502" y={152 + i * 18} width={70 - i * 14} height="5" rx="2.5" fill="#2b3a58" />
          <rect x="588" y={152 + i * 18} width="20" height="5" rx="2.5" fill="#3a5c8a" />
        </g>
      ))}

      <rect x="486" y="224" width="138" height="160" rx="12" fill="#ffffff" fillOpacity="0.025" stroke="#22304d" />
      <text x="502" y="248" fill="#7d8db0" fontSize="9" fontFamily="monospace">
        INTENTS
      </text>
      {[62, 48, 71, 35, 55].map((v, i) => (
        <g key={i}>
          <rect x="502" y={262 + i * 22} width="106" height="8" rx="4" fill="#1e2c48" />
          <rect x="502" y={262 + i * 22} width={v * 1.06} height="8" rx="4" fill={`url(#${id}-brand)`} opacity={0.85 - i * 0.1} />
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
      <rect x="16" y="60" width="608" height="44" rx="12" fill="#ffffff" fillOpacity="0.025" stroke="#22304d" />
      <rect x="34" y="76" width="64" height="10" rx="5" fill={`url(#${id}-brand)`} />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={128 + i * 62} y="78" width="44" height="7" rx="3.5" fill="#33445f" />
      ))}
      <rect x="418" y="72" width="130" height="20" rx="10" fill="#0d1730" stroke="#28385a" />
      <circle cx="580" cy="82" r="13" fill="#18243f" />
      <path d="M574 79 h12 l-1.6 8.4 h-8.8 Z" fill="none" stroke="#60a5fa" strokeWidth="1.6" />

      {/* Filters */}
      <rect x="16" y="118" width="132" height="266" rx="12" fill="#ffffff" fillOpacity="0.025" stroke="#22304d" />
      <text x="32" y="142" fill="#7d8db0" fontSize="9" fontFamily="monospace">
        FILTERS
      </text>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={i}>
          <rect x="32" y={156 + i * 26} width="12" height="12" rx="3.5" fill={i < 2 ? `url(#${id}-brand)` : '#1e2c48'} />
          <rect x="52" y={160 + i * 26} width={72 - (i % 3) * 14} height="6" rx="3" fill="#2f3f5d" />
        </g>
      ))}
      <rect x="32" y="324" width="100" height="6" rx="3" fill="#1e2c48" />
      <circle cx="70" cy="327" r="7" fill={`url(#${id}-brand)`} />
      <circle cx="112" cy="327" r="7" fill="#60a5fa" />
      <rect x="32" y="348" width="100" height="24" rx="12" fill={`url(#${id}-brand)`} fillOpacity="0.2" stroke="#3f7fd0" />

      {/* Product grid */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const col = i % 3
        const row = Math.floor(i / 3)
        const x = 164 + col * 156
        const y = 118 + row * 136
        return (
          <g key={i}>
            <rect x={x} y={y} width="144" height="124" rx="12" fill="#ffffff" fillOpacity="0.03" stroke="#22304d" />
            <rect x={x + 10} y={y + 10} width="124" height="62" rx="8" fill="#16223f" />
            <circle cx={x + 72} cy={y + 41} r="17" fill={`url(#${id}-brand)`} fillOpacity={0.28 + (i % 3) * 0.16} />
            <rect x={x + 10} y={y + 82} width={96 - (i % 3) * 12} height="7" rx="3.5" fill="#3a4b6b" />
            <rect x={x + 10} y={y + 95} width="52" height="6" rx="3" fill="#2a3a57" />
            <rect x={x + 10} y={y + 106} width="40" height="9" rx="4.5" fill="#22d3ee" fillOpacity="0.55" />
            <rect x={x + 104} y={y + 100} width="30" height="16" rx="8" fill={`url(#${id}-brand)`} fillOpacity="0.22" stroke="#3f7fd0" />
          </g>
        )
      })}
    </>
  )
}

function Delivery({ id }) {
  const phone = (x, y, w, h) => (
    <>
      <rect x={x} y={y} width={w} height={h} rx="26" fill="#0b1428" stroke="#2c3d61" strokeWidth="1.5" />
      <rect x={x + 6} y={y + 6} width={w - 12} height={h - 12} rx="21" fill="#0e1830" />
      <rect x={x + w / 2 - 22} y={y + 12} width="44" height="6" rx="3" fill="#1c2a49" />
    </>
  )

  return (
    <>
      <PhoneChrome id={id} label="delivery.app · customer + driver" />

      {/* Customer phone */}
      {phone(56, 52, 210, 320)}
      <rect x="76" y="86" width="90" height="8" rx="4" fill="#3a4b6b" />
      <rect x="76" y="102" width="58" height="6" rx="3" fill="#28385a" />
      <rect x="76" y="122" width="170" height="96" rx="12" fill="#101d38" stroke="#22304d" />
      <path d="M88 200 C118 176 132 150 172 142 C204 136 214 152 236 140" fill="none" stroke={`url(#${id}-brand)`} strokeWidth="2.5" strokeDasharray="5 4">
        <animate attributeName="stroke-dashoffset" values="18;0" dur="1.4s" repeatCount="indefinite" />
      </path>
      <circle cx="88" cy="200" r="5" fill="#22d3ee" />
      <circle cx="236" cy="140" r="6" fill="#60a5fa" />
      <circle cx="236" cy="140" r="11" fill="none" stroke="#60a5fa" strokeOpacity="0.45">
        <animate attributeName="r" values="7;15;7" dur="2.2s" repeatCount="indefinite" />
        <animate attributeName="stroke-opacity" values="0.55;0;0.55" dur="2.2s" repeatCount="indefinite" />
      </circle>

      <rect x="76" y="232" width="170" height="46" rx="12" fill="#ffffff" fillOpacity="0.03" stroke="#22304d" />
      <circle cx="98" cy="255" r="12" fill="#18243f" />
      <rect x="118" y="246" width="82" height="7" rx="3.5" fill="#3a4b6b" />
      <rect x="118" y="258" width="60" height="6" rx="3" fill="#28385a" />
      <rect x="76" y="290" width="170" height="10" rx="5" fill="#1a2740" />
      <rect x="76" y="290" width="118" height="10" rx="5" fill={`url(#${id}-brand)`} />
      {['Placed', 'On the way', 'Delivered'].map((t, i) => (
        <text key={t} x={78 + i * 62} y="318" fill={i < 2 ? '#8fc4f5' : '#5b6b8a'} fontSize="8" fontFamily="sans-serif">
          {t}
        </text>
      ))}
      <rect x="76" y="330" width="170" height="26" rx="13" fill={`url(#${id}-brand)`} fillOpacity="0.2" stroke="#3f7fd0" />

      {/* Driver phone */}
      {phone(322, 52, 210, 320)}
      <rect x="342" y="86" width="72" height="8" rx="4" fill="#3a4b6b" />
      <rect x="342" y="106" width="170" height="70" rx="12" fill="#101d38" stroke="#22304d" />
      <text x="356" y="130" fill="#7d8db0" fontSize="9" fontFamily="monospace">
        NEXT STOP
      </text>
      <rect x="356" y="140" width="112" height="7" rx="3.5" fill="#3a4b6b" />
      <rect x="356" y="154" width="80" height="6" rx="3" fill="#28385a" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="342" y={190 + i * 50} width="170" height="42" rx="11" fill="#ffffff" fillOpacity="0.03" stroke="#22304d" />
          <circle cx="364" cy={211 + i * 50} r="9" fill={i === 0 ? `url(#${id}-brand)` : '#1c2a49'} />
          <rect x="382" y={203 + i * 50} width={92 - i * 16} height="6" rx="3" fill="#354663" />
          <rect x="382" y={215 + i * 50} width="52" height="5" rx="2.5" fill="#28385a" />
        </g>
      ))}
      <rect x="342" y="342" width="170" height="14" rx="7" fill="#1a2740" />
      <rect x="342" y="342" width="96" height="14" rx="7" fill="#22d3ee" fillOpacity="0.5" />

      {/* Notification chip */}
      <rect x="248" y="60" width="140" height="34" rx="12" fill="#111f3c" stroke="#3f7fd0" />
      <circle cx="268" cy="77" r="7" fill={`url(#${id}-brand)`} />
      <rect x="284" y="70" width="86" height="5" rx="2.5" fill="#8fc4f5" />
      <rect x="284" y="80" width="60" height="5" rx="2.5" fill="#4d6a94" />
    </>
  )
}

function Maps({ id }) {
  const roads = [
    'M0 120 H640',
    'M0 250 H640',
    'M150 44 V400',
    'M330 44 V400',
    'M480 44 V400',
    'M0 330 H640',
  ]

  return (
    <>
      <BrowserChrome id={id} label="fleet.maps/geolocation" />
      <clipPath id={`${id}-clip`}>
        <rect x="1" y="44" width={W - 2} height={H - 45} rx="17" />
      </clipPath>
      <g clipPath={`url(#${id}-clip)`}>
        <rect x="0" y="44" width={W} height={H - 44} fill="#0a1428" />
        {roads.map((d, i) => (
          <path key={i} d={d} stroke="#16233f" strokeWidth={i % 3 === 0 ? 10 : 6} fill="none" />
        ))}
        {roads.map((d, i) => (
          <path key={`c${i}`} d={d} stroke="#1e2f52" strokeWidth="1" fill="none" strokeDasharray="8 8" />
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
          <rect key={i} x={x} y={y} width={w} height={h} rx="6" fill="#0f1c36" stroke="#1b2a49" />
        ))}

        {/* Coverage geofence */}
        <circle cx="330" cy="250" r="96" fill="#22d3ee" fillOpacity="0.07" stroke="#22d3ee" strokeOpacity="0.4" strokeDasharray="6 6" />
        <circle cx="330" cy="250" r="60" fill="#3b82f6" fillOpacity="0.09" stroke="#60a5fa" strokeOpacity="0.45" />

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
          [110, 330, '#22d3ee'],
          [330, 250, '#60a5fa'],
          [480, 90, '#a78bfa'],
        ].map(([x, y, c], i) => (
          <g key={i}>
            <path d={`M${x} ${y - 22} a11 11 0 0 1 11 11 c0 8-11 20-11 20 s-11-12-11-20 a11 11 0 0 1 11-11 z`} fill={c} />
            <circle cx={x} cy={y - 11} r="4" fill="#0a1428" />
          </g>
        ))}

        {/* Moving vehicle */}
        <circle r="6" fill="#ffffff">
          <animateMotion dur="6s" repeatCount="indefinite" path="M110 330 L150 330 L150 250 L330 250 L330 120 L480 120 L480 90" />
        </circle>

        {/* Panel */}
        <rect x="440" y="216" width="180" height="160" rx="12" fill="#0b142c" fillOpacity="0.95" stroke="#28385a" />
        <text x="458" y="240" fill="#7d8db0" fontSize="9" fontFamily="monospace">
          ROUTE SUMMARY
        </text>
        {[
          ['Distance', '18.4 km'],
          ['ETA', '24 min'],
          ['Stops', '6'],
          ['Geofences', '3 active'],
        ].map(([k, v], i) => (
          <g key={k}>
            <text x="458" y={266 + i * 24} fill="#8d9cb8" fontSize="10" fontFamily="sans-serif">
              {k}
            </text>
            <text x="602" y={266 + i * 24} fill="#e7eefb" fontSize="10" fontWeight="600" textAnchor="end" fontFamily="sans-serif">
              {v}
            </text>
          </g>
        ))}
        <rect x="458" y="348" width="144" height="8" rx="4" fill="#1a2740" />
        <rect x="458" y="348" width="98" height="8" rx="4" fill={`url(#${id}-brand)`} />
      </g>
    </>
  )
}

function Api({ id }) {
  const endpoints = [
    ['GET', '/v1/customers', '#34d399'],
    ['POST', '/v1/orders', '#60a5fa'],
    ['GET', '/v1/orders/{id}', '#34d399'],
    ['PUT', '/v1/inventory', '#fbbf24'],
    ['DELETE', '/v1/sessions', '#f87171'],
  ]

  return (
    <>
      <BrowserChrome id={id} label="api.gateway/v1/docs" />

      {/* Endpoint list */}
      <rect x="16" y="60" width="330" height="324" rx="12" fill="#ffffff" fillOpacity="0.025" stroke="#22304d" />
      <text x="34" y="84" fill="#7d8db0" fontSize="9" fontFamily="monospace">
        ENDPOINTS
      </text>
      {endpoints.map(([method, path, color], i) => (
        <g key={path}>
          <rect x="32" y={96 + i * 44} width="298" height="34" rx="9" fill="#0e1a33" stroke="#213050" />
          <rect x="42" y={106 + i * 44} width="52" height="14" rx="4" fill={color} fillOpacity="0.2" stroke={color} strokeOpacity="0.55" />
          <text x="68" y={116 + i * 44} fill={color} fontSize="8" fontFamily="monospace" textAnchor="middle">
            {method}
          </text>
          <text x="106" y={117 + i * 44} fill="#c3d2ea" fontSize="10" fontFamily="monospace">
            {path}
          </text>
          <circle cx="312" cy={113 + i * 44} r="4" fill="#34d399" opacity="0.8" />
        </g>
      ))}
      <rect x="32" y="320" width="298" height="50" rx="10" fill="#0e1a33" stroke="#213050" />
      <text x="46" y="340" fill="#7d8db0" fontSize="9" fontFamily="monospace">
        AUTH
      </text>
      <text x="46" y="356" fill="#8fc4f5" fontSize="9.5" fontFamily="monospace">
        Bearer eyJhbGciOiJIUzI1NiIsInR5…
      </text>

      {/* Response */}
      <rect x="362" y="60" width="262" height="196" rx="12" fill="#0b1428" stroke="#22304d" />
      <rect x="362" y="60" width="262" height="28" rx="12" fill="#111c36" />
      <text x="380" y="79" fill="#7d8db0" fontSize="9" fontFamily="monospace">
        200 OK · 84 ms
      </text>
      {[
        ['{', '#94a3b8', 0],
        ['"id"', '#7dd3fc', 12],
        ['"status"', '#7dd3fc', 12],
        ['"items"', '#7dd3fc', 12],
        ['"total"', '#7dd3fc', 12],
        ['}', '#94a3b8', 0],
      ].map(([t, c, indent], i) => (
        <g key={i}>
          <text x={382 + indent} y={110 + i * 22} fill={c} fontSize="10" fontFamily="monospace">
            {t}
          </text>
          {indent ? (
            <>
              <text x={382 + indent + 62} y={110 + i * 22} fill="#94a3b8" fontSize="10" fontFamily="monospace">
                :
              </text>
              <rect x={382 + indent + 74} y={102 + i * 22} width={i % 2 ? 74 : 54} height="8" rx="4" fill="#34d399" fillOpacity="0.45" />
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
          <rect x={362 + i * 90} y="272" width="82" height="52" rx="10" fill="#ffffff" fillOpacity="0.03" stroke="#22304d" />
          <text x={376 + i * 90} y="292" fill="#7d8db0" fontSize="8" fontFamily="monospace">
            {k}
          </text>
          <text x={376 + i * 90} y="312" fill="#e7eefb" fontSize="14" fontWeight="700" fontFamily="sans-serif">
            {v}
          </text>
        </g>
      ))}

      {/* Throughput sparkline */}
      <rect x="362" y="336" width="262" height="48" rx="10" fill="#ffffff" fillOpacity="0.03" stroke="#22304d" />
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
        <path key={i} d={d} fill="none" stroke="#2b3e63" strokeWidth="2" strokeDasharray="6 6">
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
            rx="13"
            fill="#101d38"
            stroke={i === 3 ? '#3f7fd0' : '#28385a'}
          />
          <circle cx={n.x} cy={n.y - 6} r="9" fill={`url(#${id}-brand)`} fillOpacity={0.35 + i * 0.12} />
          <text x={n.x} y={n.y + 18} fill="#c3d2ea" fontSize="9" fontFamily="sans-serif" textAnchor="middle">
            {n.label}
          </text>
        </g>
      ))}

      {/* Rule builder panel */}
      <rect x="16" y="252" width="286" height="132" rx="12" fill="#ffffff" fillOpacity="0.025" stroke="#22304d" />
      <text x="34" y="276" fill="#7d8db0" fontSize="9" fontFamily="monospace">
        RULES
      </text>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="32" y={288 + i * 32} width="254" height="24" rx="8" fill="#0e1a33" stroke="#213050" />
          <rect x="42" y={297 + i * 32} width="38" height="7" rx="3.5" fill="#4c6a99" />
          <rect x="90" y={297 + i * 32} width="26" height="7" rx="3.5" fill="#22d3ee" fillOpacity="0.6" />
          <rect x="126" y={297 + i * 32} width={110 - i * 22} height="7" rx="3.5" fill="#33445f" />
          <circle cx="272" cy={300 + i * 32} r="6" fill={i === 2 ? '#1e2c48' : '#34d399'} fillOpacity={i === 2 ? 1 : 0.75} />
        </g>
      ))}

      {/* Run log */}
      <rect x="318" y="252" width="306" height="132" rx="12" fill="#ffffff" fillOpacity="0.025" stroke="#22304d" />
      <text x="336" y="276" fill="#7d8db0" fontSize="9" fontFamily="monospace">
        AUDIT LOG
      </text>
      {[
        ['09:04', 'workflow.started', '#60a5fa'],
        ['09:04', 'validation.passed', '#34d399'],
        ['09:05', 'approval.granted', '#34d399'],
        ['09:05', 'erp.sync.ok', '#34d399'],
      ].map(([time, event, color], i) => (
        <g key={i}>
          <text x="336" y={296 + i * 22} fill="#5f6f8d" fontSize="9" fontFamily="monospace">
            {time}
          </text>
          <circle cx="384" cy={292 + i * 22} r="3.5" fill={color} />
          <text x="398" y={296 + i * 22} fill="#a9bad6" fontSize="9.5" fontFamily="monospace">
            {event}
          </text>
        </g>
      ))}
      <rect x="336" y="360" width="272" height="8" rx="4" fill="#1a2740" />
      <rect x="336" y="360" width="228" height="8" rx="4" fill={`url(#${id}-brand)`} />
    </>
  )
}

const scenes = {
  chatbot: Chatbot,
  ecommerce: Ecommerce,
  delivery: Delivery,
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
