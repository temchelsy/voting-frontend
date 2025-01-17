
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { CiLogout } from "react-icons/ci";
import { useAuth } from "../Pages/Contexts/AuthContext";
import { UserCircle } from "lucide-react";

const Profile = () => {
  const { currentUser, currentUserLoading, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUserLoading && !currentUser) {
      navigate("/login");
    }
  }, [currentUser, currentUserLoading, navigate]);

  const handleLogout = () => {
    console.log('Logging out...'); // Debug log
    logout();
    navigate("/login");
    toast.success("Logged out successfully");
  };

  if (currentUserLoading) {
    return (
      <div className="flex items-center justify-center h-full bg-blue-900">
        <div className="animate-pulse text-lg text-blue-200">
          Loading profile...
        </div>
      </div>
    );
  }

  if (!currentUser) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="flex flex-col items-center justify-start bg-blue-900 h-full p-4 w-full transition-all duration-300 lg:min-w-40">
      <div className="bg-blue-800 w-full flex flex-col items-center p-6 rounded-lg shadow-lg space-y-4">
        <div className="space-y-2 w-full">
          <div className="text-center">
            <span className="text-sm text-blue-200">Email</span>
            <h3 className="text-lg font-medium text-white break-all">
              {currentUser.email}
            </h3>
          </div>

          <div className="pt-4 w-full">
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-yellow-500 text-white px-4 py-2 rounded-md transition-all duration-200 group"
            >
              <CiLogout className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 w-full px-4">
      </div>
    </div>
  );
};

export default Profile;



