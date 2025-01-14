import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import API_URL from '../../Pages/Constants/Constants';

const AddContestantModal = ({ isOpen, onClose, contestId, setContests, contestStatus }) => {
  const [contestants, setContestants] = useState([]);
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const isPublished = contestStatus === 'Published';

  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleAddContestant = () => {
    if (!name || !photo) {
      setError('Name and photo are required');
      return;
    }

    if (isPublished) {
      setError('Cannot add contestants. The contest is already published.');
      return;
    }

    const newContestant = { name, photo };
    setContestants((prev) => [...prev, newContestant]);

    setLoading(true);
    setName('');
    setPhoto(null);
    setError('');
  };

  const resetForm = () => {
    setContestants([]);
    setName('');
    setPhoto(null);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
          setContests((prev) => {
            return [...prev];
          });
        }
      }
    } catch (error) {
      console.error('Error adding contestants:', error);
      toast.error('Failed to add contestants');
    }
  };

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
          <div>
            <label className="block">Contestant Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isPublished}
              required
            />
          </div>
          <div>
            <label className="block">Photo</label>
            <input
              type="file"
              accept="image/*"
              className="w-full px-4 py-2 border rounded"
              onChange={handleFileChange}
              disabled={isPublished}
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {!isPublished && (
            <button
              type="button"
              onClick={handleAddContestant}
              className="w-full py-2 px-4 bg-custom-blue text-white rounded mt-4"
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
          {!isPublished && (
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-500 text-white rounded mt-4"
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
