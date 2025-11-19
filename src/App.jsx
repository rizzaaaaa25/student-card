import React from 'react';
import StudentCard from './components/StudentCard';
import { activeStudents, alumni } from './data/students';
import './index.css';

function mostCommonSkill(allStudents) {
  const counts = {};
  allStudents.forEach(s => s.skills.forEach(skill => counts[skill] = (counts[skill] || 0) + 1));
  const sorted = Object.entries(counts).sort((a,b) => b[1] - a[1]);
  return sorted.length ? sorted[0][0] : 'N/A';
}

export default function App() {
  const all = [...activeStudents, ...alumni];
  const total = all.length;
  const activeCount = activeStudents.length;
  const alumniCount = alumni.length;
  const commonSkill = mostCommonSkill(all);

  return (
    <div className="app-container">
      <header className="header">
        <h1>Student Directory 2025</h1>
        <p>Full Stack Development Batch</p>
      </header>

      <section>
        <h2>Active Students</h2>
        <div className="list-grid">
          {activeStudents.map(student => (
            <StudentCard key={student.id} {...student} />
          ))}
        </div>
      </section>

      <section>
        <h2>Alumni</h2>
        <div className="list-grid">
          {alumni.map(student => (
            <StudentCard key={student.id} {...student} />
          ))}
        </div>
      </section>

      <aside className="stats">
        <h3>Directory Statistics</h3>
        <p>Total students: {total}</p>
        <p>Active: {activeCount} | Alumni: {alumniCount}</p>
        <p>Most common skill: {commonSkill}</p>
      </aside>

      <footer className="footer">
        <p>Yenepoya | Full Stack Web Development</p>
        <p>Contact: fathimariza@gmail.com</p>
        <p>© {new Date().getFullYear()} Student Portal</p>
      </footer>
    </div>
  );
}
