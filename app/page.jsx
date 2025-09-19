import DictionarySearch from '@/components/DictionarySearch';

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 bg-background">
      <main className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-center font-noto-serif-lao text-foreground">Eleedict</h1>
        <p className="text-center text-2xl mb-8 font-noto-serif-lao text-muted-foreground">ວັດຈະນານຸກົມ</p>

        <DictionarySearch />
      </main>
    </div>
  );
}