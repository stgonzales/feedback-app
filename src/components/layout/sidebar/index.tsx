import { Button } from "../../button";
import { FilterTags } from "../../category";
import { HamburgerMenu } from "../../hamburger-menu";
import { Tile } from "../tile";

export function Sidebar() {
    return (
        <aside className="flex gap-3 lg:flex-col lg:gap-6">
            <Tile id="app-name" className="gradient text-FFFFFF to-blue-500 overflow-hidden w-full flex justify-between relative md:rounded-xl md:items-end">
                <div>
                    <h2>Frontend Mentor</h2>
                    <p className="text-body-2">Feedback Board</p>
                </div>
                <HamburgerMenu className="md:hidden z-10"/>
            </Tile>
            <FilterTags categories={['ui', 'ux', 'enhancement', 'bug', 'feature']}/>
            <Tile id="roadmap" className="hidden justify-between md:flex md:rounded-xl md:flex-col">
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
            </Tile>
        </aside>
    )
}