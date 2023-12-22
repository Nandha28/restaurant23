// ContactUs.js
import React, { useState } from 'react';
import { styled } from '@mui/system';

const RootContainer = styled('div')({
  maxWidth: 600,
  margin: 'auto',
  padding: 20,
  border: '1px solid #ddd',
  borderRadius: 8,
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  textAlign: 'center',
});

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Input = styled('input')({
  width: '100%',
  padding: '12px',
  marginBottom: '16px',
  border: '1px solid #ddd',
  borderRadius: 4,
  fontSize: '16px',
  boxSizing: 'border-box',
});

const Textarea = styled('textarea')({
  width: '100%',
  padding: '12px',
  marginBottom: '16px',
  border: '1px solid #ddd',
  borderRadius: 4,
  fontSize: '16px',
  boxSizing: 'border-box',
});

const SubmitButton = styled('button')({
  width: '100%',
  backgroundColor: '#4caf50',
  color: '#fff',
  padding: '14px',
  fontSize: '18px',
  borderRadius: 4,
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: '#45a049',
  },
});

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // You can add logic to send the form data to your backend or handle it as needed
  };

  return (
    <RootContainer>
      <h1>Contact Us</h1>
      <p>We would love to hear from you! Feel free to reach out through the following contact methods:</p>
      {/* Your contact details here */}
      <p>Alternatively, you can use the contact form below to send us a message:</p>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <Textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </RootContainer>
  );
};

export default ContactUs;
