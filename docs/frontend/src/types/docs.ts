export interface DocExample {
  type: 'cli' | 'raw';
  code: string;
  explanation?: string;
}

export interface DocSection {
  title: string;
  content: string;
  examples: DocExample[];
}

export interface DocPageContent {
  title: string;
  sections: DocSection[];
}

export type ContentMap = Record<string, DocPageContent>;
