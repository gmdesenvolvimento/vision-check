import Link from 'next/link';

export default function VisionTests() {
  return (
    <main className="animate-fadeIn flex min-h-screen flex-col items-center justify-between p-24">
      <ul className="text-black">
        <Link href="/acuidade">
          <li className="text-gray-500 mt-2 font-bold text-3xl hover:text-orange-500 cursor-pointer">
            Teste de acuidade visual
          </li>
        </Link>
        <Link href="/ishihara">
          <li className="text-gray-500 mt-2 font-bold text-3xl hover:text-orange-500 cursor-pointer">
            Teste de daltonismo(Ishihara)
          </li>
        </Link>
        <li className="text-gray-500 mt-2 font-bold text-3xl hover:text-orange-500 cursor-pointer">
          Teste de astigmatismo
        </li>
      </ul>
    </main>
  );
}
