import React from 'react';
import Layout from '../components/Layout';
import nodibranchLogo from '../assets/nodibranch.png';
import CodeBlock from '../components/common/CodeBlock';
import Button from '../components/common/Button';

const Home = () => {
  return (
    <Layout>
      <section id="overview" className="mb-16">
        <div className="flex items-center gap-4 mb-6">
          <img src={nodibranchLogo} alt="Nodibranch" className="w-12 h-12" />
          <h1 className="text-4xl font-bold tracking-tight text-text-main">
            Nodibranch
          </h1>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          A high-precision CLI scaffolder for Express.js. Build production-ready
          architectures with minimal boilerplate and maximum consistency.
        </p>
        <div className="flex gap-4">
          <Button variant="primary" as="a" href="/installation">
            Get Started
          </Button>
          <Button variant="secondary" as="a" href="/usage">
            Read Documentation
          </Button>
        </div>
      </section>

      <section id="quick-start" className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-text-main">Quick Start</h2>
        <CodeBlock
          filename="terminal"
          code={`npm install -g nodibranch\nnodibranch init`}
        />
      </section>
    </Layout>
  );
};

export default Home;
