export interface ResourceItem {
  id: string;
  title: string;
}

const dummyData: Record<string, Record<string, ResourceItem[]>> = {
  audio: {
    telugu: [
      { id: '1', title: 'కనిస్జ్ఞానం-ఆధ్యాత్మిక అనుభవం' },
      { id: '2', title: 'వారియర్-సాన్ వారియర్' },
      { id: '3', title: 'డైనమిక్-స్టాటిక్' },
      { id: '4', title: 'ఆక్యా-హోలిక్-హోలిస్టిక్' },
    ],
    hindi: [
      { id: '1', title: 'हिंदी ऑडियो 1' },
      { id: '2', title: 'हिंदी ऑडियो 2' },
    ],
  },
  books: {
    english: [
      { id: '1', title: 'English Book 1' },
      { id: '2', title: 'English Book 2' },
    ],
    telugu: [
      { id: '1', title: 'తెలుగు పుస్తకం 1' },
    ],
  },
};

export async function getResources(category: string, language: string): Promise<ResourceItem[]> {
  // Simulate network delay
  await new Promise((res) => setTimeout(res, 300));
  return dummyData[category]?.[language] || [];
} 