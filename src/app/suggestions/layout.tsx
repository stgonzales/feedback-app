import { Button } from "@/components/button";
import { LampGear } from "@/components/icons/lamp-gear";
import { Tag } from "@/components/tag";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex gap-6">
      <aside className="flex flex-col gap-6">
        <div id="app-name" className="w-[255px] h-[137px] flex flex-col p-6 gradient text-FFFFFF rounded-xl justify-end to-blue-500 relative overflow-hidden">
            <h2>Frontend Mentor</h2>
            <p className="text-body-2">Feedback Board</p>
        </div>
        <div id="tags" className="w-[255px] p-6 bg-FFFFFF rounded-xl flex gap-2 flex-wrap">
            <Tag>All</Tag>
            <Tag>UI</Tag>
            <Tag>UX</Tag>
            <Tag>Enhancement</Tag>
            <Tag>Bug</Tag>
            <Tag>Feature</Tag>
        </div>
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
        <header className="w-full bg-373F68 pl-6 pr-4 py-[14px] rounded-xl flex justify-between">
          <div className="flex items-center gap-9">
            <div className="flex gap-4 items-center">
              <LampGear/>
              <p className="text-heading-3">0 Suggestions</p>
            </div>
          <p className="text-heading-4 font-normal">Sort by: <span className="text-heading-4">Most Upvoted</span></p>
          </div>
          <Button>+ Add Feedback</Button>
        </header>
        {children}
      </div>
    </div>
  );
}
