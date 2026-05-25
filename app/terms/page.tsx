import type { Metadata } from "next"
import { LegalShell } from "@/components/legal-shell"

export const metadata: Metadata = {
  title: "Terms of Service — BoreNoMore",
  description: "The terms that govern your use of the BoreNoMore app.",
}

const CONTACT_EMAIL = "aaditmehtacoder@gmail.com"

export default function TermsPage() {
  return (
    <LegalShell
      title="Terms of Service"
      subtitle="The basics of using BoreNoMore — what you can expect from us, and what we ask of you."
      lastUpdated="May 24, 2026"
    >
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your use of the BoreNoMore app and website. By using
        BoreNoMore, you agree to these Terms. If you do not agree, please do not use the service.
      </p>

      <h2>Using BoreNoMore</h2>
      <p>
        BoreNoMore provides personalized quests, creative ideas, and real-world challenges. You may use the app
        for personal, non-commercial purposes. You agree not to misuse the service, interfere with its operation,
        or attempt to access it in unauthorized ways.
      </p>

      <h2>Your account &amp; content</h2>
      <ul>
        <li>You are responsible for activity under your account and for keeping your login secure.</li>
        <li>You retain ownership of the photos and reflections you add. You grant us a limited license to store and display them back to you within the app.</li>
        <li>Don&apos;t upload content that is unlawful, harmful, or infringes someone else&apos;s rights.</li>
      </ul>

      <h2>Quests and real-world activity</h2>
      <p>
        Quests are suggestions, not instructions. <strong>Use your own judgment and stay safe.</strong> You are
        responsible for any activity you choose to undertake. BoreNoMore is not liable for injuries, losses, or
        damages resulting from real-world activities you decide to do.
      </p>

      <h2>Rewards</h2>
      <p>
        XP, coins, streaks, and unlocked mini-games have no monetary value, cannot be exchanged for cash, and may
        be adjusted as we improve the gameplay experience.
      </p>

      <h2>Changes &amp; termination</h2>
      <p>
        We may update the app and these Terms from time to time. Continued use after changes means you accept the
        updated Terms. We may suspend or end access if these Terms are violated. You can stop using the service at
        any time.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms? Email{" "}
        <a href={`mailto:${CONTACT_EMAIL}?subject=Terms%20question%20%E2%80%94%20BoreNoMore`}>{CONTACT_EMAIL}</a>{" "}
        or visit our <a href="/contact">contact page</a>.
      </p>
    </LegalShell>
  )
}
