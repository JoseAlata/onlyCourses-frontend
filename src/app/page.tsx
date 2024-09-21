// Indica que este componente es un Client Component
'use client';
import { Login } from '@/app/login';
export default function Home() {
  return (
    <section className="oc-surface-container-highest h-screen">
      <Login />
    </section>
  );
}
