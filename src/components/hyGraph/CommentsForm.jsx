"use client";
import React, { useState, useEffect } from 'react';
import { submitComment } from '/src/services';

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', comment: '', storeData: false });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const initialFormData = {
      name: window.localStorage.getItem('name') || '',
      email: window.localStorage.getItem('email') || '',
      storeData: window.localStorage.getItem('name') || window.localStorage.getItem('email') ? true : false,
    };
    setFormData(initialFormData);
  }, []);

  if (!isMounted) {
    // Prevent rendering until client-side logic is ready
    return null;
  }

  const onInputChange = (e) => {
    const { target } = e;
    setFormData((prevState) => ({
      ...prevState,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    }));
  };

  const handlePostSubmission = () => {
    setError(false);
    const { name, email, comment, storeData } = formData;

    if (!name || !email || !comment) {
      setError(true);
      return;
    }

    const commentObj = { name, email, comment, slug };

    if (storeData) {
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('email', email);
    } else {
      window.localStorage.removeItem('name');
      window.localStorage.removeItem('email');
    }

    submitComment(commentObj).then((res) => {
      if (res.createComment) {
        setFormData({ name: '', email: '', comment: '', storeData: false });
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      }
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Leave a Reply</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea value={formData.comment} onChange={onInputChange} className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" name="comment" placeholder="Comment" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input type="text" value={formData.name} onChange={onInputChange} className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Name" name="name" />
        <input type="email" value={formData.email} onChange={onInputChange} className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Email" name="email" />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input checked={formData.storeData} onChange={onInputChange} type="checkbox" id="storeData" name="storeData" />
          <label className="text-gray-500 cursor-pointer" htmlFor="storeData"> Save my name, email in this browser for the next time I comment.</label>
        </div>
      </div>
      {error && <p className="text-xs text-red-500">All fields are mandatory</p>}
      <div className="mt-8">
        <button type="button" onClick={handlePostSubmission} className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Post Comment</button>
        {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500">Comment submitted for review</span>}
      </div>
    </div>
  );
};

export default CommentsForm;
