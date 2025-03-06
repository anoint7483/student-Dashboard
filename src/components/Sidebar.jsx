import { useState } from 'react';

const Sidebar = () => {
  const notices = [
    {
      title: 'Prelim Payment Due',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam explicabo.',
      fileUrl: '/files/prelim-payment.pdf',
    },
    {
      title: 'Exam Schedule',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur.',
      fileUrl: '/files/exam-schedule.pdf',
    },
    {
      title: 'Assignment Submission',
      content: 'Please submit your assignment by the due date. Late submissions will not be accepted.',
      fileUrl: '/files/assignment-submission.pdf',
    },
    // Add more notices as needed
  ];

  const handleDownload = (fileUrl) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileUrl.split('/').pop();
    link.click();
  };

  return (
    <div className="sidebar">
      <div className="notice">
        <div className="head">
          <div className="title">
            <h4>Notices</h4>
          </div>
        </div>

        <div className="content">
          {notices.map((notice, index) => (
            <div
              key={index}
              className="notice-card"
            >
              <div className="content-title">
                <h5>{notice.title}</h5>
              </div>
              <div className="content-text">
                <p>{notice.content}</p>
              </div>
              <div
                className="download-button"
                onClick={() => handleDownload(notice.fileUrl)}
              >
                Download
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
