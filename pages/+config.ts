import vikeReact from "vike-react/config";
import type { Config } from "vike/types";
import Layout from "../layouts/LayoutDefault.jsx";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  prerender: true,
  // https://vike.dev/Layout
  Layout,

  // https://vike.dev/head-tags
  title: "Satsu – Clean Website Analytics for Developers",
  description: "Satsu offers minimal, privacy-friendly analytics, uptime monitoring, and performance tracking. Built for developers who value clarity, control, and simplicity.",

  extends: vikeReact,
} satisfies Config;
