import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// pages
import Home from "./Components/Home";
import About from "./Components/About";
import Faq from "./Components/Help/Faq";
import Contact from "./Components/Help/Contact";
import NotFound from "./Components/NotFound";
import CareerError from "./Components/Careers/CareerError";

// loaders
import Careers, { careersLoader } from "./Components/Careers/Careers";
import CareerDetails, {
  careerDetailsLoader,
} from "./Components/Careers/CareerDetails";

// layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import CareersLayout from "./layouts/CareersLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareerError />}
      >
        <Route loader={careersLoader} index element={<Careers />} />
        <Route
          loader={careerDetailsLoader}
          path=":id"
          element={<CareerDetails />}
        />
      </Route>

      {/* to catch unknown routes and show something other than the default */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;