import React, { useState } from 'react';
import { Brain } from 'lucide-react';

const PsychologyHub = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 pt-20 pb-12">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-black mb-4">
            Making Psychology literature actionable for you
          </h1>
        </div>

        {/* Core Topics */}
        <div className="space-y-8 mb-20">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-xl text-black mb-3">The Role of Transcendence</h3>
            <p className="text-gray-700">How thinking beyond yourself gives you meaning</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-xl text-black mb-3">What Actually Makes You Content</h3>
            <p className="text-gray-700">insights into genuine satisfaction</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-xl text-black mb-3">My Personal Journey</h3>
            <p className="text-gray-700">Lessons learned on the path</p>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-black text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-6">Get actionable psychology insights</h2>
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full px-4 py-3 mb-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-gray-600"
                required
              />
              <button
                type="submit"
                className="w-full bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-100"
              >
                Join the waitlist
              </button>
            </form>
          ) : (
            <div className="text-green-400 font-bold">
              You're in! First insights coming soon.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PsychologyHub;