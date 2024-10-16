import React, { useState } from 'react';
import './App.css';

function App() {
  const [resumeData, setResumeData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    professionalSummary: '',
    education: [],
    skills: [],
    careerObjective: '',
    experience: [],
    achievements: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setResumeData({ ...resumeData, [name]: value });
  };

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [...resumeData.education, { degree: '', institution: '', years: '' }],
    });
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...resumeData.education];
    updatedEducation[index][field] = value;
    setResumeData({ ...resumeData, education: updatedEducation });
  };

  const removeEducation = (index) => {
    const updatedEducation = [...resumeData.education];
    updatedEducation.splice(index, 1);
    setResumeData({ ...resumeData, education: updatedEducation });
  };

  const addSkill = () => {
    setResumeData({
      ...resumeData,
      skills: [...resumeData.skills, ''],
    });
  };

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...resumeData.skills];
    updatedSkills[index] = value;
    setResumeData({ ...resumeData, skills: updatedSkills });
  };

  const removeSkill = (index) => {
    const updatedSkills = [...resumeData.skills];
    updatedSkills.splice(index, 1);
    setResumeData({ ...resumeData, skills: updatedSkills });
  };

  const addExperience = () => {
    setResumeData({
      ...resumeData,
      experience: [...resumeData.experience, { title: '', company: '', years: '' }],
    });
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = [...resumeData.experience];
    updatedExperience[index][field] = value;
    setResumeData({ ...resumeData, experience: updatedExperience });
  };

  const removeExperience = (index) => {
    const updatedExperience = [...resumeData.experience];
    updatedExperience.splice(index, 1);
    setResumeData({ ...resumeData, experience: updatedExperience });
  };

  const addAchievement = () => {
    setResumeData({
      ...resumeData,
      achievements: [...resumeData.achievements, ''],
    });
  };

  const handleAchievementChange = (index, value) => {
    const updatedAchievements = [...resumeData.achievements];
    updatedAchievements[index] = value;
    setResumeData({ ...resumeData, achievements: updatedAchievements });
  };

  const removeAchievement = (index) => {
    const updatedAchievements = [...resumeData.achievements];
    updatedAchievements.splice(index, 1);
    setResumeData({ ...resumeData, achievements: updatedAchievements });
  };

  const downloadResume = () => {
    // Implement logic to generate a PDF or other document format
    // using a library like jsPDF or html2canvas
    // and trigger a download.
    console.log('Download Resume functionality is not implemented yet.');
  };

  return (
    <div className="resume-builder">
      <h2>Resume Builder</h2>
      <div className="personal-info">
        <h3>Personal Information</h3>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={resumeData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={resumeData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={resumeData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="linkedin">LinkedIn:</label>
          <input
            type="text"
            className="form-control"
            id="linkedin"
            name="linkedin"
            value={resumeData.linkedin}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-section">
        <h3>Professional Summary</h3> 
        <textarea
          id="professionalSummary"
          name="professionalSummary"
          value={resumeData.professionalSummary}
          onChange={handleChange}
        />
      </div>
      <div className="form-section">
        <h3>Education</h3>
        {resumeData.education.map((item, index) => (
          <div key={index} className="education-item">
            <label htmlFor={`degree-${index}`}>Degree:</label>
            <input
              type="text"
              id={`degree-${index}`}
              name="degree"
              value={item.degree}
              onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
            />
            <label htmlFor={`institution-${index}`}>Institution:</label>
            <input
              type="text"
              id={`institution-${index}`}
              name="institution"
              value={item.institution}
              onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
            />
            <label htmlFor={`years-${index}`}>Years:</label>
            <input
              type="text"
              id={`years-${index}`}
              name="years"
              value={item.years}
              onChange={(e) => handleEducationChange(index, 'years', e.target.value)}
            />
            <button onClick={() => removeEducation(index)}>Remove</button>
          </div>
        ))}
        <button onClick={addEducation}>Add Education</button>
      </div>
      <div className="form-section">
        <h3>Skills</h3>
        {resumeData.skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <label htmlFor={`skill-${index}`}>Skill:</label> <input
              type="text"
              className="form-control"
              id={`skill-${index}`}
              name="skill"
              value={skill}
              onChange={(e) => handleSkillChange(index, e.target.value)}
            />
            <button onClick={() => removeSkill(index)}>Remove</button>
          </div>
        ))}
        <button onClick={addSkill}>Add Skill</button>
      </div>
      <div className="form-section">
        <h3>Career Objective</h3>
        <textarea
          id="careerObjective"
          name="careerObjective"
          value={resumeData.careerObjective}
          onChange={handleChange}
        />
      </div>
      <div className="form-section">
        <h3>Experience & Internships</h3>
        {resumeData.experience.map((item, index) => (
          <div key={index} className="experience-item">
            <label htmlFor={`title-${index}`}>Title:</label>
            <input
              type="text"
              id={`title-${index}`}
              name="title"
              value={item.title}
              onChange={(e) => handleExperienceChange(index, 'title', e.target.value)}
            />
            <label htmlFor={`company-${index}`}>Company:</label>
            <input
              type="text"
              id={`company-${index}`}
              name="company"
              value={item.company}
              onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
            />
            <label htmlFor={`years-${index}`}>Years:</label>
            <input
              type="text"
              id={`years-${index}`}
              name="years"
              value={item.years}
              onChange={(e) => handleExperienceChange(index, 'years', e.target.value)}
            />
            <button onClick={() => removeExperience(index)}>Remove</button>
          </div>
        ))}
        <button onClick={addExperience}>Add Experience</button>
      </div>
      <div className="form-section">
        <h3>Achievements</h3>
        {resumeData.achievements.map((achievement, index) => (
          <div key={index} className="achievement-item">
            <label htmlFor={`achievement-${index}`}>Achievement:</label>
            <input
              type="text"
              className="form-control"
              id={`achievement-${index}`}
              name="achievement"
              value={achievement}
              onChange={(e) => handleAchievementChange(index, e.target.value)}
            />
            <button onClick={() => removeAchievement(index)}>Remove</button>
          </div>
        ))}
        <button onClick={addAchievement}>Add Achievement</button>
      </div>
      <div className="resume-preview">
        {/* Display resume content dynamically using resumeData */}
        <h3>Resume Preview</h3>
        <div>
          <strong>Name:</strong> {resumeData.name}
        </div>
        <div>
          <strong>Email:</strong> {resumeData.email}
        </div>
        <div>
          <strong>Phone:</strong> {resumeData.phone}
        </div>
        <div>
          <strong>LinkedIn:</strong> {resumeData.linkedin}
        </div>
        <div>
          <strong>Professional Summary:</strong> {resumeData.professionalSummary}
        </div>
        <h3>Education</h3>
        <ul>
          {resumeData.education.map((item, index) => (
            <li key={index}>
              {item.degree} - {item.institution} ({item.years})
            </li>
          ))}
        </ul>
        <h3>Skills</h3>
        <ul>
          {resumeData.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <div>
          <strong>Career Objective:</strong> {resumeData.careerObjective}
        </div>
        <h3>Experience & Internships</h3>
        <ul>
          {resumeData.experience.map((item, index) => (
            <li key={index}>
              {item.title} - {item.company} ({item.years})
            </li>
          ))}
        </ul>
        <h3>Achievements</h3>
        <ul>
          {resumeData.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
      <button className="btn" onClick={downloadResume}>
        Download Resume
      </button>
    </div>
  );
}

export default App;