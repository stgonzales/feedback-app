import Image from 'next/image'
import { Button } from "@/components/button";

export default function Suggestions() {
    return <main className="w-[825px]">
     <div className="h-full bg-FFFFFF rounded-xl flex flex-col justify-center items-center gap-12 text-647196 py-28">
        <Image src="/detective.png" alt='detective' width={130} height={136}/>
        <div className="w-[410px] flex flex-col items-center gap-4">
            <p className="text-heading-1">There is no feedback yet.</p>
            <p className="text-body-1">Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
        </div>
        <Button>+ Add Feedback</Button>
     </div>
    </main>
}



{/* <div className='flex flex-col gap-5'>
            <Suggestion title='Add tags for solutions' description='Easier to search for solutions based on a specific stack.' upvotes={112} commentsCount={2}/>
            <Suggestion title='Add a dark theme option' description='It would help people with light sensitivities and who prefer dark mode.' upvotes={99} commentsCount={4}/>
            <Suggestion title='Q&A within the challenge hubs' description='Challenge-specific Q&A would make for easy reference.' upvotes={65} commentsCount={2}/>
            <Suggestion title='Allow image/video upload to feedback' description='Images and screencasts can enhance comments on solutions.' upvotes={51} commentsCount={2}/>
        </div> */}