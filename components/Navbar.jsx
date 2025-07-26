import { useState, useEffect } from 'react';
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import logo from '../app/assets/logo.webp';
import Image from 'next/image';

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log('Toggle sidebar clicked, current state:', isSidebarOpen); // Debug
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    console.log('Close sidebar'); // Debug
    setIsSidebarOpen(false);
  };

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);

  // Function untuk smooth scroll
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    console.log('Scroll to:', targetId); // Debug

    const targetElement = document.getElementById(targetId.replace('#', ''));
    if (targetElement) {
      const navbarHeight = 80;
      const targetPosition = targetElement.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }

    // Tutup sidebar jika mobile
    if (isSidebarOpen) {
      closeSidebar();
    }
  };

  const navItems = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Visi & Misi', href: '#vision' },
    { name: 'Layanan', href: '#services' },
    { name: 'Produk', href: '#products' },
    { name: 'Kontak', href: '#contact' }
  ];

  return (
    <>
      <header className='fixed top-0 left-0 right-0 bg-[#181818] shadow-md p-4 z-[100] h-20'>
        <div className='max-w-7xl mx-auto w-full h-full'>
          <div className='flex items-center justify-between w-full h-full'>
            <div className='flex items-center justify-between w-full md:w-auto'>
              <Image
                src={logo}
                alt="Logo"
                width={100}
                height={100}
                draggable="false"
                className="cursor-pointer"
                onClick={(e) => handleScrollTo(e, '#hero')}
              />

              <button
                onClick={toggleSidebar}
                className='md:hidden text-white p-3 hover:bg-gray-700 rounded-lg transition-colors duration-200 border border-gray-600'
                aria-label="Toggle menu"
                type="button"
              >
                <RiMenu3Line size={20} />
              </button>
            </div>

            <nav className='hidden md:block'>
              <ul className='flex space-x-6'>
                {navItems.map((item, index) => (
                  <li key={index}>
                    <button
                      className='text-white hover:text-yellow-400 transition-colors duration-200 font-medium cursor-pointer bg-transparent border-none'
                      onClick={(e) => handleScrollTo(e, item.href)}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {isSidebarOpen && (
        <div
          className='fixed inset-0 bg-black/50 bg-opacity-60 z-[110] md:hidden'
          onClick={closeSidebar}
          style={{ top: 0, left: 0, right: 0, bottom: 0 }}
        />
      )}

      <aside
        className={`
          fixed top-0 right-0 h-full w-80 bg-[#181818] shadow-2xl 
          transform transition-transform duration-300 ease-in-out z-[120] 
          md:hidden border-l border-gray-700
          ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        style={{
          maxWidth: '80vw',
          minHeight: '100vh',
          overflowY: 'auto'
        }}
      >
        <div className='p-6'>
          <div className='flex items-center justify-between mb-8 pb-4 border-b border-gray-700'>
            <Image
              src={logo}
              alt="Logo"
              width={100}
              height={100}
              draggable="false"
              className="cursor-pointer"
              onClick={(e) => handleScrollTo(e, '#hero')}
            />
            <button
              onClick={closeSidebar}
              className='text-white p-2 hover:bg-gray-700 rounded-lg transition-colors duration-200'
              aria-label="Close menu"
              type="button"
            >
              <IoMdClose size={24} />
            </button>
          </div>

          <nav>
            <ul className='space-y-3'>
              {navItems.map((item, index) => (
                <li key={index}>
                  <button
                    className='w-full text-left text-white hover:text-yellow-400 hover:bg-gray-700 px-4 py-4 rounded-lg transition-all duration-200 cursor-pointer border-none bg-transparent text-lg font-medium'
                    onClick={(e) => {
                      console.log('Mobile menu item clicked:', item.name); // Debug
                      handleScrollTo(e, item.href);
                    }}
                    type="button"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}