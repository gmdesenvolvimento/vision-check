import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="animate-fadeIn flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image src={'/logo.png'} width={400} height={70} priority alt="qweq" />
      </div>
      <div>
        <p className="text-gray-500 font-bold text-3xl mt-[-2em]">
          Testes de Visão
        </p>
      </div>
      <div>
        <Link href="/dashboard">
          <p className="text-gray-500 font-bold text-3xl hover:text-orange-500 cursor-pointer">
            Iniciar
          </p>
        </Link>
      </div>
      {/*<div>
        {' '}
        <h1 className="text-black font-bold  center w-full">
          Instruções de Uso
        </h1>
        <br />
        <div className="">
          <h2 className="text-black">Distancia da Tela:</h2>
          <p className="text-black">• 20”: distância de 2 metros;</p>
          <p className="text-black">• 17”: distância de 1.5 metros;</p>
          <p className="text-black">• 13”: distância de 1 metro;</p>
        </div>
      </div>*/}
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}
