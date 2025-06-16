import React from 'react';
import { Calendar } from 'lucide-react';

const GoogleFormEmbed = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center md:text-left mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-800">
            Reserve Your Child's Spot
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Secure your place in this exclusive learning experience.
          </p>
        </div>

        {/* Form Wrapper */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Calendar className="w-4 h-4 inline mr-2" />
                Event Selection
              </label>
              <p className="text-sm text-gray-500 mb-4">
                Fill out the Google Form below to register:
              </p>
            </div>

            {/* Embedded Google Form */}
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeKYAOJLnU9YumpUqd0LBJGh9Jq_mGG0v7B8QU7B06Jcr7Yaw/viewform?embedded=true"
                width="100%"
                height="600"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                className="w-full"
                title="Google Form"
                loading="lazy"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleFormEmbed;
