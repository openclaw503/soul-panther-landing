'use client';

import { useState } from 'react';

export default function Book() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    location: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added later
    console.log('Form submitted:', formData);
    alert('Thank you for your booking inquiry! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-display tracking-tight text-white mb-6">
            BOOK NOW
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Ready to bring Soul Panther to your festival, club, or private event? Fill out the form below and let&apos;s create something unforgettable together.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-sacred-gold to-transparent mx-auto mt-8" />
        </div>

        {/* Contact Form */}
        <div className="bg-gradient-to-br from-deep-indigo/20 via-midnight to-deep-indigo/20 border border-sacred-gold/20 rounded-lg p-8 sm:p-12 card-glow">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white/90 mb-2">
                  NAME *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-midnight border border-sacred-gold/20 rounded text-white placeholder:text-white/40 focus:outline-none focus:border-sacred-gold transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white/90 mb-2">
                  EMAIL *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-midnight border border-sacred-gold/20 rounded text-white placeholder:text-white/40 focus:outline-none focus:border-sacred-gold transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Phone & Event Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-white/90 mb-2">
                  PHONE
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-midnight border border-sacred-gold/20 rounded text-white placeholder:text-white/40 focus:outline-none focus:border-sacred-gold transition-colors"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <label htmlFor="eventType" className="block text-sm font-semibold text-white/90 mb-2">
                  EVENT TYPE *
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  required
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-midnight border border-sacred-gold/20 rounded text-white focus:outline-none focus:border-sacred-gold transition-colors"
                >
                  <option value="">Select event type</option>
                  <option value="festival">Festival</option>
                  <option value="club">Club/Venue</option>
                  <option value="private">Private Event</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Date & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className="block text-sm font-semibold text-white/90 mb-2">
                  EVENT DATE
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-midnight border border-sacred-gold/20 rounded text-white focus:outline-none focus:border-sacred-gold transition-colors"
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-semibold text-white/90 mb-2">
                  LOCATION *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-midnight border border-sacred-gold/20 rounded text-white placeholder:text-white/40 focus:outline-none focus:border-sacred-gold transition-colors"
                  placeholder="City, Country"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-white/90 mb-2">
                MESSAGE *
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 bg-midnight border border-sacred-gold/20 rounded text-white placeholder:text-white/40 focus:outline-none focus:border-sacred-gold transition-colors resize-none"
                placeholder="Tell us about your event, expected attendance, budget, and any other details..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <button
                type="submit"
                className="px-12 py-4 bg-sacred-gold text-midnight font-bold text-sm tracking-wider rounded hover:bg-amber-glow transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sacred-gold focus:ring-offset-2 focus:ring-offset-midnight"
              >
                SEND INQUIRY
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-display text-sacred-gold mb-4">DIRECT CONTACT</h3>
            <div className="space-y-2 text-white/70">
              <p>Email: booking@soul-panther.com</p>
              <p>Response time: 24-48 hours</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <h3 className="text-xl font-display text-sacred-gold mb-4">CONNECT</h3>
            <div className="flex justify-center md:justify-end gap-6">
              <a
                href="https://instagram.com/soulpanthermusic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-sacred-gold transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://open.spotify.com/artist/soulpanther"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-sacred-gold transition-colors"
              >
                Spotify
              </a>
              <a
                href="https://youtube.com/@soulpanther"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-sacred-gold transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
