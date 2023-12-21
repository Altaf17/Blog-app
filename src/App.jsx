import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import authService from "./appwrite/auth";
import { LOGIN, LOGOUT } from "./redux/slices/authSlice";
import { Header, Footer } from "./Components/index";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(LOGIN({ userData }));
        } else {
          dispatch(LOGOUT());
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          Tods : <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
