export async function loadDictionary() {
  const response = await fetch('/assets/lao-eng-dictionary.csv');
  const text = await response.text();

  const lines = text.trim().split('\n');
  const headers = lines[0].split(',');

  const dictionary = [];

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',');

    if (values.length >= 5) {
      dictionary.push({
        id: parseInt(values[0]),
        laoWord: values[1],
        english: values[2],
        pronunciation: values[3],
        type: values[4]
      });
    }
  }

  return dictionary;
}

export function searchDictionary(dictionary, query) {
  const lowerQuery = query.toLowerCase();

  return dictionary.filter(entry =>
    entry.laoWord.includes(query) ||
    entry.english.toLowerCase().includes(lowerQuery) ||
    entry.pronunciation.toLowerCase().includes(lowerQuery)
  );
}