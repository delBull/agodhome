import { useLanguage } from '@/components/languageSwitcher/LanguageContext';
import * as React from 'react';

// Simple translation hook that doesn't cause hydration issues
export function useSimpleTranslations(namespace?: string) {
  const { messages } = useLanguage();

  const getNestedValue = (obj: any, path: string) => {
    return path.split('.').reduce((current, key) => {
      return current && current[key] !== undefined ? current[key] : null;
    }, obj);
  };

  const t = (key: string, fallback?: string) => {
    const fullKey = namespace ? `${namespace}.${key}` : key;
    const value = getNestedValue(messages, fullKey);
    
    if (value !== null && value !== undefined) {
      return value;
    }
    
    // Return fallback or key if no translation found
    return fallback || key;
  };

  // Add has method to match TranslationObject interface
  t.has = (key: string) => {
    const fullKey = namespace ? `${namespace}.${key}` : key;
    const value = getNestedValue(messages, fullKey);
    return value !== null && value !== undefined;
  };

  // Add raw method to get the raw value (including arrays and objects)
  t.raw = (key: string) => {
    const fullKey = namespace ? `${namespace}.${key}` : key;
    const value = getNestedValue(messages, fullKey);
    
    if (value !== null && value !== undefined) {
      return value;
    }
    
    // Return empty array as fallback for missing arrays
    return [];
  };

  // Add rich method for rendering text with React components
  t.rich = (key: string, components: Record<string, (chunks: any) => React.ReactNode>) => {
    const fullKey = namespace ? `${namespace}.${key}` : key;
    const value = getNestedValue(messages, fullKey);
    
    if (!value) {
      return key; // Return key if no translation found
    }
    
    // Simple implementation: replace <tag>content</tag> with components
    let result: React.ReactNode = value;
    
    Object.entries(components).forEach(([tag, component]) => {
      const regex = new RegExp(`<${tag}>(.*?)</${tag}>`, 'g');
      const parts = value.split(regex);
      
      if (parts.length > 1) {
        result = parts.map((part: string, index: number) => {
          if (index % 2 === 1) {
            // This is content inside the tag - add key for React
            return React.createElement(React.Fragment, { key: `${tag}-${index}` }, component(part));
          }
          return part !== '' ? React.createElement(React.Fragment, { key: `text-${index}` }, part) : null;
        }).filter((part: any) => part !== null);
      }
    });
    
    return result;
  };

  return t;
}
