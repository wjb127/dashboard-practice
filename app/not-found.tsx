import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-muted-foreground mt-2">Page not found</p>
        <Link href="/" className="mt-4 inline-block text-primary hover:underline">
          Go back home
        </Link>
      </div>
    </div>
  );
}
