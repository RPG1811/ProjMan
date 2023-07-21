// MemberDetails.js

import React from 'react';

const MemberDetails = ({ member }) => {
  const { memberId, firstName, lastName, email, jobTitle, hourlyRate } = member;

  return (
    <div style={styles.memberDetails}>
      <h3>{firstName} {lastName}</h3>
      <p><strong>Member ID:</strong> {memberId}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Job Title:</strong> {jobTitle}</p>
      <p><strong>Hourly Rate:</strong> ${hourlyRate.toFixed(2)}</p>
    </div>
  );
};

const styles = {
  memberDetails: {
    backgroundColor: '#f0f0f0',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '1rem',
  },
};

export default MemberDetails;
