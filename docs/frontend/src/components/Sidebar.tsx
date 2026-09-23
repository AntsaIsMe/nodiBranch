import { useState } from 'react';
import { Link } from 'react-router-dom';
import nodibranchLogo from '../assets/nodibranch.png';
import { NAV_STRUCTURE } from '../constant/nav';

export default function Sidebar() {
  const [openChapters, setOpenChapters] = useState<Record<string, boolean>>({});

  const toggleChapter = (chapterName: string) => {
    setOpenChapters(prev => ({
      ...prev,
      [chapterName]: !prev[chapterName]
    }));
  };

  return (
    <aside className="w-[260px] h-screen sticky top-0 border-r border-primary/20 overflow-y-auto scrollbar-hide bg-primary text-white flex flex-col">
      <div className="w-full bg-bg flex justify-center py-6">
        <img src={nodibranchLogo} alt="Nodibranch Logo" className="w-32" />
      </div>
      <div className="p-6 flex-1">
        <nav className="space-y-4">
          {NAV_STRUCTURE.map((item, idx) => (
            <div key={idx}>
              {item.title && (
                <Link to={item.path} className="block py-2 px-3 text-sm font-medium bg-white/10 hover:bg-white/20 rounded-md transition-colors">
                  {item.title}
                </Link>
              )}

              {item.group && (
                <>
                  <div className="pt-4 pb-2 text-xs font-semibold text-white/60 uppercase tracking-wider">
                    {item.group}
                  </div>
                  <div className="space-y-1">
                    {item.chapters.map((chapter, cIdx) => (
                      <div key={cIdx} className="py-1">
                        <button
                          onClick={() => toggleChapter(chapter.name)}
                          className="w-full text-left block py-1 px-3 text-sm font-medium text-white/90 hover:text-white transition-colors"
                        >
                          {chapter.name}
                        </button>
                        <div className={`grid transition-all duration-200 ease-in-out ${openChapters[chapter.name] ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                          <div className="overflow-hidden">
                            <div className="ml-3 mt-1 space-y-1 border-l border-white/10">
                              {chapter.pages.map((page, pIdx) => (
                                <Link key={pIdx} to={page.path} className="block py-1 px-3 text-xs text-white/60 hover:text-white/90 hover:bg-white/5 rounded-r-md transition-colors">
                                  {page.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
