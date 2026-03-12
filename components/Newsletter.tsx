"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // TODO: Integrate with email service (Klaviyo, Mailchimp, etc.)
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };
  
  return (
    <section className="border-t border-white/5 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-light mb-4 text-[hsl(var(--accent))]">
          Stay Connected
        </h2>
        <p className="text-[hsl(var(--foreground))]/70 mb-8 text-lg">
          Get updates on new releases, tour dates, and exclusive content.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 px-6 py-3 bg-[hsl(var(--muted))] border border-white/10 rounded-full text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--foreground))]/40 focus:outline-none focus:border-[hsl(var(--accent))]/50 transition-colors"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-8 py-3 bg-[hsl(var(--accent))] text-[hsl(var(--background))] rounded-full font-medium uppercase text-sm tracking-wide hover:bg-[hsl(var(--accent-light))] transition-all disabled:opacity-50"
          >
            {status === "loading" ? "..." : status === "success" ? "✓" : "Join"}
          </button>
        </form>
        
        {status === "success" && (
          <p className="mt-4 text-[hsl(var(--accent))] text-sm">Thanks for subscribing!</p>
        )}
      </div>
    </section>
  );
}
