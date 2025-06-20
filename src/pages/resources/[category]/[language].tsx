import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ResourceCard from '@/components/ResourceCard';
import { getResources, ResourceItem } from '@/lib/resourceData';

const ResourceGridPage = () => {
  const router = useRouter();
  const { category, language } = router.query;

  const [resources, setResources] = useState<ResourceItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof category === 'string' && typeof language === 'string') {
      setLoading(true);
      getResources(category, language).then((data) => {
        setResources(data);
        setLoading(false);
      });
    }
  }, [category, language]);

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 capitalize">{language}</h1>
        {loading ? (
          <div>Loading...</div>
        ) : resources.length === 0 ? (
          <div>No resources found.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((item) => (
              <ResourceCard
                key={item.id}
                title={item.title}
                buttonText="Read More"
                onClick={() => alert(`Read more about ${item.title}`)}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ResourceGridPage;
