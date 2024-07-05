import { Button } from "@/components/button";
import { SortBy } from "@/components/sortby";
import { FeedbackCount } from "@/components/counter";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="w-full flex flex-col md:w-auto md:gap-10 md:pt-14 md:px-10 lg:flex-row lg:gap-6 lg:pt-24">
      <Sidebar/>
      <div className="flex flex-col gap-6 text-FFFFFF">
        <Header>
          <div className="flex gap-9">
            <FeedbackCount/>
            <SortBy/>
          </div>
          <Button>+ Add Feedback</Button>
        </Header>
        <main className="px-6 md:px-0 lg:max-w-[825px]">
          {children}
        </main>
      </div>
    </div>
  );
}
