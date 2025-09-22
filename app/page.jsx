import DictionarySearch from '@/components/DictionarySearch';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 bg-background">
      <main className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/assets/eleedict.png"
            alt="Eleedict Logo"
            width={80}
            height={80}
            className="mb-4"
          />
          <h1 className="text-4xl font-bold mb-2 text-center font-noto-serif-lao text-foreground">Eleedict</h1>
          <p className="text-center text-2xl font-noto-serif-lao text-muted-foreground">ວັດຈະນານຸກົມ</p>
        </div>

        <DictionarySearch />
      </main>
    </div>
  );
}