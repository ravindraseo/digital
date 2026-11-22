"use client";

import { useState } from "react";

/**
 * No backend needed: the form composes a WhatsApp message with the visitor's details,
 * so every enquiry lands straight in your WhatsApp. Swap for an API route later if you
 * want email or CRM delivery as well.
 */
export function ContactForm({ whatsapp, services }: { whatsapp: string; services: string[] }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const text = [
      "New enquiry from digitalravindra.in",
      `Name: ${f.get("name")}`,
      `Phone: ${f.get("phone")}`,
      `City: ${f.get("city") || "-"}`,
      `Service: ${f.get("service")}`,
      `Website: ${f.get("website") || "-"}`,
      `Message: ${f.get("message") || "-"}`,
    ].join("\n");
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setSent(true);
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="field-row">
        <label>
          Your name
          <input name="name" required autoComplete="name" placeholder="e.g. Hetal Patel" />
        </label>
        <label>
          Phone / WhatsApp
          <input name="phone" required type="tel" autoComplete="tel" inputMode="tel" placeholder="+91" />
        </label>
      </div>
      <div className="field-row">
        <label>
          City
          <input name="city" autoComplete="address-level2" placeholder="Delhi" />
        </label>
        <label>
          Service you need
          <select name="service" defaultValue={services[0]}>
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
            <option>Not sure yet</option>
          </select>
        </label>
      </div>
      <label>
        Website or Google listing (optional)
        <input name="website" placeholder="yourbusiness.com" />
      </label>
      <label>
        What would you like to achieve?
        <textarea name="message" rows={4} placeholder="e.g. More calls from Google Maps for our clinic in Mayur Vihar" />
      </label>
      <button className="btn btn-primary btn-lg" type="submit">
        Send enquiry on WhatsApp
      </button>
      {sent && <p className="form-note">WhatsApp should have opened with your message — just hit send. Thank you!</p>}
    </form>
  );
}
