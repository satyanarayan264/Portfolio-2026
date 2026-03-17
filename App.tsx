/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <footer className="py-12 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Professional Portfolio. All rights reserved.
      </footer>
    </div>
  );
}
