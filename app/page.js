"use client";

import Navbar from "../components/Navbar"
import logo from './assets/logo.webp';
import { LuWrench } from "react-icons/lu";
import { FiTarget } from "react-icons/fi";
import { LiaCheckCircle } from "react-icons/lia";
import { IoEyeOutline } from "react-icons/io5";
import imageAbout from './assets/image-about.webp';

import { useEffect } from "react";
import Image from "next/image";
import { products, services, whyChooseUs } from "@/utils/data";

export default function Home() {

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const targetPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main className="min-h-screen scroll-smooth">
      <Navbar />

      <section id="hero" className="pt-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Solusi Permesinan
                <span className="text-yellow-400"> Presisi</span> untuk
                <span className="text-yellow-400"> Industri</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Mitra terpercaya dalam jasa bubut dan permesinan presisi dengan kualitas tinggi,
                pengerjaan cepat, dan harga kompetitif untuk berbagai kebutuhan industri manufaktur.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
                  Konsultasi Gratis
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
                  onClick={() => scrollToSection('services')}
                >
                  Lihat Layanan
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-lg p-6 text-gray-800">
                  <LuWrench className="w-16 h-16 text-blue-600 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Presisi Tinggi</h3>
                  <p>Teknologi modern dengan standar kualitas internasional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Tentang Kami</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 place-items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">CV KenKita</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                CV KenKita adalah perusahaan yang bergerak di bidang jasa bubut dan permesinan presisi,
                melayani berbagai kebutuhan industri manufaktur. Dengan pengalaman dan dedikasi tinggi,
                kami menghadirkan solusi teknik yang akurat, cepat, dan dapat diandalkan.
              </p>

              <h4 className="text-xl font-semibold text-gray-800 mb-4">Mengapa Memilih Kami</h4>
              <div className="space-y-3">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <LiaCheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full h-[500px] flex justify-center">
              <Image src={imageAbout} alt="image about" className="object-cover h-full w-full rounded-full" draggable="false" />
            </div>
          </div>
        </div>
      </section>

      <section id="vision" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Visi & Misi</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <IoEyeOutline className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Visi</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Menjadi mitra terpercaya dalam solusi permesinan presisi untuk industri masa depan.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-green-600 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <FiTarget className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Misi</h3>
              </div>
              <ol className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                  <span>Menyediakan layanan bubut berkualitas tinggi dengan ketepatan dan ketepatan waktu.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                  <span>Mengutamakan kepuasan pelanggan melalui inovasi dan pelayanan terbaik.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                  <span>Meningkatkan kualitas SDM dan teknologi untuk menjawab kebutuhan industri yang terus berkembang.</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Layanan Kami</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami menyediakan berbagai layanan permesinan presisi dengan teknologi terdepan
              dan tim profesional berpengalaman
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group">
                <div className="text-center">
                  <div className="mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#181816] mb-4">Produk Kami</h2>
            <div className="w-24 h-1 bg-[#181816] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rubber bisa dalam bentuk sheet,tube,dan roll, Roll bisa sampai diameter 460 panjang 3 meter, Kekerasanya dari 35 shore a - 100 shore a
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image src={product.src} alt={product.title} className="w-full md:h-56 h-96 object-cover rounded-lg" draggable="false" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Siap Memulai Proyek Anda?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan dapatkan solusi permesinan presisi
            terbaik untuk kebutuhan industri Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
              Hubungi Kami
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-[#181818] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Image src={logo} alt="Logo" width={150} height={150} draggable="false" />
              <p className="text-gray-400 mb-4">
                Mitra terpercaya dalam solusi permesinan presisi untuk industri masa depan.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Jasa Bubut Presisi</li>
                <li>Permesinan CNC</li>
                <li>Custom Manufacturing</li>
                <li>Rapid Prototyping</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@cvkenkita.com</li>
                <li>Telepon: (021) 123-4567</li>
                <li>WhatsApp: +62 812-3456-7890</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 CV KenKita. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
