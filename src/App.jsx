import React, { lazy, Suspense, useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Body from "./Body";
import FloatingActions from "./components/FloatingActions";
import OceanAI from "./components/OceanAI";
import axios from "axios";
import { BASE_URL, SOCKET_URL } from "./utils/contants";
import { pageview } from "./utils/analytics";
import { useLocation } from "react-router-dom";
import AdminRoute from "./components/admin/AdminRoute";

/* Lazy loaded pages — ALL pages lazy for minimal initial bundle */
const About = lazy(() => import("./pages/About"));
const Opine = lazy(() => import("./pages/Opine"));
const Contact = lazy(() => import("./pages/Contact"));
const Donation = lazy(() => import("./pages/Donate"));
const Project = lazy(() => import("./pages/Project"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy"));
const MembershipAgreement = lazy(() => import("./pages/MembershipAgreement"));
const DonationPolicy = lazy(() => import("./pages/DonationPolicy"));
const Careers = lazy(() => import("./pages/Careers"));
const FellowShip = lazy(() => import("./pages/FellowShip"));
const CountriesPage = lazy(() => import("./pages/CountriesPage"));
const CountryDetail = lazy(() => import("./pages/CountryDetail"));
const MarineLife = lazy(() => import("./pages/MarineLife"));
const MarineGroupPage = lazy(() => import("./pages/MarineGroupPage"));
const SpeciesDetails = lazy(() => import("./pages/SpeciesDetails"));
const MarineQuiz = lazy(() => import("./pages/MarineQuiz"));
const OceanDive = lazy(() => import("./pages/OceanDrive"));
const MarineNews = lazy(() => import("./pages/MarineNews"));
const Threats = lazy(() => import("./components/Threats"));
const VolunteerList = lazy(() => import("./components/VolunteerList"));
const GetInvolved = lazy(() => import("./pages/Blog"));
const AccountDeletion = lazy(() => import("./pages/DeleteAccount"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const BlogList = lazy(() => import("./pages/BlogList"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));

const AnalyticsTracker = () => {
  const location = useLocation();
  useEffect(() => {
    pageview(location.pathname + location.search);
  }, [location]);
  return null;
};

export default function App() {
  const [visitorCount, setVisitorCount] = useState(null);
  const hasCountedVisit = useRef(false);

  useEffect(() => {
    // Dynamic import socket.io — keeps it out of the initial bundle
    let socket = null;

    const initSocket = async () => {
      try {
        const { io } = await import("socket.io-client");
        socket = io(SOCKET_URL, {
          reconnectionAttempts: 3,
          timeout: 5000,
          transports: ["websocket", "polling"],
        });

        socket.on("visitorCount", (count) => {
          setVisitorCount(count);
        });

        socket.on("connect_error", () => {
          // Silently handle — visitor count from REST is fallback
        });
      } catch {
        // socket.io failed to load — not critical
      }
    };

    const fetchAndIncrement = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/stats/getVisitors`);
        setVisitorCount(res.data.count);
        // Guards against React StrictMode's double-invoke of this effect
        // in development, which would otherwise count one visit as two.
        if (!hasCountedVisit.current) {
          hasCountedVisit.current = true;
          await axios.post(`${BASE_URL}/stats/increment`);
        }
      } catch {
        // Visitor count not available — non-critical
      }
    };

    fetchAndIncrement();

    // Delay socket connection until after initial render
    const timer = setTimeout(initSocket, 2000);

    return () => {
      clearTimeout(timer);
      if (socket) {
        socket.off("visitorCount");
        socket.disconnect();
      }
    };
  }, []);

  return (
    <BrowserRouter>
      <AnalyticsTracker />
      <div className="flex flex-col min-h-screen">
        <Navbar visitorCount={visitorCount} />
        <FloatingActions />
        <OceanAI />

        <div className="flex-1">
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-full">
                Loading...
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Body />} />
              <Route path="/about" element={<About />} />
              <Route path="/getinvolved" element={<GetInvolved />} />
              <Route path="/opine" element={<Opine />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/fellowship" element={<FellowShip />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/donate" element={<Donation />} />
              <Route path="/threats" element={<Threats />} />

              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route
                path="/terms-and-conditions"
                element={<TermsAndConditions />}
              />
              <Route
                path="/cancellation-refund-policy"
                element={<RefundPolicy />}
              />
              <Route
                path="/membership-agreement"
                element={<MembershipAgreement />}
              />
              <Route path="/donation-policy" element={<DonationPolicy />} />

              <Route path="/marine-life" element={<MarineLife />} />
              <Route path="/marine-life/:group" element={<MarineGroupPage />} />
              <Route
                path="/marine-life/:group/:speciesId"
                element={<SpeciesDetails />}
              />

              <Route path="/countries" element={<CountriesPage />} />
              <Route
                path="/countries/:countryName"
                element={<CountryDetail />}
              />

              <Route path="/marine-quiz" element={<MarineQuiz />} />
              <Route path="/ocean-drive" element={<OceanDive />} />
              <Route path="/marine-news" element={<MarineNews />} />
              <Route path="/heros" element={<VolunteerList />} />
              <Route path="/deleteaccount" element={<AccountDeletion />} />
              <Route path="/gallery/:albumId" element={<GalleryPage />} />

              <Route path="/blog" element={<BlogList />} />
              <Route path="/blog/:slug" element={<BlogPost />} />

              <Route path="/admin/login" element={<AdminLogin />} />
              <Route
                path="/admin"
                element={
                  <AdminRoute>
                    <AdminDashboard />
                  </AdminRoute>
                }
              />
            </Routes>
          </Suspense>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
