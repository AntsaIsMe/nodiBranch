import { useState } from 'react';

export function useSidebarNavigation() {
  const [openChapters, setOpenChapters] = useState<Record<string, boolean>>({});

  const toggleChapter = (chapterName: string) => {
    setOpenChapters(prev => ({
      ...prev,
      [chapterName]: !prev[chapterName]
    }));
  };

  return {
    openChapters,
    toggleChapter
  };
}
