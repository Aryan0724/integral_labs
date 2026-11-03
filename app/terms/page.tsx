import type { Metadata } from "next";
import TermsClient from "./TermsClient";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms of engagement for Integral Labs engineering services: scope, intellectual property transfer, payment, confidentiality, and liability.",
};

export default function TermsPage() {
  return <TermsClient />;
}
