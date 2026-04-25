import { Fragment } from 'react';

interface LinkToken {
  match: string;
  label: string;
  href: string;
  oncePerText?: boolean;
}

const TOKENS: LinkToken[] = [
  { match: 'SmartApiBox', label: 'SmartApiBox', href: 'https://smartapibox.com', oncePerText: true },
  { match: 'SDK', label: 'SDK', href: 'https://mvnrepository.com/artifact/com.smartapibox/plugin-api-sdk' },
  { match: 'smartqrbox.com', label: 'smartqrbox.com', href: 'https://smartqrbox.com' },
  { match: 'whatschat.smartapibox.com', label: 'whatschat.smartapibox.com', href: 'https://whatschat.smartapibox.com' },
  { match: 'quizforge.smartapibox.com', label: 'quizforge.smartapibox.com', href: 'https://quizforge.smartapibox.com' },
  { match: 'Football Metchy™', label: 'Football Metchy™', href: 'https://metchy.events/' },
  { match: 'CodePilot', label: 'CodePilot', href: 'https://codepilot.it' },
];

export function linkifyDescription(text: string, linkClassName: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  let key = 0;
  let remaining = text;
  const usedOnce = new Set<string>();

  // Handle one-time SmartApiBox replacement first (only first occurrence linked).
  while (remaining.length > 0) {
    let nextIndex = -1;
    let nextToken: LinkToken | null = null;
    for (const token of TOKENS) {
      if (token.oncePerText && usedOnce.has(token.match)) continue;
      const idx = remaining.indexOf(token.match);
      if (idx !== -1 && (nextIndex === -1 || idx < nextIndex)) {
        nextIndex = idx;
        nextToken = token;
      }
    }

    if (nextIndex === -1 || !nextToken) {
      parts.push(<Fragment key={key++}>{remaining}</Fragment>);
      break;
    }

    parts.push(<Fragment key={key++}>{remaining.substring(0, nextIndex)}</Fragment>);
    parts.push(
      <a
        key={key++}
        href={nextToken.href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
      >
        {nextToken.label}
      </a>
    );
    if (nextToken.oncePerText) usedOnce.add(nextToken.match);
    remaining = remaining.substring(nextIndex + nextToken.match.length);
  }

  return parts;
}
