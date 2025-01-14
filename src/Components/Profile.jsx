import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { CiLogout } from "react-icons/ci";
import { useAuth } from "../Pages/Contexts/AuthContext";
import { UserCircle } from "lucide-react";
import API_URL from "../Pages/Constants/Constants";

const Profile = ({ isAuthenticated }) => {
  const { logout } = useAuth();
  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmail = async () => {
      const token = localStorage.getItem("token");
      if (!isAuthenticated || !token) {
        navigate("/dashboard");
        return;
      }

      try {
        const response = await fetch(`${API_URL}//users/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          toast.error(errorData.error || "Failed to fetch email.");
          return;
        }

        const data = await response.json();
        setEmail(data.email);
      } catch (error) {
        console.error("Error fetching email:", error);
        toast.error("An unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchEmail();
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full bg-neutral-900">
        <div className="animate-pulse text-lg text-gray-300">
          Loading profile...
        </div>
      </div>
    );
  }

  if (!email) {
    return (
      <div className="flex items-center justify-center h-full bg-neutral-900">
        <div className="text-lg text-gray-300">No profile found.</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-start bg-neutral-900 h-full p-4 w-full transition-all duration-300 lg:min-w-64">
      <div className="bg-neutral-800 w-full flex flex-col items-center p-6 rounded-lg shadow-lg space-y-4">
        <div className="relative w-24 h-24 mb-2">
          <UserCircle className="w-full h-full text-gray-400" />
        </div>

        <div className="space-y-2 w-full">
          <div className="text-center">
            <span className="text-sm text-gray-400">Email</span>
            <h3 className="text-lg font-medium text-white break-all">
              {email}
            </h3>
          </div>

          <div className="pt-4 w-full">
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-all duration-200 group"
            >
              <CiLogout className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 w-full px-4">
        <div className="text-sm text-gray-400 text-center">
          Logged in as
          <span className="text-white ml-1 font-medium">{email}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;