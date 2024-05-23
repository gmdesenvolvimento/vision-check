'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronLeft } from 'react-icons/fa6';

export default function VisionTests() {
  const [currentImage, setCurrentImage] = useState('/ishi.jpg');
  const [currentCount, setCurrentCount] = useState(1);

  const handleKeyDown = (event: any) => {
    if (event.key === 'ArrowRight') {
      setCurrentImage('/ishi-5.jpg');
      setCurrentCount(2);
    } else if (event.key === 'ArrowLeft') {
      setCurrentImage('/ishi.jpg');
      setCurrentCount(1);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <main className="animate-fadeIn flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/dashboard">
        <FaChevronLeft className="hover:text-orange-500 absolute text-black top-10 font-extrabold text-7xl left-10" />
      </Link>
      <Image
        src={currentImage}
        width={1024}
        height={1024}
        alt="Vision Test Image"
      />
      <p className="absolute text-black bottom-1 font-extrabold text-4xl">
        {currentCount}/2
      </p>
    </main>
  );
}
