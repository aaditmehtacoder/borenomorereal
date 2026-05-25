import type { Metadata } from "next"
import { LegalShell } from "@/components/legal-shell"

export const metadata: Metadata = {
  title: "Privacy Policy — BoreNoMore",
  description: "How BoreNoMore collects, uses, and protects your information.",
}

const CONTACT_EMAIL = "aaditmehtacoder@gmail.com"

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      subtitle="We built BoreNoMore to get you off the screen, so we keep data collection to the minimum needed to make that work."
      lastUpdated="May 24, 2026"
    >
      <p>
        This Privacy Policy explains what information BoreNoMore (&quot;we&quot;, &quot;us&quot;) collects, why we
        collect it, and the choices you have. By using the app you agree to the practices described here.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li><strong>Profile preferences</strong> — your interests, energy level, and the time you have available, so we can suggest fitting quests.</li>
        <li><strong>Activity data</strong> — quests you start or complete, XP, coins, streaks, and level progress.</li>
        <li><strong>Proof and reflections</strong> — photos and notes you choose to attach when completing a quest. These stay private to your account unless you share them.</li>
        <li><strong>Basic technical data</strong> — device type and app version, used to keep the app stable.</li>
      </ul>

      <h2>How we use it</h2>
      <p>
        We use your information to personalize quest suggestions, track your progress and rewards, and improve
        the app. AI personalization is <strong>optional and off by default</strong>; when enabled, your mood,
        time, and interests are used to generate more relevant ideas. You can turn it off anytime in settings.
      </p>

      <h2>What we do not do</h2>
      <ul>
        <li>We do not sell your personal information.</li>
        <li>We do not show third-party advertising inside your quest feed.</li>
        <li>We do not access your photos beyond the ones you explicitly attach to a quest.</li>
      </ul>

      <h2>Your choices</h2>
      <p>
        You can edit your profile, disable AI personalization, delete individual quest proofs, or request
        deletion of your account and associated data at any time. To make a data request, email us and we will
        respond within a reasonable timeframe.
      </p>

      <h2>Data retention &amp; security</h2>
      <p>
        We keep your data only as long as your account is active or as needed to provide the service, and we use
        reasonable safeguards to protect it. No method of transmission or storage is perfectly secure, but we
        work to protect your information and to notify you of material changes to this policy.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about your privacy? Reach us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}?subject=Privacy%20question%20%E2%80%94%20BoreNoMore`}>{CONTACT_EMAIL}</a>{" "}
        or through our <a href="/contact">contact page</a>.
      </p>
    </LegalShell>
  )
}
