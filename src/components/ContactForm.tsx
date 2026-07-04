'use client';

import { useState } from 'react';
import { MdEmail, MdClose } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Open email with pre-filled content
    const subject = `Portfolio Inquiry from ${formData.name || 'Visitor'}`;
    const body = `Name: ${formData.name || 'Not provided'}\nEmail: ${formData.email || 'Not provided'}\n\nMessage:\n${formData.message || 'No message provided'}`;
    
    window.location.href = `mailto:rachealacio501@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    setIsSubmitting(false);
    setIsSent(true);
    
    // Close after 2 seconds
    setTimeout(() => {
      setIsSent(false);
      onClose();
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-[#141b2d] border border-[#c9a84c]/30 rounded-2xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#8a86a0] hover:text-[#c9a84c] transition-colors"
        >
          <MdClose className="w-6 h-6" />
        </button>

        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-[#c9a84c]/10 flex items-center justify-center">
              <MdEmail className="w-5 h-5 text-[#c9a84c]" />
            </div>
            <h2 className="text-xl font-light text-[#f5f0e8]">Send a Message</h2>
          </div>
          <p className="text-sm text-[#8a86a0]">Fill in the details below and I'll get back to you.</p>
        </div>

        {isSent ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">✓</span>
            </div>
            <p className="text-[#f5f0e8] font-medium">Message Sent!</p>
            <p className="text-sm text-[#8a86a0] mt-1">Opening your email client...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs text-[#8a86a0] mb-1.5">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-2.5 bg-[#0a0e1a] border border-[#c9a84c]/20 rounded-lg text-[#f5f0e8] placeholder-[#8a86a0]/50 focus:outline-none focus:border-[#c9a84c] transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs text-[#8a86a0] mb-1.5">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 bg-[#0a0e1a] border border-[#c9a84c]/20 rounded-lg text-[#f5f0e8] placeholder-[#8a86a0]/50 focus:outline-none focus:border-[#c9a84c] transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs text-[#8a86a0] mb-1.5">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hi Racheal, I'd like to talk about..."
                rows={4}
                className="w-full px-4 py-2.5 bg-[#0a0e1a] border border-[#c9a84c]/20 rounded-lg text-[#f5f0e8] placeholder-[#8a86a0]/50 focus:outline-none focus:border-[#c9a84c] transition-colors resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-[#c9a84c] text-[#0a0e1a] font-medium rounded-lg hover:bg-[#b8973a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
