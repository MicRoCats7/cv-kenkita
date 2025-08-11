//image product
import image1 from '../app/assets/image-product/image1.jpeg';
import image2 from '../app/assets/image-product/image2.jpeg';
import image3 from '../app/assets/image-product/image3.jpeg';
import image4 from '../app/assets/image-product/image4.jpeg';
import image5 from '../app/assets/image-product/image5.jpeg';
import image6 from '../app/assets/image-product/image6.jpeg';
import image7 from '../app/assets/image-product/image7.jpeg';
import image8 from '../app/assets/image-product/image8.jpeg';
import image9 from '../app/assets/image-product/image9.jpeg';
import image10 from '../app/assets/image-product/image10.jpeg';
import image11 from '../app/assets/image-product/image11.jpeg';
import image12 from '../app/assets/image-product/image12.jpeg';
import image13 from '../app/assets/image-product/image13.jpeg';

//icons
import { LuWrench } from "react-icons/lu";
import { FiTarget } from "react-icons/fi";
import { FaCogs } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { GiGears } from "react-icons/gi";
import { BsTools } from "react-icons/bs";
import { TbTool } from "react-icons/tb";


export const products = [
    {
        src: image1,
        title: "Produk 1"
    },
    {
        src: image2,
        title: "Produk 2"
    },
    {
        src: image3,
        title: "Produk 3"
    },
    {
        src: image4,
        title: "Produk 4"
    },
    {
        src: image5,
        title: "Produk 5"
    },
    {
        src: image6,
        title: "Produk 6"
    },
    {
        src: image7,
        title: "Produk 7"
    },
    {
        src: image8,
        title: "Produk 8"
    },
    {
        src: image9,
        title: "Produk 9"
    },
    {
        src: image10,
        title: "Produk 10"
    },
    {
        src: image12,
        title: "Produk 12"
    },
];

export const services = [
    {
        icon: <LuWrench className="w-12 h-12 text-blue-600" />,
        title: "Recover rubber roll (servis rubiber roll)"
    },
    {
        icon: <GiGears className="w-12 h-12 text-blue-600" />,
        title: "Jasa perbuatan gear (material baja bronze)"
    },
    {
        icon: <BsTools className="w-12 h-12 text-blue-600" />,
        title: "Pembuatan dan Perbaikan Spare Part Mesin"
    },
    {
        icon: <FiTarget className="w-12 h-12 text-blue-600" />,
        title: "Pembuatan Komponen Presisi Industri"
    },
    {
        icon: <FaCogs className="w-12 h-12 text-blue-600" />,
        title: "Pembuatan roll logo (material aluminium)"
    },
    {
        icon: <MdSettings className="w-12 h-12 text-blue-600" />,
        title: "Tersedia instrument (seranti pressure gauge transmitter)"
    },
    {
        icon: <TbTool className="w-12 h-12 text-blue-600" />,
        title: "Menyediakan custom canvas brake"
    }
];

export const whyChooseUs = [
    "Presisi Tinggi",
    "Pengerjaan Cepat dan Tepat Waktu",
    "Harga Kompetitif",
    "Tim Profesional dan Berpengalaman",
    "Fleksibel untuk Berbagai Kebutuhan Industri"
];