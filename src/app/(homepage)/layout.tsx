'use client';
import OcSideBar from '@/app/shared/components/oc-sidebar';
import Header from '@/app/shared/components/oc-header';
import './homepage.scss';

export default function CoursesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex">
      <div>
        <OcSideBar />
      </div>
      <div className="flex w-full flex-col">
        <Header />
        <main className="home-page-main oc-padding-medium">{children}</main>
      </div>
    </section>
  );
}
