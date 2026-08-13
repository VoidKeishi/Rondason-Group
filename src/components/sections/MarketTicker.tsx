'use client';

import { useEffect, useRef } from 'react';

/**
 * Option A trial — TradingView's free Ticker Tape embed.
 *
 * Symbol set verified against the widget's free data (2026-08-13): the LME,
 * COMEX, NYMEX, ICE and CBOT feeds all return "invalid symbol", and there is
 * no aluminium, zinc or nickel at any provider. What ships below is the
 * closest available proxy set — spot/CFD contracts, not exchange futures.
 */
const SYMBOLS = [
  { proName: 'CAPITALCOM:COPPER', title: 'Copper' },
  { proName: 'TVC:GOLD', title: 'Gold' },
  { proName: 'TVC:SILVER', title: 'Silver' },
  { proName: 'TVC:UKOIL', title: 'Brent Crude' },
  { proName: 'TVC:USOIL', title: 'WTI Crude' },
  { proName: 'CAPITALCOM:NATURALGAS', title: 'Natural Gas' },
  { proName: 'CAPITALCOM:WHEAT', title: 'Wheat' },
  { proName: 'CAPITALCOM:CORN', title: 'Corn' },
  { proName: 'CAPITALCOM:SOYBEAN', title: 'Soybeans' },
];

export function MarketTicker() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = container.current;
    if (!el) return;

    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: SYMBOLS,
      colorTheme: 'dark',
      isTransparent: true,
      showSymbolLogo: false,
      displayMode: 'regular',
      locale: 'en',
    });
    el.appendChild(script);

    return () => {
      el.replaceChildren();
    };
  }, []);

  return (
    <div className="border-b border-navy-line/40 bg-navy-deep">
      <div ref={container} className="tradingview-widget-container" />
      {/* Attribution is mandatory under TradingView's widget terms. */}
      <div className="tradingview-widget-copyright pb-1 text-center">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
}
