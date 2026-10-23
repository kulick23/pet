type AnimalIconProps = {
  kind: 'cat' | 'dog';
  title?: string;
};

export function AnimalIcon({ kind, title }: AnimalIconProps) {
  const labelled = Boolean(title);

  return (
    <svg className={`animal-icon animal-icon--${kind}`} viewBox="0 0 64 64" role={labelled ? 'img' : undefined} aria-hidden={labelled ? undefined : true} aria-label={title}>
      {kind === 'cat' ? (
        <>
          <path d="M15 25 13 9l14 9c3-1 7-1 10 0l14-9-2 16c4 5 6 11 5 18-1 10-10 16-22 16S11 53 10 43c-1-7 1-13 5-18Z" />
          <path d="M22 37h1m18 0h1M26 46c4 3 8 3 12 0M16 43 4 40m12 8L5 50m43-7 12-3m-12 8 11 2" />
        </>
      ) : (
        <>
          <path d="M20 18c7-5 17-5 24 0l11-7 2 17-6 5v10c0 10-8 17-19 17s-19-7-19-17V33l-6-5 2-17 11 7Z" />
          <path d="M22 37h1m18 0h1M27 45h10c0 5-10 5-10 0Z" />
        </>
      )}
    </svg>
  );
}
