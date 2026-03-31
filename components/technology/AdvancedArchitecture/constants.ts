import {
  ShieldAlert,
  TrendingUp,
  Network,
  Bot,
  Zap,
  Cloud,
  Key,
  Shield,
  Monitor,
  Smartphone,
  LucideIcon
} from "lucide-react";

export interface OrbitingNodeData {
  id: number;
  label: string;
  pos: { left: string; top: string };
  layout: string;
  icon: LucideIcon;
}

export interface BottomJunctionData {
  id: number;
  pos: { left: string; top: string };
  icon: LucideIcon;
}

export interface BottomCardData {
  id: number;
  title: string;
  label: string;
  img: string;
  pos: { left: string; top: string };
}

// Data for Nodes
export const orbitingNodes: OrbitingNodeData[] = [
  { id: 1, label: "Real-Time Scam Detector\n", pos: { left: "15%", top: "50%" }, layout: "row-reverse", icon: ShieldAlert },
  { id: 2, label: "Predictive Risk-\nScoring", pos: { left: "25%", top: "35%" }, layout: "row-reverse", icon: TrendingUp },
  { id: 3, label: "Multi-stage Attack\nCo-relation", pos: { left: "34%", top: "18%" }, layout: "row-reverse", icon: Network },
  { id: 4, label: "AI Co-Pilot", pos: { left: "50%", top: "10%" }, layout: "col", icon: Bot },
  { id: 5, label: "AI/ML Powered\nAnomaly Detection", pos: { left: "66%", top: "18%" }, layout: "row", icon: Zap },
  { id: 6, label: "3rd Party SaaS\nServices", pos: { left: "80%", top: "35%" }, layout: "row", icon: Cloud },
  { id: 7, label: "Adaptive Access\nPolicies", pos: { left: "85%", top: "50%" }, layout: "row", icon: Key },
];

export const bottomJunctions: BottomJunctionData[] = [
  { id: 21, pos: { left: "20%", top: "68%" }, icon: Shield },
  { id: 22, pos: { left: "50%", top: "68%" }, icon: Monitor },
  { id: 23, pos: { left: "80%", top: "68%" }, icon: Smartphone },
];

export const bottomCards: BottomCardData[] = [
  {
    id: 11,
    title: "Edge AI Agents",
    label: "Plug-n-Play Firewall Solutions",
    img: "/images/features/Malware-guard.webp",
    pos: { left: "20%", top: "86%" },
  },
  {
    id: 12,
    title: "Edge AI Agents",
    label: "Endpoint Protection Software",
    img: "/images/features/Malware-guard.webp",
    pos: { left: "50%", top: "86%" },
  },
  {
    id: 13,
    title: "Edge AI Agents",
    label: "Cybersecurity Mobile App",
    img: "/images/features/Malware-guard.webp",
    pos: { left: "80%", top: "86%" },
  },
];
