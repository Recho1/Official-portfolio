'use client';

import { useState } from 'react';
import { MdClose } from 'react-icons/md';

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
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '15a47df2-2ff0-4f04-8511-76dd8d19dcad', // 👈 REPLACE THIS with your actual key
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Inquiry from ${formData.name}`,
          from_name: formData.name,
          replyto: formData.email,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setStatus('idle');
          onClose();
        }, 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-[#141b2d] border border-[#c9a84c]/30 rounded-2xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#8a86a0] hover:text-[#c9a84c] transition-colors"
        >
          <MdClose className="w-6 h-6" />
        </button>

        <div className="mb-6">
          <h2 className="text-xl font-light text-[#f5f0e8]">Send a Message</h2>
          <p className="text-sm text-[#8a86a0]">Fill in the details and I'll get back to you.</p>
        </div>

        {status === 'success' ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl text-green-500">✓</span>
            </div>
            <p className="text-[#f5f0e8] font-medium">Message Sent!</p>
            <p className="text-sm text-[#8a86a0] mt-1">I'll get back to you soon.</p>
          </div>
        ) : status === 'error' ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl text-red-500">✕</span>
            </div>
            <p className="text-[#f5f0e8] font-medium">Something went wrong</p>
            <p className="text-sm text-[#8a86a0] mt-1">Please try again or email me directly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs text-[#8a86a0] mb-1.5">Your Name *</label>
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
              <label className="block text-xs text-[#8a86a0] mb-1.5">Your Email *</label>
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
              <label className="block text-xs text-[#8a86a0] mb-1.5">Your Message *</label>
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
              disabled={status === 'sending'}
              className="w-full py-3 bg-[#c9a84c] text-[#0a0e1a] font-medium rounded-lg hover:bg-[#b8973a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
