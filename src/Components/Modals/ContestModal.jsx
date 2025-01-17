import React, { useState } from 'react';
import { X, Upload, Loader2 } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';
import { useAuth } from '../../Pages/Contexts/AuthContext';
import API_URL from '../../Pages/Constants/Constants';

const ContestModal = ({ isOpen, onClose, setContests }) => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    coverPhoto: null,
    description: '',
    startDate: '',
    endDate: '',
    contestants: []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const { currentUser } = useAuth();

  // Form handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCoverPhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        coverPhoto: file,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      if (!formData.name || !formData.description || !formData.startDate || !formData.endDate) {
        throw new Error('Please fill in all required fields');
      }

      if (!formData.coverPhoto) {
        throw new Error('Please select a cover photo');
      }

      if (!currentUser) {
        throw new Error('User is not logged in. Please login again.');
      }

      const submitData = new FormData();
      submitData.append('userId', currentUser.id);
      submitData.append('name', formData.name);
      submitData.append('description', formData.description);
      submitData.append('startDate', formData.startDate);
      submitData.append('endDate', formData.endDate);
      submitData.append('coverPhoto', formData.coverPhoto);

      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Authentication token not found. Please login again.');
      }

      const response = await axios.post(`${API_URL}/contests`, submitData, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.data?.success) {
        setContests((prev) => [...prev, response.data.data]);
        setFormData({
          name: '',
          coverPhoto: null,
          description: '',
          startDate: '',
          endDate: '',
          contestants: [],
        });
        onClose();
        toast.success('Contest created successfully!');
      } else {
        throw new Error(response.data?.error || 'Failed to create contest');
      }
    } catch (err) {
      console.error('Error submitting contest:', err);
      setError(err.message || 'Failed to create contest. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render Input Field helper
  const renderField = ({ label, name, type = 'text', ...props }) => (
    <div className="space-y-1 sm:space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-slate-50">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleInputChange}
          className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          {...props}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleInputChange}
          className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          {...props}
        />
      )}
    </div>
  );

  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center p-4 ${
        !isOpen ? 'hidden' : ''
      }`}
    >
      <div className="bg-custom-blue rounded-lg w-full max-w-lg mx-auto overflow-y-auto max-h-[90vh] shadow-xl">
        <div className="p-4 sm:p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg sm:text-xl font-semibold text-slate-50">Create Contest</h1>
            <button 
              onClick={onClose}
              className="text-slate-300 hover:text-slate-100 transition-colors p-1"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 sm:p-4 bg-red-50 text-red-600 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Contest Name */}
            {renderField({
              label: 'Contest Name',
              name: 'name',
              required: true
            })}

            {/* Description */}
            {renderField({
              label: 'Contest Description',
              name: 'description',
              type: 'textarea',
              rows: "3",
              placeholder: "Enter a short description for the contest",
              required: true
            })}

            {/* Cover Photo Upload */}
            <div className="space-y-1 sm:space-y-2">
              <label className="block text-sm font-medium text-slate-50">
                Cover Photo
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <input
                  type="file"
                  id="coverPhoto"
                  className="hidden"
                  accept="image/*"
                  onChange={handleCoverPhotoChange}
                />
                <label htmlFor="coverPhoto" className="cursor-pointer block">
                  <Upload className="mx-auto h-8 w-8 sm:h-12 sm:w-12 text-gray-400" />
                  <span className="mt-2 block text-xs sm:text-sm text-gray-400">
                    Click to upload cover photo
                  </span>
                  {formData.coverPhoto && (
                    <p className="mt-2 text-xs sm:text-sm text-gray-400 truncate">
                      Selected: {formData.coverPhoto.name}
                    </p>
                  )}
                </label>
              </div>
            </div>

            {/* Date Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {renderField({
                label: 'Start Date',
                name: 'startDate',
                type: 'date',
                required: true
              })}
              {renderField({
                label: 'End Date',
                name: 'endDate',
                type: 'date',
                required: true
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto text-slate-50 px-4 py-2 rounded-lg border border-slate-50 hover:bg-slate-50 hover:text-custom-blue transition-colors text-sm sm:text-base disabled:opacity-50"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base disabled:opacity-50 flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin h-4 w-4 mr-2" />
                    Creating...
                  </>
                ) : (
                  'Create Contest'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContestModal;