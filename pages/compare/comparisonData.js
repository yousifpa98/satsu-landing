// Feature comparison data for table
export const features = [
    {
      id: "privacy",
      name: "Privacy by Default",
      values: {
        satsu: true,
        google_analytics: false,
        plausible: true,
        fathom: true,
        matomo: "Configurable"
      }
    },
    {
      id: "cookies",
      name: "No Cookies Required",
      values: {
        satsu: true,
        google_analytics: false,
        plausible: true,
        fathom: true,
        matomo: "Configurable"
      }
    },
    {
      id: "script_size",
      name: "Lightweight Script",
      values: {
        satsu: "~ 3 KB",
        google_analytics: "40-100 KB",
        plausible: "~ 1 KB",
        fathom: "~ 1.5 KB",
        matomo: "~ 20 KB+"
      }
    },
    {
      id: "realtime",
      name: "Real-time Dashboard",
      values: {
        satsu: true,
        google_analytics: "Partial",
        plausible: true,
        fathom: true,
        matomo: "Configurable"
      }
    },
    {
      id: "setup",
      name: "One-line Setup",
      values: {
        satsu: true,
        google_analytics: false,
        plausible: true,
        fathom: true,
        matomo: false
      }
    },
    {
      id: "price",
      name: "Free Option",
      values: {
        satsu: "Currently Free",
        google_analytics: "Free*",
        plausible: "Paid Only",
        fathom: "Paid Only",
        matomo: "Self-hosted"
      }
    },
    {
      id: "gdpr",
      name: "GDPR Compliant",
      values: {
        satsu: true,
        google_analytics: false,
        plausible: true,
        fathom: true,
        matomo: "Configurable"
      }
    },
    {
      id: "consent",
      name: "No Consent Banners",
      values: {
        satsu: true,
        google_analytics: false,
        plausible: true,
        fathom: true,
        matomo: "Configurable"
      }
    },
    {
      id: "hosted",
      name: "Fully Hosted",
      values: {
        satsu: true,
        google_analytics: true,
        plausible: "Optional",
        fathom: "Optional",
        matomo: "Optional"
      }
    },
    {
      id: "opensource",
      name: "Open Source",
      values: {
        satsu: false,
        google_analytics: false,
        plausible: true,
        fathom: false,
        matomo: true
      }
    },
    {
      id: "developer_focus",
      name: "Developer-First",
      values: {
        satsu: true,
        google_analytics: false,
        plausible: "Partial",
        fathom: "Partial",
        matomo: false
      }
    }
  ];