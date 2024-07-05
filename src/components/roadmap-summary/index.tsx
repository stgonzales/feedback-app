import { HTMLAttributes, HtmlHTMLAttributes } from "react";
import { Button } from "../button";
import { cn } from "@/utils";

export function RoadmapSummary({ className }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn("flex flex-col gap-6", className)}>
            <div id="roadmap" className="w-full sm:w-[255px] p-6 bg-FFFFFF rounded-xl md:flex flex-col gap-6">
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
        </div>
    )
}