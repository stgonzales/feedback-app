import { Feedback } from "@prisma/client";
import { z } from "zod";
import { ChatBubbleIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { Tag } from "../tag";
import { CategoryKeyEnum, CategoryValueEnum } from "@/schema";

const CategoryMap = z.object({
    key: CategoryKeyEnum,
    value: CategoryValueEnum
})

const categoryMap: z.infer<typeof CategoryMap>[] = [
    {
        key: 'bug',
        value: 'Bug'
    },
    {
        key: 'enhancement',
        value: 'Enhancement'
    },
    {
        key: 'feature',
        value: 'Feature'
    },
    {
        key: 'ui',
        value: 'UI'
    },
    {
        key: 'ux',
        value: 'UX'
    },
] 

export function FeedbackItem({ upvotes, title, description, category, commentCount }: Feedback) {
    return (
        <div className='animate-slide-in bg-FFFFFF rounded-xl flex flex-col-reverse md:flex-row justify-between items-start gap-4 md:gap-12 text-647196 p-6  md:py-7 md:px-8 transition-shadow hover:shadow-md hover:cursor-pointer'>
            <div>
                <div id='upvotes' className='w-fit py-[6px] px-4 rounded-xl bg-F2F4FF font-semibold text-body-3 text-3A4374 flex md:flex-col items-center gap-2 pt-3 pb-2 hover:cursor-default'>
                    <ChevronUpIcon color='#4661E6' width={18} height={18}/>
                    <p>{upvotes}</p>
                </div>
            </div>
            <div className='w-full relative flex-1 flex justify-between items-center'>
                <div className='flex flex-col gap-2 md:gap-3'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-heading-3'>{title}</p>
                        <p>{description}</p>
                    </div>
                    <Tag id='' className='hover:cursor-default'>{categoryMap.filter(c => c.key === category)[0].value}</Tag>
                </div>
                <div className='absolute right-0 -bottom-12 md:static flex gap-2 items-center'>
                    {/* <MessageBalloon/> */}
                    <ChatBubbleIcon width={20} height={20} color='#CDD2EE'/>
                    <p className='font-bold'>{commentCount}</p>
                </div>
            </div>
        </div>
    )
}
