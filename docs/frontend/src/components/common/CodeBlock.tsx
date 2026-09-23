import React, { useState } from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export default function CodeBlock({ code, language, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="bg-code-bg rounded-lg overflow-hidden border border-gray-800 my-6">
      <div className="flex justify-between items-center px-4 py-2 bg-gray-900/50 border-b border-gray-800 text-xs text-gray-500 font-mono">
        <span>{filename || language || 'code'}</span>
        <button
          onClick={copyToClipboard}
          className="hover:text-white transition-colors"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div className="p-4 overflow-x-auto text-sm text-gray-300 font-mono whitespace-pre">
        {code.split('\\n').map((line, i) => (
          <p key={i} className={line.startsWith('npm') ? 'text-accent' : ''}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
