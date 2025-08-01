"use client";

import React, { useEffect } from "react";
import Hotjar from "@hotjar/browser";

const HOTJAR_ID = Number(process.env.NEXT_PUBLIC_HOTJAR_SITE_ID);
const HOTJAR_VERSION = 6;

const HotjarAnalytics = () => {
  useEffect(() => {
    Hotjar.init(HOTJAR_ID, HOTJAR_VERSION);
  }, []);

  return null;
};

export default HotjarAnalytics;
