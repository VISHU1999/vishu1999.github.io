import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Contact = ({ data }) => {
  // form state
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  // Initialize EmailJS - must be before conditional return
  useEffect(() => {
    emailjs.init('Y7piF5J5Grb1Z-IYc');
  }, []);

  if (!data) return null;

  const { city } = data.address || {};
  const { phone } = data || {};
  const message = data.contactmessage || 'Get in touch';
  const social = data.social || [];

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };
  const resetForm = () => {
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setStatus(null)
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the errors in the form!");
      return;
    }
    
    setStatus('sending');
    
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      subject: form.subject || 'Contact Form Message',
      message: form.message,
      to_name: 'Vivek Sharma',
    };
    
    toast.info("Sending message...");
    
    emailjs.send('service_rrnv1t5', 'template_zztekd6', templateParams, 'Y7piF5J5Grb1Z-IYc')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('sent');
        resetForm();
        setTimeout(() => {
          toast.success("Message sent successfully!");
          setStatus(null);
        }, 800);
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setStatus('error');
        toast.error(`Failed to send message: ${err.text || 'Please try again later'}`);
        setTimeout(() => {
          setStatus(null);
        }, 2000);
      });
  }

  return (
    <section id="contact" className="contact-section">
      <ToastContainer position="top-right" autoClose={2500} />
      <Fade bottom duration={200}>
        <div className="contact-header">
          <h2>Contact</h2>
          <p className="lead">{message}</p>
        </div>
      </Fade>

      <div className="contact-grid">
        <Slide left duration={400}>
          <div className="contact-card">
            <h3>Contact Info</h3>

            <div className="contact-row">
              <strong>Email</strong>
              <a href="mailto:viveksharma4318@gmail.com" className="mono-link">
                viveksharma4318@gmail.com
              </a>
            </div>

            <div className="contact-row">
              <strong>Phone</strong>
              <span className="mono-link">{phone || '—'}</span>
            </div>

            <div className="contact-row">
              <strong>Location</strong>
              <span>{city || '—'}</span>
            </div>

            <div className="social-list">
              {social.map((n) => (
                <a
                  key={n.name}
                  href={n.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={n.name}
                >
                  <i className={n.className} /> <span>{n.name}</span>
                </a>
              ))}
            </div>
          </div>
        </Slide>

        <Slide right duration={400}>
          <div className="contact-form-card">
            <h3>Send a Message</h3>

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
                {errors.name && <small className="error">{errors.name}</small>}
              </div>

              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
                {errors.email && <small className="error">{errors.email}</small>}
              </div>

              <div className="form-row">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Subject (optional)"
                />
              </div>

              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Write your message..."
                />
                {errors.message && <small className="error">{errors.message}</small>}
              </div>

              <div className="form-actions">
                <button type="submit" className="btn" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'sent' && <span className="success">Message sent — thanks!</span>}
              </div>
            </form>

            {/* <div className="map-placeholder" aria-hidden> */}
              {/* Replace with embedded map or iframe if you want */}
              {/* <div className="map-box">Map Placeholder</div> */}
            {/* </div> */}
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default Contact;
