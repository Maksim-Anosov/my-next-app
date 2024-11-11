'use client'

export default function Error({error}: {error: Error}) {
  return (
    <h1 style={{ textAlign: 'center', fontSize: '50px' }}>
      Error! {error.message}
    </h1>
  );
}