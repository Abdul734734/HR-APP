import React from 'react';

const Person = ({ name, title, salary, phone, email, animal }) => {
    return ( <div className="person-card person">
        <h2 className="person-name">{name}</h2>
        <p className="person-title">{title}</p>
        <p className="person-salary">Salary: ${salary}</p>
        <p className="person-phone">Phone: {phone}</p>
        <p className="person-email">Email: {email}</p>
        <p className="person-animal">Favorite Animal: {animal}</p>
      </div>
    );
};

export default Person;