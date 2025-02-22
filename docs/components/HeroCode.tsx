/* eslint-disable react/no-unescaped-entities */
import clsx from 'clsx';
import {ReactNode, useState} from 'react';

function Tab({
  active,
  children,
  onClick
}: {
  active: boolean;
  children: ReactNode;
  onClick(): void;
}) {
  return (
    <button
      className={clsx(
        'flex items-center rounded-md px-4 py-2 text-sm font-medium transition-colors',
        active
          ? 'bg-slate-800 text-white'
          : 'bg-slate-800/40 text-slate-500 hover:bg-slate-800'
      )}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

const files = [
  {
    name: 'UserProfile.tsx',
    code: (
      <code data-language="tsx" data-theme="default">
        <span className="line">
          <span style={{color: 'var(--shiki-token-keyword)'}}>import</span>
          <span style={{color: 'var(--shiki-color-text)'}}>
            {' '}
            {'{'}useTranslations{'}'}{' '}
          </span>
          <span style={{color: 'var(--shiki-token-keyword)'}}>from</span>
          <span style={{color: 'var(--shiki-color-text)'}}> </span>
          <span style={{color: 'var(--shiki-token-string-expression)'}}>
            'next-intl'
          </span>
          <span style={{color: 'var(--shiki-color-text)'}}>;</span>
        </span>
        <span className="line"> </span>
        <span className="line">
          <span style={{color: 'var(--shiki-token-keyword)'}}>
            export default function
          </span>
          <span style={{color: 'var(--shiki-color-text)'}}> </span>
          <span style={{color: 'var(--shiki-token-function)'}}>
            UserProfile
          </span>
          <span style={{color: 'var(--shiki-color-text)'}}>
            ({'{'}user{'}'}) {'{'}
          </span>
        </span>
        <span className="line">
          <span style={{color: 'var(--shiki-color-text)'}}>{'  '}</span>
          <span style={{color: 'var(--shiki-token-keyword)'}}>const</span>
          <span style={{color: 'var(--shiki-color-text)'}}> </span>
          <span style={{color: 'var(--shiki-token-constant)'}}>t</span>
          <span style={{color: 'var(--shiki-color-text)'}}> </span>
          <span style={{color: 'var(--shiki-token-keyword)'}}>=</span>
          <span style={{color: 'var(--shiki-color-text)'}}> </span>
          <span style={{color: 'var(--shiki-token-function)'}}>
            useTranslations
          </span>
          <span style={{color: 'var(--shiki-color-text)'}}>(</span>
          <span style={{color: 'var(--shiki-token-string-expression)'}}>
            'UserProfile'
          </span>
          <span style={{color: 'var(--shiki-color-text)'}}>);</span>
        </span>
        <span className="line"> </span>
        <span className="line">
          <span style={{color: 'var(--shiki-color-text)'}}>{'  '}</span>
          <span style={{color: 'var(--shiki-token-keyword)'}}>return</span>
          <span style={{color: 'var(--shiki-color-text)'}}> (</span>
        </span>
        <span className="line">
          <span style={{color: 'var(--shiki-color-text)'}}>{'    '}&lt;</span>
          <span style={{color: 'var(--shiki-token-string-expression)'}}>
            section
          </span>
          <span style={{color: 'var(--shiki-color-text)'}}>&gt;</span>
        </span>
        <span className="line">
          <span style={{color: 'var(--shiki-color-text)'}}>{'      '}&lt;</span>
          <span style={{color: 'var(--shiki-token-string-expression)'}}>
            h1
          </span>
          <span style={{color: 'var(--shiki-color-text)'}}>&gt;{'{'}</span>
          <span style={{color: 'var(--shiki-token-function)'}}>t</span>
          <span style={{color: 'var(--shiki-color-text)'}}>(</span>
          <span style={{color: 'var(--shiki-token-string-expression)'}}>
            'title'
          </span>
          <span style={{color: 'var(--shiki-token-punctuation)'}}>,</span>
          <span style={{color: 'var(--shiki-color-text)'}}>
            {' '}
            {'{'}firstName
          </span>
          <span style={{color: 'var(--shiki-token-keyword)'}}>:</span>
          <span style={{color: 'var(--shiki-color-text)'}}> </span>
          <span style={{color: 'var(--shiki-token-constant)'}}>user</span>
          <span style={{color: 'var(--shiki-color-text)'}}>
            .firstName{'}'}){'}'}&lt;/
          </span>
          <span style={{color: 'var(--shiki-token-string-expression)'}}>
            h1
          </span>
          <span style={{color: 'var(--shiki-color-text)'}}>&gt;</span>
        </span>
        <span className="line">
          <span style={{color: 'var(--shiki-color-text)'}}>{'      '}&lt;</span>
          <span style={{color: 'var(--shiki-token-string-expression)'}}>p</span>
          <span style={{color: 'var(--shiki-color-text)'}}>&gt;{'{'}</span>
          <span style={{color: 'var(--shiki-token-function)'}}>t</span>
          <span style={{color: 'var(--shiki-color-text)'}}>(</span>
          <span style={{color: 'var(--shiki-token-string-expression)'}}>
            'membership'
          </span>
          <span style={{color: 'var(--shiki-token-punctuation)'}}>,</span>
          <span style={{color: 'var(--shiki-color-text)'}}>
            {' '}
            {'{'}memberSince
          </span>
          <span style={{color: 'var(--shiki-token-keyword)'}}>:</span>
          <span style={{color: 'var(--shiki-color-text)'}}> </span>
          <span style={{color: 'var(--shiki-token-constant)'}}>user</span>
          <span style={{color: 'var(--shiki-color-text)'}}>
            .memberSince{'}'}){'}'}&lt;/
          </span>
          <span style={{color: 'var(--shiki-token-string-expression)'}}>p</span>
          <span style={{color: 'var(--shiki-color-text)'}}>&gt;</span>
        </span>
        <span className="line">
          <span style={{color: 'var(--shiki-color-text)'}}>{'      '}&lt;</span>
          <span style={{color: 'var(--shiki-token-string-expression)'}}>p</span>
          <span style={{color: 'var(--shiki-color-text)'}}>&gt;{'{'}</span>
          <span style={{color: 'var(--shiki-token-function)'}}>t</span>
          <span style={{color: 'var(--shiki-color-text)'}}>(</span>
          <span style={{color: 'var(--shiki-token-string-expression)'}}>
            'followers'
          </span>
          <span style={{color: 'var(--shiki-token-punctuation)'}}>,</span>
          <span style={{color: 'var(--shiki-color-text)'}}> {'{'}count</span>
          <span style={{color: 'var(--shiki-token-keyword)'}}>:</span>
          <span style={{color: 'var(--shiki-color-text)'}}> </span>
          <span style={{color: 'var(--shiki-token-constant)'}}>user</span>
          <span style={{color: 'var(--shiki-color-text)'}}>
            .numFollowers{'}'}){'}'}&lt;/
          </span>
          <span style={{color: 'var(--shiki-token-string-expression)'}}>p</span>
          <span style={{color: 'var(--shiki-color-text)'}}>&gt;</span>
        </span>
        <span className="line">
          <span style={{color: 'var(--shiki-color-text)'}}>{'    '}&lt;/</span>
          <span style={{color: 'var(--shiki-token-string-expression)'}}>
            section
          </span>
          <span style={{color: 'var(--shiki-color-text)'}}>&gt;</span>
        </span>
        <span className="line">
          <span style={{color: 'var(--shiki-color-text)'}}>{'  '});</span>
        </span>
        <span className="line">
          <span style={{color: 'var(--shiki-color-text)'}}>{'}'}</span>
        </span>
      </code>
    )
  },
  {
    name: 'en.json',
    code: (
      <code data-language="json" data-theme="default">
        <span className="line">
          <span style={{color: 'var(--shiki-color-text)'}}>{'{'}</span>
        </span>
        <span className="line">
          <span style={{color: 'var(--shiki-color-text)'}}>{'  '}</span>
          <span style={{color: 'var(--shiki-token-keyword)'}}>
            "UserProfile"
          </span>
          <span style={{color: 'var(--shiki-token-punctuation)'}}>:</span>
          <span style={{color: 'var(--shiki-color-text)'}}> {'{'}</span>
        </span>
        <span className="line">
          <span style={{color: 'var(--shiki-color-text)'}}>{'    '}</span>
          <span style={{color: 'var(--shiki-token-keyword)'}}>"title"</span>
          <span style={{color: 'var(--shiki-token-punctuation)'}}>:</span>
          <span style={{color: 'var(--shiki-color-text)'}}> </span>
          <span style={{color: 'var(--shiki-token-string-expression)'}}>
            "{'{'}username{'}'}'s profile"
          </span>
          <span style={{color: 'var(--shiki-token-punctuation)'}}>,</span>
        </span>
        <span className="line">
          <span style={{color: 'var(--shiki-color-text)'}}>{'    '}</span>
          <span style={{color: 'var(--shiki-token-keyword)'}}>
            "membership"
          </span>
          <span style={{color: 'var(--shiki-token-punctuation)'}}>:</span>
          <span style={{color: 'var(--shiki-color-text)'}}> </span>
          <span style={{color: 'var(--shiki-token-string-expression)'}}>
            "Member since {'{'}memberSince, date, short{'}'}"
          </span>
          <span style={{color: 'var(--shiki-token-punctuation)'}}>,</span>
        </span>
        <span className="line">
          <span style={{color: 'var(--shiki-color-text)'}}>{'    '}</span>
          <span style={{color: 'var(--shiki-token-keyword)'}}>"followers"</span>
          <span style={{color: 'var(--shiki-token-punctuation)'}}>:</span>
          <span style={{color: 'var(--shiki-color-text)'}}> </span>
          <span style={{color: 'var(--shiki-token-string-expression)'}}>
            "{'{'}count, plural,
          </span>
          <span style={{color: 'var(--shiki-token-punctuation)'}}> ↵</span>
        </span>
        <span className="line">
          <span style={{color: 'var(--shiki-token-string-expression)'}}>
            {'                    '}
            =0 {'{'}No followers yet{'}'}
          </span>
          <span style={{color: 'var(--shiki-token-punctuation)'}}> ↵</span>
        </span>
        <span className="line">
          <span style={{color: 'var(--shiki-token-string-expression)'}}>
            {'                    '}
            =1 {'{'}One follower{'}'}
          </span>
          <span style={{color: 'var(--shiki-token-punctuation)'}}> ↵</span>
        </span>
        <span className="line">
          <span style={{color: 'var(--shiki-token-string-expression)'}}>
            {'                    '}
            other {'{'}# followers{'}'}
          </span>
          <span style={{color: 'var(--shiki-token-punctuation)'}}> ↵</span>
        </span>
        <span className="line">
          <span style={{color: 'var(--shiki-token-string-expression)'}}>
            {'                  '}
            {'}'}"
          </span>
        </span>
        <span className="line">
          <span style={{color: 'var(--shiki-color-text)'}}>{'  }'}</span>
        </span>
        <span className="line">
          <span style={{color: 'var(--shiki-color-text)'}}>{'}'}</span>
        </span>
      </code>
    )
  },
  {
    name: 'Output',
    code: (
      <code data-language="html" data-theme="default">
        <span className="line">
          <span style={{color: 'var(--shiki-color-text)'}}>&lt;</span>
          <span style={{color: 'var(--shiki-token-string-expression)'}}>
            section
          </span>
          <span style={{color: 'var(--shiki-color-text)'}}>&gt;</span>
        </span>
        <span className="line">
          <span style={{color: 'var(--shiki-color-text)'}}>{'  '}&lt;</span>
          <span style={{color: 'var(--shiki-token-string-expression)'}}>
            h2
          </span>
          <span style={{color: 'var(--shiki-color-text)'}}>
            &gt;Jane's profile&lt;/
          </span>
          <span style={{color: 'var(--shiki-token-string-expression)'}}>
            h2
          </span>
          <span style={{color: 'var(--shiki-color-text)'}}>&gt;</span>
        </span>
        <span className="line">
          <span style={{color: 'var(--shiki-color-text)'}}>{'  '}&lt;</span>
          <span style={{color: 'var(--shiki-token-string-expression)'}}>p</span>
          <span style={{color: 'var(--shiki-color-text)'}}>
            &gt;Member since Oct 13, 2023&lt;/
          </span>
          <span style={{color: 'var(--shiki-token-string-expression)'}}>p</span>
          <span style={{color: 'var(--shiki-color-text)'}}>&gt;</span>
        </span>
        <span className="line">
          <span style={{color: 'var(--shiki-color-text)'}}>{'  '}&lt;</span>
          <span style={{color: 'var(--shiki-token-string-expression)'}}>p</span>
          <span style={{color: 'var(--shiki-color-text)'}}>
            &gt;1,481 followers&lt;/
          </span>
          <span style={{color: 'var(--shiki-token-string-expression)'}}>p</span>
          <span style={{color: 'var(--shiki-color-text)'}}>&gt;</span>
        </span>
        <span className="line">
          <span style={{color: 'var(--shiki-color-text)'}}>&lt;/</span>
          <span style={{color: 'var(--shiki-token-string-expression)'}}>
            section
          </span>
          <span style={{color: 'var(--shiki-color-text)'}}>&gt;</span>
        </span>
      </code>
    )
  }
];

export default function HeroCode() {
  const [fileIndex, setFileIndex] = useState(0);

  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-md bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10 blur-lg" />
      <div className="absolute inset-0 rounded-md bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10" />
      <div className="relative rounded-md bg-[#0A101F]/80 ring-1 ring-white/10 backdrop-blur">
        <div className="absolute -top-px right-10 h-px w-1/2 bg-gradient-to-r from-sky-300/0 via-sky-300/40 to-sky-300/0" />
        <div className="p-4">
          <svg
            aria-hidden="true"
            className="h-2.5 w-auto"
            fill="none"
            viewBox="0 0 42 10"
          >
            <circle className="fill-slate-800" cx={5} cy={5} r="4.5" />
            <circle className="fill-slate-800" cx={21} cy={5} r="4.5" />
            <circle className="fill-slate-800" cx={37} cy={5} r="4.5" />
          </svg>
          <div className="mt-4 flex space-x-2 overflow-x-auto">
            {files.map((file) => (
              <Tab
                key={file.name}
                active={fileIndex === files.indexOf(file)}
                onClick={() => setFileIndex(files.indexOf(file))}
              >
                {file.name}
              </Tab>
            ))}
          </div>
          <div className="mt-6 flex items-start lg:min-h-[260px] lg:w-[684px]">
            <pre className="ml-[-16px] flex overflow-x-auto px-0" data-theme>
              {files[fileIndex].code}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
