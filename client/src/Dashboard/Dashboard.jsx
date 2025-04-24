import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, Radar
} from 'recharts';


const dataLine = [
  { date: 'Apr 01', students: 200 },
  { date: 'Apr 05', students: 350 },
  { date: 'Apr 10', students: 500 },
  { date: 'Apr 15', students: 720 },
  { date: 'Apr 20', students: 1023 },
];

const dataBar = [
  { name: 'React', students: 300 },
  { name: 'Vue', students: 150 },
  { name: 'Angular', students: 100 },
];

const dataPie = [
  { name: 'Beginner', value: 400 },
  { name: 'Intermediate', value: 300 },
  { name: 'Expert', value: 300 },
];
const COLORS = ['#fb923c', '#fdba74', '#f97316'];

const dataRadar = [
  { subject: 'Hooks', A: 120 },
  { subject: 'Context', A: 98 },
  { subject: 'Routing', A: 86 },
  { subject: 'State', A: 99 },
  { subject: 'Forms', A: 85 },
];

function Dashboard() {
  return (
    <div>
      <div className="flex-1 flex bg-white flex-col overflow-hidden">
        <header className="bg-orange-500 rounded-md shadow p-4 flex items-center justify-between">
          <h1 className="text-xl text-white font-bold">Welcome to Your Dashboard</h1>
        </header>

        <main className="flex-1 overflow-auto p-6 space-y-12">
          <p className="text-gray-700 text-lg">
            Dashboard content goes here. Add charts, stats, tables, etc.
          </p>

          {/* Line Chart */}
          <div className="bg-white p-4 rounded-2xl shadow w-full max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-orange-600 mb-4">Enrollment Over Time</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dataLine}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="students" stroke="#ea580c" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="bg-white p-4 rounded-2xl shadow w-full max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-orange-600 mb-4">Students by Framework</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dataBar}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="students" fill="#fb923c" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="bg-white p-4 rounded-2xl shadow w-full max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-orange-600 mb-4">Course Levels Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={dataPie} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#fb923c">
                  {dataPie.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Radar Chart */}
          <div className="bg-white p-4 rounded-2xl shadow w-full max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-orange-600 mb-4">Skill Coverage</h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart outerRadius={90} data={dataRadar}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <Radar name="Skills" dataKey="A" stroke="#f97316" fill="#f97316" fillOpacity={0.6} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>

        </main>
      </div>
    </div>
  );
}

export default Dashboard;
