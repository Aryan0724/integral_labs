import type { Metadata} from "next";
import TeamClient from "./TeamClient";

export const metadata: Metadata = {
  title: "Team | The Integral Labs Engineering Collective",
  description:
    "A senior engineering and search architecture collective: dedicated software architects, interaction designers, and search engineers executing every engagement directly.",
};

export default function TeamPage() {
  return <TeamClient />;
}
