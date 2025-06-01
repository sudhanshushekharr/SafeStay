import axios from 'axios';
import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser, useAuth } from '@clerk/clerk-react';
import toast from 'react-hot-toast';

const AppContext = createContext();

// Configure axios defaults
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export const AppProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY || "$";
  const navigate = useNavigate();
  const { user, isSignedIn, isLoaded } = useUser();
  const { getToken } = useAuth();
  
  const [isOwner, setIsOwner] = useState(false);
  const [showHotelReg, setShowHotelReg] = useState(false);
  const [userData, setUserData] = useState(null);
  const [searchedCities, setSearchedCities] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Configure axios interceptor for authentication
  useEffect(() => {
    const interceptor = axios.interceptors.request.use(
      async (config) => {
        try {
          if (isSignedIn) {
            const token = await getToken();
            if (token) {
              config.headers.Authorization = `Bearer ${token}`;
            }
          }
          return config;
        } catch (error) {
          console.error('Error in axios interceptor:', error);
          return config;
        }
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.request.eject(interceptor);
    };
  }, [isSignedIn, getToken]);

  const fetchUser = async () => {
    if (!isSignedIn || !isLoaded) {
      return;
    }

    try {
      const token = await getToken();
      if (!token) {
        console.log('No token available');
        return;
      }

      const { data } = await axios.get('/api/user', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      if (data.success) {
        setIsOwner(data.role === "hotelOwner");
        setSearchedCities(data.recentSearchedCities);
        setUserData(data);
        setIsInitialized(true);
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      if (error.response?.status === 401) {
        // Only show error if we're already initialized
        if (isInitialized) {
          toast.error('Session expired. Please sign in again.');
        }
      } else {
        toast.error(error.response?.data?.message || 'Something went wrong');
      }
    }
  };

  // Initial fetch when signed in
  useEffect(() => {
    if (isSignedIn && isLoaded) {
      fetchUser();
    }
  }, [isSignedIn, isLoaded]);

  // Retry fetch if not initialized
  useEffect(() => {
    if (isSignedIn && isLoaded && !isInitialized) {
      const timer = setTimeout(() => {
        fetchUser();
      }, 1000); // Retry after 1 second
      return () => clearTimeout(timer);
    }
  }, [isSignedIn, isLoaded, isInitialized]);

  const value = {
    currency,
    navigate,
    user,
    getToken,
    isOwner,
    showHotelReg,
    setIsOwner,
    axios,
    setShowHotelReg,
    searchedCities,
    setSearchedCities,
    userData,
    isSignedIn,
    isLoaded,
    isInitialized
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

