'use client'

export default function Error({error}: {error: Error}) {
  return (
    <h1 style={{ textAlign: 'center', fontSize: '50px', height: '80vh' }}>
      Error! {error.message}
    </h1>
  );
}