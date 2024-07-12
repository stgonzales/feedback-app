import Image from 'next/image'

import { GetRequests } from '@/api';
import { Button } from '@/components/form-elements/input/button';
import { SortByValueEnum, CategoryKeyEnum } from '@/schema';
import { FeedbackItem } from '@/components/feedback';
import { CategoryKeyType } from '@/types';
import { formatFilters } from '@/utils';

export default async function Suggestions({
  searchParams,
}: {
  searchParams: {
    category: CategoryKeyType | CategoryKeyType[] | undefined
    sortBy: string | undefined
  }
}) {

    const validSortBy = SortByValueEnum.safeParse(searchParams['sortBy'])

    const categories = formatFilters<CategoryKeyType>(searchParams.category)

    const data = await GetRequests(validSortBy.data, categories)

    if(!data.length) {
        return (
          <div className="h-full bg-FFFFFF rounded-xl flex flex-col justify-center items-center gap-12 text-647196 py-28 animate-appears">
              <Image src="/detective.png" alt='detective' width={130} height={136}/>
              <div className="flex flex-col items-center gap-4 text-center px-6">
                  <p className="text-heading-1">There is no feedback yet.</p>
                  <p className="text-body-1 max-w-[278px] md:max-w-[410px] ">Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
              </div>
              <Button>+ Add Feedback</Button>
          </div>
        )
    }
    
    return (
      <div id="feedbacks" className='flex flex-col gap-5'>
          {data.map((d, i) => <FeedbackItem key={i} {...d}/>)}
      </div>
    )
}