import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import API_URL from '../../Pages/Constants/Constants';

const AddContestantModal = ({ isOpen, onClose, contestId, setContests, contestStatus }) => {
  // State management
  const [formData, setFormData] = useState({
    name: '',
    photo: null
  });
  const [contestants, setContestants] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const isPublished = contestStatus === 'Published';

  // Form handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      photo: file
    }));
  };

  const handleAddContestant = () => {
    if (!formData.name || !formData.photo) {
      setError('Name and photo are required');
      return;
    }

    if (isPublished) {
      setError('Cannot add contestants. The contest is already published.');
      return;
    }

    const newContestant = { 
      name: formData.name, 
      photo: formData.photo 
    };
    setContestants(prev => [...prev, newContestant]);

    // Reset form after adding
    setFormData({
      name: '',
      photo: null
    });
    setError('');
    setLoading(false);
  };

  const resetForm = () => {
    setContestants([]);
    setFormData({
      name: '',
      photo: null
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    const token = localStorage.getItem('token');

    contestants.forEach((contestant, index) => {
      formData.append(`contestants[${index}]`, contestant.name);
    });

    contestants.forEach((contestant, index) => {
      if (contestant.photo) {
        formData.append('contestants', contestant.photo);
      }
    });

    try {
      const response = await axios.post(
        `${API_URL}/contests/${contestId}/contestants`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.data.success) {
        toast.success('Contestants added successfully!');
        resetForm();
        onClose();

        if (setContests) {
          setContests(prev => [...prev]);
        }
      }
    } catch (error) {
      console.error('Error adding contestants:', error);
      toast.error('Failed to add contestants');
    } finally {
      setLoading(false);
    }
  };

  // Render helper
  const renderField = ({ label, type = 'text', name, ...props }) => (
    <div>
      <label className="block">{label}</label>
      <input
        type={type}
        name={name}
        className="w-full px-4 py-2 border rounded"
        value={type === 'file' ? undefined : formData[name]}
        onChange={type === 'file' ? handleFileChange : handleInputChange}
        disabled={isPublished}
        {...props}
      />
    </div>
  );

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-md w-96"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">Add Contestant</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {isPublished && (
            <div className="bg-red-100 text-red-500 p-2 rounded mb-4">
              <p>The contest is already published. Contestants cannot be added.</p>
            </div>
          )}

          {renderField({
            label: 'Contestant Name',
            name: 'name',
            required: true
          })}

          {renderField({
            label: 'Photo',
            type: 'file',
            name: 'photo',
            accept: 'image/*'
          })}

          {error && <p className="text-red-500 text-sm">{error}</p>}

          {!isPublished && (
            <button
              type="button"
              onClick={handleAddContestant}
              className="w-full py-2 px-4 bg-custom-blue text-white rounded mt-4"
              disabled={loading}
            >
              Add Contestant
            </button>
          )}

          {contestants.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg">Contestants List</h3>
              <ul>
                {contestants.map((contestant, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{contestant.name}</span>
                    <span>{contestant.photo ? 'Uploaded' : 'No photo'}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {!isPublished && contestants.length > 0 && (
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-500 text-white rounded mt-4"
              disabled={loading}
            >
              Submit Contestants
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddContestantModal;