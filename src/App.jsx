import "./App.css";
import AppRouter from "./route/AppRouter";
import AuthContextProvider from "./context/AuthContext";
import BookContexProvider from "./context/BookContex";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AuthContextProvider>
      <BookContexProvider>
        <AppRouter />
        <ToastContainer />
      </BookContexProvider>
    </AuthContextProvider>
  );
}

export default App;
