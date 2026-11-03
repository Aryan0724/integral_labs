import type { Metadata } from "next";
import PrivacyClient from "./PrivacyClient";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Integral Labs handles data: lightweight analytics, contact-form information, cookies, and user rights under applicable privacy law.",
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
