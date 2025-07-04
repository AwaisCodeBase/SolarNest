import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout.jsx";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Services from "./pages/Services/Services.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import About from "./pages/About/About.jsx";
import Renewable_Energy_Solution from "./pages/Renewable_Energy_Solution/Renewable_Energy_Solution.jsx";
import Water_Gas_Infrastructure from "./pages/Water_Gas_Infrastructure/Water_Gas_Infrastructure.jsx";
import Pre_Construction from "./pages/Pre_Construction/Pre_Construction.jsx";
import Infrastructure from "./pages/Infrastructure/Infrastructure.jsx";
import Bid from "./pages/Bid/Bid.jsx";
import Electricity from "./pages/Electricity/Electricity.jsx";
import Constructions from "./pages/Constructions/Constructions.jsx";
import Earthwork from "./pages/Earthwork/Earthwork.jsx";
import Integrated from "./pages/Integrated/Integrated.jsx";
import MEP from "./pages/MEP/MEP.jsx";
import { LanguageProvider } from "./context/LanguageContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="services/mep" element={<MEP />} />
      <Route path="services/construction" element={<Constructions />} />
      <Route path="services/electricity" element={<Electricity />} />
      <Route path="services/renew" element={<Renewable_Energy_Solution />} />
      <Route path="services/infrastructure" element={<Infrastructure />} />
      <Route path="services/bid" element={<Bid />} />
    </Route>
  ),
  {
    basename: "/", // This is crucial for GitHub Pages and local testing
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </StrictMode>
);
