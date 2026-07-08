"use client"
import React, { useState } from 'react'

export const VolunteerForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      mobile: formData.get('mobile'),
      city: formData.get('city'),
      state: formData.get('state'),
      interest: formData.get('interest'),
    };

    try {
      const res = await fetch('/api/volunteer-registrations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <div className="bg-white rounded-3xl p-8 border border-green-200 shadow-sm h-full flex flex-col justify-center">
      <h3 className="text-xl font-semibold mb-8 text-brand-text-dark">Volunteer registration form</h3>
      
      {status === 'success' ? (
        <div className="text-center p-8 bg-green-50 rounded-2xl text-brand-primary">
          <svg className="w-16 h-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h4 className="text-xl font-bold mb-2">Thank you!</h4>
          <p>Your registration has been submitted successfully. Our team will contact you soon.</p>
          <button 
            onClick={() => setStatus('idle')}
            className="mt-6 text-brand-primary underline hover:text-green-800"
          >
            Submit another registration
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            name="fullName" 
            required
            placeholder="Full Name" 
            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all"
          />
          <input 
            type="email" 
            name="email" 
            required
            placeholder="Email" 
            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all"
          />
          <input 
            type="tel" 
            name="mobile" 
            required
            placeholder="Mobile" 
            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all"
          />
          <input 
            type="text" 
            name="city" 
            required
            placeholder="City" 
            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all"
          />
          <input 
            type="text" 
            name="state" 
            required
            placeholder="State" 
            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all"
          />
          <textarea 
            name="interest" 
            required
            placeholder="Your Interest" 
            rows={4}
            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all resize-none"
          ></textarea>
          
          {status === 'error' && (
            <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
          )}

          <div className="pt-4 text-center">
            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="bg-brand-primary hover:bg-brand-primary/90 text-white font-bold py-3 px-12 rounded-full transition-transform hover:-translate-y-1 shadow-md disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {status === 'loading' ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
