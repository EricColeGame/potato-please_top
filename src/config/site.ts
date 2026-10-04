export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Potato Please Wiki",
  shortName: "Potato Please",
  logoText: "P",
  tagline: "Peeling Guides, Tools & Progression Tips",
  description: "Your ultimate guide to Potato Please! Learn peeling techniques, tool upgrades, automation strategies and progression tips for the cozy potato-peeling simulator.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://potato-please.top",
  supportEmail: "support@potato-please.top",
  gameUrl: "https://store.steampowered.com/app/5266240/Potato_Please/",
  heroVideoId: "TXiaCqyF41Y", // Potato Please Official Reveal Trailer (Golden Horn Studios)
  social: {
    discord: "https://steamcommunity.com/app/5266240",
    youtube: "https://www.youtube.com/@GoldenHornStudios",
    twitter: "https://www.twitter.com/MarmaladeBus",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
