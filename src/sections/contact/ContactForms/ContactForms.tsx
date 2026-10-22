'use client';

import React, { useState, useRef } from 'react';
import './ContactForms.css';

interface SalesFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface JobFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  resume: File | null;
  aboutYou: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
  resume?: string;
  aboutYou?: string;
}

const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB
const ALLOWED_EXTENSIONS = ['.pdf', '.doc', '.docx'];

export const ContactForms: React.FC = () => {
  // Tab State: 'sales' | 'jobs'
  const [activeTab, setActiveTab] = useState<'sales' | 'jobs'>('sales');

  // Form State: kept separate when switching tabs
  const [salesData, setSalesData] = useState<SalesFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [jobData, setJobData] = useState<JobFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    resume: null,
    aboutYou: '',
  });

  const [salesErrors, setSalesErrors] = useState<FormErrors>({});
  const [jobErrors, setJobErrors] = useState<FormErrors>({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Email Validation helper
  const isValidEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Phone Validation helper (allows international formats with +, digits, spaces, hyphens)
  const isValidPhone = (phone: string): boolean => {
    return /^[\d\s+\-()]{7,20}$/.test(phone.trim());
  };

  // Handle Sales Input Change
  const handleSalesChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setSalesData((prev) => ({ ...prev, [name]: value }));
    if (salesErrors[name as keyof FormErrors]) {
      setSalesErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Handle Job Input Change
  const handleJobChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setJobData((prev) => ({ ...prev, [name]: value }));
    if (jobErrors[name as keyof FormErrors]) {
      setJobErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Validate and set Resume File
  const handleFileSelection = (file: File | undefined) => {
    if (!file) return;

    const fileExt = '.' + file.name.split('.').pop()?.toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(fileExt)) {
      setJobErrors((prev) => ({
        ...prev,
        resume: 'Invalid file format. Please upload a PDF, DOC, or DOCX file.',
      }));
      return;
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      setJobErrors((prev) => ({
        ...prev,
        resume: 'File exceeds maximum size of 5 MB.',
      }));
      return;
    }

    setJobData((prev) => ({ ...prev, resume: file }));
    setJobErrors((prev) => ({ ...prev, resume: undefined }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    handleFileSelection(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    handleFileSelection(file);
  };

  const removeResume = () => {
    setJobData((prev) => ({ ...prev, resume: null }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Submit Sales Form
  const handleSalesSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitSuccess(null);

    const errors: FormErrors = {};
    if (!salesData.firstName.trim()) errors.firstName = 'First name is required.';
    if (!salesData.lastName.trim()) errors.lastName = 'Last name is required.';
    if (!salesData.email.trim()) {
      errors.email = 'Email address is required.';
    } else if (!isValidEmail(salesData.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!salesData.phone.trim()) {
      errors.phone = 'Phone number is required.';
    } else if (!isValidPhone(salesData.phone)) {
      errors.phone = 'Please enter a valid phone number.';
    }
    if (!salesData.message.trim()) {
      errors.message = 'Please provide details on how we may assist you.';
    }

    if (Object.keys(errors).length > 0) {
      setSalesErrors(errors);
      return;
    }

    setIsSubmitting(true);
    const subject = encodeURIComponent(`Business Inquiry from ${salesData.firstName} ${salesData.lastName}`);
    const body = encodeURIComponent(
      `Name: ${salesData.firstName} ${salesData.lastName}\nEmail: ${salesData.email}\nPhone: ${salesData.phone}\n\nMessage:\n${salesData.message}`
    );
    window.location.href = `mailto:contact@webkorps.com?subject=${subject}&body=${body}`;
    setIsSubmitting(false);
    setSubmitSuccess(
      'Inquiry prepared! Opening your email client to send directly to contact@webkorps.com. You can also reach us directly at contact@webkorps.com.'
    );
    setSalesData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    });
    setSalesErrors({});
  };

  // Submit Job Form
  const handleJobSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitSuccess(null);

    const errors: FormErrors = {};
    if (!jobData.firstName.trim()) errors.firstName = 'First name is required.';
    if (!jobData.lastName.trim()) errors.lastName = 'Last name is required.';
    if (!jobData.email.trim()) {
      errors.email = 'Email address is required.';
    } else if (!isValidEmail(jobData.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!jobData.phone.trim()) {
      errors.phone = 'Phone number is required.';
    } else if (!isValidPhone(jobData.phone)) {
      errors.phone = 'Please enter a valid phone number.';
    }
    if (!jobData.resume) {
      errors.resume = 'Please upload your resume (PDF, DOC, DOCX up to 5 MB).';
    }
    if (!jobData.aboutYou.trim()) {
      errors.aboutYou = 'Please tell us briefly about yourself.';
    }

    if (Object.keys(errors).length > 0) {
      setJobErrors(errors);
      return;
    }

    setIsSubmitting(true);
    const subject = encodeURIComponent(`Job Application: ${jobData.firstName} ${jobData.lastName}`);
    const body = encodeURIComponent(
      `Candidate: ${jobData.firstName} ${jobData.lastName}\nEmail: ${jobData.email}\nPhone: ${jobData.phone}\nResume File: ${jobData.resume?.name || 'Attached'}\n\nAbout You:\n${jobData.aboutYou}`
    );
    window.location.href = `mailto:careers@webkorps.com?subject=${subject}&body=${body}`;
    setIsSubmitting(false);
    setSubmitSuccess(
      `Application prepared! Opening your email client to send to careers@webkorps.com. Please ensure your resume (${jobData.resume?.name || 'file'}) is attached before sending.`
    );
    setJobData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      resume: null,
      aboutYou: '',
    });
    setJobErrors({});
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <section
      id="contact-forms"
      className="wk-contact-forms-section"
      aria-labelledby="contact-forms-heading"
    >
      <div className="wk-contact-forms-container">
        {/* ==========================================================================
            Top Segmented Tab Switcher
            ========================================================================== */}
        <div className="wk-contact-tabs-wrapper">
          <div
            className="wk-contact-tabs"
            role="tablist"
            aria-label="Contact options"
          >
            <button
              type="button"
              role="tab"
              id="tab-sales"
              aria-selected={activeTab === 'sales'}
              aria-controls="panel-sales"
              className={`wk-contact-tab ${activeTab === 'sales' ? 'wk-contact-tab--active' : ''}`}
              onClick={() => {
                setActiveTab('sales');
                setSubmitSuccess(null);
              }}
            >
              For Sales Enquiry
            </button>
            <button
              type="button"
              role="tab"
              id="tab-jobs"
              aria-selected={activeTab === 'jobs'}
              aria-controls="panel-jobs"
              className={`wk-contact-tab ${activeTab === 'jobs' ? 'wk-contact-tab--active' : ''}`}
              onClick={() => {
                setActiveTab('jobs');
                setSubmitSuccess(null);
              }}
            >
              Apply for a Job
            </button>
          </div>
        </div>

        {/* ==========================================================================
            Main Form Card Container
            ========================================================================== */}
        <div className="wk-contact-card">
          {/* Submission Feedback Banner */}
          {submitSuccess && (
            <div className="wk-contact-feedback wk-contact-feedback--success" role="alert">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span>{submitSuccess}</span>
            </div>
          )}

          {/* ========================================================================
              PANEL 1: For Sales Enquiry
              ======================================================================== */}
          {activeTab === 'sales' && (
            <div
              id="panel-sales"
              role="tabpanel"
              aria-labelledby="tab-sales"
              className="wk-contact-panel"
            >
              <div className="wk-contact-header">
                <h2 id="contact-forms-heading" className="wk-contact-title">
                  Ready to <span className="wk-contact-title--accent">Get Started?</span>
                </h2>
                <p className="wk-contact-subtitle">
                  Send us your details, and let&apos;s create something extraordinary together.
                </p>
              </div>

              <form onSubmit={handleSalesSubmit} className="wk-contact-form" noValidate>
                <div className="wk-contact-grid">
                  {/* First Name */}
                  <div className="wk-contact-field">
                    <label htmlFor="sales-firstName" className="wk-contact-label">
                      First Name<span className="wk-contact-required">*</span>
                    </label>
                    <input
                      type="text"
                      id="sales-firstName"
                      name="firstName"
                      autoComplete="given-name"
                      placeholder="Enter First Name"
                      value={salesData.firstName}
                      onChange={handleSalesChange}
                      className={`wk-contact-input ${salesErrors.firstName ? 'wk-contact-input--error' : ''}`}
                      aria-invalid={!!salesErrors.firstName}
                      aria-describedby={salesErrors.firstName ? 'sales-firstName-error' : undefined}
                      required
                    />
                    {salesErrors.firstName && (
                      <span id="sales-firstName-error" className="wk-contact-error">
                        {salesErrors.firstName}
                      </span>
                    )}
                  </div>

                  {/* Last Name */}
                  <div className="wk-contact-field">
                    <label htmlFor="sales-lastName" className="wk-contact-label">
                      Last Name<span className="wk-contact-required">*</span>
                    </label>
                    <input
                      type="text"
                      id="sales-lastName"
                      name="lastName"
                      autoComplete="family-name"
                      placeholder="Enter Last Name"
                      value={salesData.lastName}
                      onChange={handleSalesChange}
                      className={`wk-contact-input ${salesErrors.lastName ? 'wk-contact-input--error' : ''}`}
                      aria-invalid={!!salesErrors.lastName}
                      aria-describedby={salesErrors.lastName ? 'sales-lastName-error' : undefined}
                      required
                    />
                    {salesErrors.lastName && (
                      <span id="sales-lastName-error" className="wk-contact-error">
                        {salesErrors.lastName}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="wk-contact-field">
                    <label htmlFor="sales-email" className="wk-contact-label">
                      Email<span className="wk-contact-required">*</span>
                    </label>
                    <input
                      type="email"
                      id="sales-email"
                      name="email"
                      autoComplete="email"
                      placeholder="Enter Email"
                      value={salesData.email}
                      onChange={handleSalesChange}
                      className={`wk-contact-input ${salesErrors.email ? 'wk-contact-input--error' : ''}`}
                      aria-invalid={!!salesErrors.email}
                      aria-describedby={salesErrors.email ? 'sales-email-error' : undefined}
                      required
                    />
                    {salesErrors.email && (
                      <span id="sales-email-error" className="wk-contact-error">
                        {salesErrors.email}
                      </span>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="wk-contact-field">
                    <label htmlFor="sales-phone" className="wk-contact-label">
                      Phone Number<span className="wk-contact-required">*</span>
                    </label>
                    <input
                      type="tel"
                      id="sales-phone"
                      name="phone"
                      autoComplete="tel"
                      placeholder="Enter Phone Number"
                      value={salesData.phone}
                      onChange={handleSalesChange}
                      className={`wk-contact-input ${salesErrors.phone ? 'wk-contact-input--error' : ''}`}
                      aria-invalid={!!salesErrors.phone}
                      aria-describedby={salesErrors.phone ? 'sales-phone-error' : undefined}
                      required
                    />
                    {salesErrors.phone && (
                      <span id="sales-phone-error" className="wk-contact-error">
                        {salesErrors.phone}
                      </span>
                    )}
                  </div>
                </div>

                {/* Full Width Textarea */}
                <div className="wk-contact-field wk-contact-field--full">
                  <label htmlFor="sales-message" className="wk-contact-label">
                    How May We Assist You<span className="wk-contact-required">*</span>
                  </label>
                  <textarea
                    id="sales-message"
                    name="message"
                    rows={5}
                    placeholder="Briefly describe your requirements"
                    value={salesData.message}
                    onChange={handleSalesChange}
                    className={`wk-contact-textarea ${salesErrors.message ? 'wk-contact-textarea--error' : ''}`}
                    aria-invalid={!!salesErrors.message}
                    aria-describedby={salesErrors.message ? 'sales-message-error' : undefined}
                    required
                  />
                  {salesErrors.message && (
                    <span id="sales-message-error" className="wk-contact-error">
                      {salesErrors.message}
                    </span>
                  )}
                </div>

                {/* Centered Submit Button */}
                <div className="wk-contact-action">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="wk-contact-submit-btn"
                  >
                    <span>{isSubmitting ? 'Submitting...' : 'Submit'}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* ========================================================================
              PANEL 2: Apply for a Job
              ======================================================================== */}
          {activeTab === 'jobs' && (
            <div
              id="panel-jobs"
              role="tabpanel"
              aria-labelledby="tab-jobs"
              className="wk-contact-panel"
            >
              <div className="wk-contact-header">
                <h2 id="contact-forms-heading" className="wk-contact-title">
                  Join <span className="wk-contact-title--accent">Our Team</span>
                </h2>
                <p className="wk-contact-subtitle">
                  Apply today and grow your career with us.
                </p>
              </div>

              <form onSubmit={handleJobSubmit} className="wk-contact-form" noValidate>
                <div className="wk-contact-grid">
                  {/* First Name */}
                  <div className="wk-contact-field">
                    <label htmlFor="job-firstName" className="wk-contact-label">
                      First Name<span className="wk-contact-required">*</span>
                    </label>
                    <input
                      type="text"
                      id="job-firstName"
                      name="firstName"
                      autoComplete="given-name"
                      placeholder="Enter First Name"
                      value={jobData.firstName}
                      onChange={handleJobChange}
                      className={`wk-contact-input ${jobErrors.firstName ? 'wk-contact-input--error' : ''}`}
                      aria-invalid={!!jobErrors.firstName}
                      aria-describedby={jobErrors.firstName ? 'job-firstName-error' : undefined}
                      required
                    />
                    {jobErrors.firstName && (
                      <span id="job-firstName-error" className="wk-contact-error">
                        {jobErrors.firstName}
                      </span>
                    )}
                  </div>

                  {/* Last Name */}
                  <div className="wk-contact-field">
                    <label htmlFor="job-lastName" className="wk-contact-label">
                      Last Name<span className="wk-contact-required">*</span>
                    </label>
                    <input
                      type="text"
                      id="job-lastName"
                      name="lastName"
                      autoComplete="family-name"
                      placeholder="Enter Last Name"
                      value={jobData.lastName}
                      onChange={handleJobChange}
                      className={`wk-contact-input ${jobErrors.lastName ? 'wk-contact-input--error' : ''}`}
                      aria-invalid={!!jobErrors.lastName}
                      aria-describedby={jobErrors.lastName ? 'job-lastName-error' : undefined}
                      required
                    />
                    {jobErrors.lastName && (
                      <span id="job-lastName-error" className="wk-contact-error">
                        {jobErrors.lastName}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="wk-contact-field">
                    <label htmlFor="job-email" className="wk-contact-label">
                      Email<span className="wk-contact-required">*</span>
                    </label>
                    <input
                      type="email"
                      id="job-email"
                      name="email"
                      autoComplete="email"
                      placeholder="Enter Email"
                      value={jobData.email}
                      onChange={handleJobChange}
                      className={`wk-contact-input ${jobErrors.email ? 'wk-contact-input--error' : ''}`}
                      aria-invalid={!!jobErrors.email}
                      aria-describedby={jobErrors.email ? 'job-email-error' : undefined}
                      required
                    />
                    {jobErrors.email && (
                      <span id="job-email-error" className="wk-contact-error">
                        {jobErrors.email}
                      </span>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="wk-contact-field">
                    <label htmlFor="job-phone" className="wk-contact-label">
                      Phone Number<span className="wk-contact-required">*</span>
                    </label>
                    <input
                      type="tel"
                      id="job-phone"
                      name="phone"
                      autoComplete="tel"
                      placeholder="Enter Phone Number"
                      value={jobData.phone}
                      onChange={handleJobChange}
                      className={`wk-contact-input ${jobErrors.phone ? 'wk-contact-input--error' : ''}`}
                      aria-invalid={!!jobErrors.phone}
                      aria-describedby={jobErrors.phone ? 'job-phone-error' : undefined}
                      required
                    />
                    {jobErrors.phone && (
                      <span id="job-phone-error" className="wk-contact-error">
                        {jobErrors.phone}
                      </span>
                    )}
                  </div>
                </div>

                {/* Two Columns: Upload Resume (Left) and About You (Right) */}
                <div className="wk-contact-grid wk-contact-grid--bottom">
                  {/* Upload Resume Dropzone */}
                  <div className="wk-contact-field">
                    <label htmlFor="job-resume-input" className="wk-contact-label">
                      Upload Resume<span className="wk-contact-required">*</span>
                    </label>
                    <div
                      className={`wk-contact-dropzone ${isDragging ? 'wk-contact-dropzone--dragging' : ''} ${jobErrors.resume ? 'wk-contact-dropzone--error' : ''}`}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <input
                        type="file"
                        ref={fileInputRef}
                        id="job-resume-input"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="wk-contact-file-input"
                        aria-describedby={jobErrors.resume ? 'job-resume-error' : undefined}
                      />

                      <div className="wk-contact-dropzone-prompt">
                        <span>Drag &amp; drop your file here or </span>
                        <button
                          type="button"
                          className="wk-contact-browse-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            fileInputRef.current?.click();
                          }}
                        >
                          Browse
                        </button>
                      </div>

                      <span className="wk-contact-dropzone-specs">
                        Supported file format: .pdf, .doc, .docx Maximum file size: 5 MB
                      </span>
                    </div>

                    {/* Uploaded File Indicator */}
                    {jobData.resume && (
                      <div className="wk-contact-uploaded-file-row">
                        <span className="wk-contact-uploaded-label">Uploaded File</span>
                        <span className="wk-contact-uploaded-chip">
                          <span className="wk-contact-uploaded-name">{jobData.resume.name}</span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeResume();
                            }}
                            className="wk-contact-remove-file-btn"
                            aria-label={`Remove ${jobData.resume.name}`}
                          >
                            &times;
                          </button>
                        </span>
                      </div>
                    )}

                    {jobErrors.resume && (
                      <span id="job-resume-error" className="wk-contact-error">
                        {jobErrors.resume}
                      </span>
                    )}
                  </div>

                  {/* About You Textarea */}
                  <div className="wk-contact-field">
                    <label htmlFor="job-aboutYou" className="wk-contact-label">
                      About You<span className="wk-contact-required">*</span>
                    </label>
                    <textarea
                      id="job-aboutYou"
                      name="aboutYou"
                      rows={5}
                      placeholder="Tell us about yourself..."
                      value={jobData.aboutYou}
                      onChange={handleJobChange}
                      className={`wk-contact-textarea wk-contact-textarea--job ${jobErrors.aboutYou ? 'wk-contact-textarea--error' : ''}`}
                      aria-invalid={!!jobErrors.aboutYou}
                      aria-describedby={jobErrors.aboutYou ? 'job-aboutYou-error' : undefined}
                      required
                    />
                    {jobErrors.aboutYou && (
                      <span id="job-aboutYou-error" className="wk-contact-error">
                        {jobErrors.aboutYou}
                      </span>
                    )}
                  </div>
                </div>

                {/* Centered Submit Button */}
                <div className="wk-contact-action">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="wk-contact-submit-btn"
                  >
                    <span>{isSubmitting ? 'Submitting...' : 'Submit'}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* ========================================================================
              Shared Contact Information Row (Exact Match from Screenshot)
              ======================================================================== */}
          <div className="wk-contact-footer-row">
            <div className="wk-contact-footer-left">
              <span className="wk-contact-footer-heading">For Sales Enquiry</span>
            </div>

            <div className="wk-contact-footer-right">
              {/* Phone Link */}
              <a
                href="tel:+918458909134"
                className="wk-contact-info-item"
                aria-label="Call +91 84589 09134 (India)"
              >
                <span className="wk-contact-info-icon-circle" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <span className="wk-contact-info-text">+91 84589 09134 (India)</span>
              </a>

              {/* Email Link */}
              <a
                href="mailto:contact@webkorps.com"
                className="wk-contact-info-item"
                aria-label="Send email to contact@webkorps.com"
              >
                <span className="wk-contact-info-icon-circle" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <span className="wk-contact-info-text">contact@webkorps.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForms;
