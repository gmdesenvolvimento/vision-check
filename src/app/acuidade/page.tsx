import Image from 'next/image';
import Link from 'next/link';
import { FaChevronLeft } from 'react-icons/fa6';
export default function VisionTests() {
  return (
    <main className="animate-fadeIn flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/dashboard">
        <FaChevronLeft className="hover:text-orange-500 absolute text-black top-10   font-extrabold text-7xl left-10" />
      </Link>
      <Image src={'/jaegger.jpg'} width="640" height="320" alt="eqwe" />
      <p className=" absolute text-black bottom-1   font-extrabold text-4xl ">
        1/1
      </p>
    </main>
  );
}
