"use client";

import { useEffect } from "react";
import mixpanel from "mixpanel-browser";

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_PROJECT_TOKEN;

const MixpanelAnalytics = () => {
  useEffect(() => {
    if (!MIXPANEL_TOKEN) return;
    mixpanel.init(MIXPANEL_TOKEN, {
      debug: true,
      track_pageview: true,
      persistence: "localStorage",
      autocapture: true,
      autotrack: true,
    });
  }, []);
  return null;
};

export default MixpanelAnalytics;
