import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import mbctLogo from "../assets/MBCT-logo.png";
import playStoreIcon from "../assets/play-store.png";
// If you use react-router-dom, uncomment the next line and replace <a> with <Link>
// import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0b1f3b] text-gray-300 pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* LOGO + ABOUT */}
        <div>
          <img
            src={mbctLogo}
            alt="MBCT Logo"
            className="w-32 h-32 rounded-full object-cover"
          />
          <p className="text-sm leading-relaxed">
            We work towards conserving marine biodiversity through research,
            community engagement, coastal restoration and sustainable
            environmental practices.
          </p>

          <div className="mt-4 space-y-1 text-sm">
            <p>
              <strong className="text-teal-400">WhatsApp:</strong> +91 99944
              01291
            </p>
            <p>
              <strong className="text-teal-400">Email:</strong>{" "}
              worldmarinebiodiversity@gmail.com
            </p>
          </div>
        </div>

        {/* POLICIES (replaced "Our Work") */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Policies</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="/privacy-policy"
                className="hover:text-white transition"
                aria-label="Privacy Policy"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms-and-conditions"
                className="hover:text-white transition"
                aria-label="Terms and Conditions"
              >
                Terms &amp; Conditions
              </a>
            </li>
            <li>
              <a
                href="/cancellation-refund-policy"
                className="hover:text-white transition"
                aria-label="Cancellation and Refund Policy"
              >
                Cancellation &amp; Refund Policy
              </a>
            </li>
            <li>
              <a
                href="/membership-agreement"
                className="hover:text-white transition"
                aria-label="Membership Agreement"
              >
                Membership Agreement
              </a>
            </li>
            <li>
              <a
                href="/donation-policy"
                className="hover:text-white transition"
                aria-label="Donation Policy"
              >
                Donation Policy
              </a>
            </li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="/about" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:text-white transition">
                Admin's Lounge
              </a>
            </li>
            <li>
              <a href="/getinvolved" className="hover:text-white transition">
                Get Involved
              </a>
            </li>
            <li>
              <a href="/donate" className="hover:text-white transition">
                Donate
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACT ADDRESS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Address
          </h3>
          <p className="text-sm leading-relaxed">
            <strong className="text-teal-400">India:</strong> No: 81/5, 6th
            Street, Shanthi Nagar, Chengalpattu District, Tamil Nadu – 603003.
          </p>

          <h4 className="text-white mt-4 font-semibold text-sm">
            Connect With Us
          </h4>
          <div className="flex space-x-4 mt-3">
            <a
              href="https://www.facebook.com/profile.php?id=61583238462973"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF className="p-2 w-10 h-10 bg-gray-700 rounded-full cursor-pointer hover:bg-[#1877F2] transition" />
            </a>
            <a
              href="https://www.instagram.com/worldmarinebiodiversity/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="p-2 w-10 h-10 bg-gray-700 rounded-full cursor-pointer hover:bg-[#fb0377] transition" />
            </a>
            {/* <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube className="p-2 w-10 h-10 bg-gray-700 rounded-full cursor-pointer hover:bg-[#f80202] transition" />
            </a> */}
            <a
              href="https://x.com/MARINEBIOD91039"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter className="p-2 w-10 h-10 bg-gray-700 rounded-full cursor-pointer hover:bg-[#1DA1F2] transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/marine-biodiversity-51844b398/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="p-2 w-10 h-10 bg-gray-700 rounded-full cursor-pointer hover:bg-[#0A66C2] transition" />
            </a>
          </div>
          <div className="mt-5">
            <p className="text-sm font-medium text-gray-300 mb-2">
              Download our app
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.skiez.marine_trust&pcampaignid=web_share"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={playStoreIcon}
                alt="Get it on Google Play"
                className="h-20 w-40 hover:scale-105 transition-transform duration-200"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © 2025 Marine Biodiversity Conservation Trust. All Rights Reserved.
      </div>
    </footer>
  );
}
