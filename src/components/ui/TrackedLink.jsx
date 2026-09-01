"use client";

import { sendGAEvent } from "@next/third-parties/google";

// A plain <a> that also fires a GA4 event on click — used for the handful
// of links that represent a real conversion signal (calling, emailing,
// following on Instagram) so they show up as events in GA4 reports rather
// than disappearing into an undifferentiated pageview count.
export default function TrackedLink({ gaEvent, gaParams, children, ...props }) {
  return (
    <a {...props} onClick={() => sendGAEvent("event", gaEvent, gaParams)}>
      {children}
    </a>
  );
}
