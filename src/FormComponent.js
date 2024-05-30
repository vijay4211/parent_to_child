


import React, { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState([
    { id: 1, name: 'input1', value: '' },
    { id: 2, name: 'input2', value: '' },
    { id: 3, name: 'input3', value: '' }
  ]);

  const handleChange = (event, id) => {
    const updatedFormData = formData.map(item => {
      if (item.id === id) {
        return { ...item, value: event.target.value };
      }
      return item;
    });
    setFormData(updatedFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Here you can handle form submission logic
  };

  return (
    <form onSubmit={handleSubmit}>
      {formData.map(item => (
        <input
          key={item.id}
          type="text"
          name={item.name}
          value={item.value}
          onChange={(event) => handleChange(event, item.id)}
          placeholder={`Enter ${item.name}`}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;

