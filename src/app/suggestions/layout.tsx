import { Suspense } from "react";
import { Button } from "@/components/button";
import { SortBy } from "@/components/sortby";
import { FilterTags } from "@/components/category";
import { categoryAction } from "@/actions";
import { FeedbackCount } from "@/components/counter";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="flex gap-6 pt-24">
      <aside className="flex flex-col gap-6">
        <div id="app-name" className="w-[255px] h-[137px] flex flex-col p-6 gradient text-FFFFFF rounded-xl justify-end to-blue-500 relative overflow-hidden">
            <h2>Frontend Mentor</h2>
            <p className="text-body-2">Feedback Board</p>
        </div>
        <FilterTags action={categoryAction} categories={['ui', 'ux', 'enhancement', 'bug', 'feature']}/>
        <div id="roadmap" className="w-[255px] p-6 bg-FFFFFF rounded-xl flex flex-col gap-6">
          <div className="flex justify-between">
            <p className="text-heading-3 text-3A4374">Roadmap</p>
            <Button styleAs="link">View</Button>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4 items-center text-body-1 text-647196">
            <div className="w-2 h-2 bg-F49F85 rounded-full"/>
              <p className="flex-1">Planned</p>
              <p className="font-bold">0</p>
          </div>
          <div className="flex gap-4 items-center text-body-1 text-647196">
            <div className="w-2 h-2 bg-AD1FEA rounded-full"/>
              <p className="flex-1">In-Progress</p>
              <p className="font-bold">0</p>
          </div>
          <div className="flex gap-4 items-center text-body-1 text-647196">
            <div className="w-2 h-2 bg-62BCFA rounded-full"/>
              <p className="flex-1">Live</p>
              <p className="font-bold">0</p>
          </div>
          </div>
        </div>
      </aside>
      <div className="flex flex-col gap-6 text-FFFFFF">
        <header className="w-full bg-373F68 pl-6 pr-4 rounded-xl flex justify-between items-center">
          <div className="flex items-center gap-9">
            <FeedbackCount/>
            <Suspense>
              <SortBy/>
            </Suspense>
          </div>
          <Button>+ Add Feedback</Button>
        </header>
        <main className="w-[825px]">
          {children}
        </main>
      </div>
    </div>
  );
}
