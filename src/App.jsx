import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./layouts/app-layout";
// import ProtectedRoute from "./components/protectd-route";
import { ThemeProvider } from "./components/theme-provider";

import LandingPage from "./pages/landing";
import Onboarding from "./pages/onboarding";
import PostJob from "./pages/post-job";
import JobListing from "./pages/jobListing";
import MyJobs from "./pages/my-jobs";
import SavedJobs from "./pages/SavedJobs";
import JobPage from "./pages/job";

import "./App.css";




const router = createBrowserRouter([
  {
    element : <AppLayout/>,
    children:[
     {
      path:"/",
      element:<LandingPage/>,
     },
     {
      path:"/onboarding",
      element:<Onboarding/>,
     },
     {
      path:"/jobs",
      element:<JobListing/>,
     },
     {
      path:"/job/:id",
      element:<JobPage/>,
     },
     {
      path:"/post-job",
      element:<PostJob/>,
     },
     {
      path:"/saved-job",
      element:<SavedJobs/>,
     },

     {
      path:"/my-jobs",
      element:<MyJobs/>,
     },
    ]
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;