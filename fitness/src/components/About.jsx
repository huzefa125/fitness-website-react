import React from 'react';
import Navbar from './Navbar';

function About() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">About Our Fitness Journey</h1>
        <p className="text-lg text-gray-600 mb-6">
          At <span className="font-semibold text-black">Fitness</span>, we believe fitness is more than just a routine—it's a lifestyle. 
          Our platform is dedicated to helping people of all levels achieve their goals, stay motivated, and train smarter every day.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-left">
          <div>
            <h2 className="text-2xl font-semibold mb-2">💡 Our Mission</h2>
            <p className="text-gray-600">
              To empower individuals by providing the best training resources, personalized workout plans, and professional advice for a healthier tomorrow.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🏋️ What We Offer</h2>
            <p className="text-gray-600">
              From strength training and cardio guides to diet tips and live tracking, our tools are designed for both beginners and seasoned athletes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🌍 Our Community</h2>
            <p className="text-gray-600">
              Join thousands of fitness enthusiasts who share progress, challenges, and victories. Together, we grow stronger.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🚀 Vision</h2>
            <p className="text-gray-600">
              To become the most trusted online fitness companion — accessible, effective, and inspiring.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-2">📩 Got questions?</h3>
          <p className="text-gray-600">Reach out to us at <span className="text-blue-600">support@fitnesshub.com</span></p>
        </div>
      </div>
    </div>
  );
}

export default About;
