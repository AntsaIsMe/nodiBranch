import { ContentMap, DocPageContent } from '../types/docs';
import { CONTENT_MAP as RAW_CONTENT } from '../data/content';

export interface ContentService {
  getPageContent(pageId: string): DocPageContent | undefined;
  getAllPages(): string[];
}

class ContentServiceImpl implements ContentService {
  getPageContent(pageId: string): DocPageContent | undefined {
    return RAW_CONTENT[pageId];
  }

  getAllPages(): string[] {
    return Object.keys(RAW_CONTENT);
  }
}

export const contentService = new ContentServiceImpl();
