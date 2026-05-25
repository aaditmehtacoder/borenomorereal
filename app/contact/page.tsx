import type { Metadata } from "next"
import { LegalShell } from "@/components/legal-shell"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact — BoreNoMore",
  description: "Get in touch with the BoreNoMore team. We read every message.",
}

export default function ContactPage() {
  return (
    <LegalShell
      title="Get in touch"
      subtitle="Questions, feedback, or a great quest idea? Send it our way — we'd love to hear from you."
    >
      <ContactForm />
    </LegalShell>
  )
}
