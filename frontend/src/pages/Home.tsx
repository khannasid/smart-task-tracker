import React from "react";

export default function Home(): React.JSX.Element {
    return (
        <>
      <main className="bg-gray-50">
        <section className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Organize your tasks. Boost your productivity.
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Smart Task Tracker helps you plan, track, and analyze your work with ease.
          </p>
          <a
            href="/signup"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700"
          >
            Get Started
          </a>
        </section>

        <section className="bg-white py-20">
          <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
            <div className="p-6 shadow-lg rounded-lg bg-gray-50">
              <h3 className="text-xl font-bold mb-2">Task Management</h3>
              <p className="text-gray-600">Create, update, and manage tasks seamlessly.</p>
            </div>
            <div className="p-6 shadow-lg rounded-lg bg-gray-50">
              <h3 className="text-xl font-bold mb-2">Progress Tracking</h3>
              <p className="text-gray-600">Track deadlines, status, and priorities in real-time.</p>
            </div>
            <div className="p-6 shadow-lg rounded-lg bg-gray-50">
              <h3 className="text-xl font-bold mb-2">Analytics</h3>
              <p className="text-gray-600">Visualize performance with AI-driven insights.</p>
            </div>
          </div>
        </section>
      </main>
    </>
    );
}