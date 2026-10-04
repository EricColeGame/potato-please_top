import type { LucideIcon } from "lucide-react";
import { BookOpen, Gamepad2, Sparkles, TrendingUp, Users, Rocket } from "lucide-react";

export interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Gamepad2, isContentType: true },
  { key: "features", path: "/features", icon: Sparkles, isContentType: true },
  { key: "progression", path: "/progression", icon: TrendingUp, isContentType: true },
  { key: "community", path: "/community", icon: Users, isContentType: true },
  { key: "release", path: "/release", icon: Rocket, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
