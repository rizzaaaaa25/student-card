import React from 'react';
import './StudentCard.css'; // optional: create component-specific CSS

export default function StudentCard({ name, rollNumber, course, email, skills, isActive }) {
  return (
    <div className="student-card">
      <div className="card-header">
        <h3>{name}</h3>
        <span className={`status-badge ${isActive ? 'active' : 'inactive'}`}>
          {isActive ? 'Active' : 'Inactive'}
        </span>
      </div>

      <p><strong>Roll:</strong> {rollNumber}</p>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>

      <div className="skills">
        {skills.map((skill, idx) => (
          <span key={skill + idx} className="skill-badge">{skill}</span>
        ))}
      </div>
    </div>
  );
}
