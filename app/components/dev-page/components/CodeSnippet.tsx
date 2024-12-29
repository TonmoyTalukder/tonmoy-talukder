import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css'; 
import 'prismjs/components/prism-typescript'; 
import 'prismjs/components/prism-javascript'; 
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-css';

interface CodeSnippetProps {
  code: string;
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({ code }) => {
  useEffect(() => {
    Prism.highlightAll(); // Automatically highlight code when component mounts
  }, []);

  return (
    <div className="snippet-container">
      <pre className="snippet-pre">
        <code className="language-typescript">{code}</code>
      </pre>
      <style jsx>{`
        .snippet-container {
          background: #1e1e1e;
          border-radius: 12px;
          padding: 16px;
          margin: 16px 0;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
        }

        .snippet-pre {
          margin: 0;
          padding: 16px;
          overflow-x: auto;
          background-color: #1e1e1e;
          color: #d4d4d4;
          font-size: 0.9rem;
          font-family: 'Fira Code', monospace;
          border-radius: 8px;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};
