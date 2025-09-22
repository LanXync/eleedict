'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { loadDictionary, searchDictionary } from '@/lib/dictionary';

export default function DictionarySearch() {
  const [dictionary, setDictionary] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [randomWords, setRandomWords] = useState([]);

  const getRandomWords = (dict, count = 10) => {
    if (!dict || dict.length === 0) return [];
    const shuffled = [...dict].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    loadDictionary().then(data => {
      setDictionary(data);
      setRandomWords(getRandomWords(data, 10));
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const searchResults = searchDictionary(dictionary, searchTerm);
      setResults(searchResults.slice(0, 50));
    } else if (dictionary.length > 0) {
      setResults(randomWords);
    }
  }, [searchTerm, dictionary, randomWords]);

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl font-noto-serif-lao flex items-center gap-3">
            ວັດຈະນານຸກົມລາວ-ອັງກິດ
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            type="text"
            placeholder="ຄົ້ນຫາລາວ, ອັງກິດ ຫຼື ຄຳອ່ານ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="text-lg font-noto-serif-lao"
            disabled={loading}
          />
          {loading && (
            <p className="text-sm text-muted-foreground mt-2 font-noto-serif-lao">ກຳລັງໂຫຼດ...</p>
          )}
          {!loading && dictionary.length > 0 && (
            <p className="text-sm text-muted-foreground mt-2 font-noto-serif-lao">
              {dictionary?.length?.toLocaleString()} ຄຳສັບ
            </p>
          )}
        </CardContent>
      </Card>

      {results.length > 0 && (
        <div className="space-y-1.5">
          <p className="text-sm text-muted-foreground font-noto-serif-lao mb-4">
            {searchTerm
              ? `ສະແດງ ${results?.length?.toLocaleString()} ຄຳສັບ`
              : `ຄຳສັບແບບສຸ່ມ ${results?.length?.toLocaleString()} ຄຳ`
            }
          </p>
          {results.map((entry) => (
            <Card key={`${entry.id}-${entry.english}`} className="p-0 mb-4 rounded-lg">
              <CardContent className="py-2 px-3">
                <div className="flex items-center gap-2">
                  <img src="https://flagcdn.com/la.svg" alt="Lao" className="size-3.5 rounded-full object-cover flex-shrink-0" />
                  <span className="text-base font-noto-serif-lao">{entry.laoWord}</span>
                  <span className="text-xs text-muted-foreground">{entry.pronunciation}</span>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <img src="https://flagcdn.com/gb.svg" alt="English" className="size-3.5 rounded-full object-cover flex-shrink-0" />
                  <span className="text-sm">{entry.english}</span>
                  <span className="text-xs text-muted-foreground">({entry.type})</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {searchTerm && results.length === 0 && !loading && (
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground font-noto-serif-lao">
              ບໍ່ພົບຜົນການຄົ້ນຫາສຳລັບ &quot;{searchTerm}&quot;
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}