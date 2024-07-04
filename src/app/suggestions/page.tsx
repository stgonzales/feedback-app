import Image from 'next/image'

import { GetRequests } from '@/api';
import { Button } from '@/components/button';
import { SortByValueEnum } from '@/schema';
import { FeedbackItem } from '@/components/feedback';

export default async function Suggestions({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {

    const validSortBy = SortByValueEnum.safeParse(searchParams['sortBy'])

    const data = await GetRequests(validSortBy.data)

    if(!data.length) {
        return (
          <div className="h-full bg-FFFFFF rounded-xl flex flex-col justify-center items-center gap-12 text-647196 py-28">
              <Image src="/detective.png" alt='detective' width={130} height={136}/>
              <div className="w-[410px] flex flex-col items-center gap-4">
                  <p className="text-heading-1">There is no feedback yet.</p>
                  <p className="text-body-1">Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
              </div>
              <Button>+ Add Feedback</Button>
          </div>
        )
    }
    
    return (
      <div className='flex flex-col gap-5'>
          {data.map((d, i) => <FeedbackItem key={i} {...d}/>)}
      </div>
    )
}