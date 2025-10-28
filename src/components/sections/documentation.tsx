'use client';

import { useState } from 'react';
import { documentationTopics, type DocumentationTopic } from '@/lib/documentation-data';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function Documentation() {
  const [activeTopic, setActiveTopic] = useState<DocumentationTopic>(documentationTopics[0]);
  const [animationClass, setAnimationClass] = useState('animate-fade-in');

  const handleTopicClick = (topic: DocumentationTopic) => {
    if (topic.slug === activeTopic.slug) return;

    setAnimationClass('animate-fade-out');
    setTimeout(() => {
      setActiveTopic(topic);
      setAnimationClass('animate-fade-in');
    }, 300);
  };

  return (
    <section id="documentation" className="bg-card section-padding">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-gradient">Simplifier votre quotidien</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Guides, exemples et explications simples pour découvrir comment nous pouvons faire gagner un temps précieux à votre entreprise.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <aside className="p-6 rounded-lg md:col-span-1 bg-background">
            <h3 className="text-lg font-semibold text-foreground">Sujets</h3>
            <ul className="mt-4 space-y-3">
              {documentationTopics.map((topic) => (
                 <li key={topic.slug}>
                   <button
                     onClick={() => handleTopicClick(topic)}
                     className={cn(
                       'w-full text-left transition-colors',
                       activeTopic.slug === topic.slug
                         ? 'font-medium text-primary'
                         : 'text-muted-foreground hover:text-foreground'
                     )}
                   >
                     {topic.title}
                   </button>
                 </li>
              ))}
            </ul>
          </aside>
          <div className={cn('md:col-span-3 transition-opacity duration-300 flex flex-col', animationClass)}>
            <h3 className="text-3xl font-bold text-gradient">{activeTopic.title}</h3>
            <div className="mt-6 space-y-4 prose prose-invert max-w-none text-muted-foreground flex-grow">
                {activeTopic.content}
            </div>
            <div className="mt-12 text-center">
                <Link 
                  href="/documentation-complete"
                  className="rounded-2xl border border-[#FF6D00] px-5 py-3 text-sm transition hover:-translate-y-0.5 hover:bg-white/5 inline-flex items-center"
                >
                  Accédez à notre documentation complète
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
