import Image from 'next/image'

import { GetFeedbacks } from '@/api';
import { Button } from '@/components/form-elements/input/button';
import { FeedbackItem } from '@/components/feedback';
import { CategoryKeyType, SortByValueType } from '@/types';
import { formatFilters } from '@/utils';
import Link from 'next/link';

export default async function Suggestions({
  searchParams,
}: {
  searchParams: {
    category: CategoryKeyType | CategoryKeyType[] | undefined
    sortBy: string | undefined
  }
}) {

    const sortBy = searchParams.sortBy as SortByValueType || undefined

    const categories = formatFilters<CategoryKeyType>(searchParams.category)

    const data = await GetFeedbacks(sortBy, categories)

    if(!data.length) {
        return (
          <div className="h-full bg-FFFFFF rounded-xl flex flex-col justify-center items-center gap-12 text-647196 py-28 animate-appears">
              <Image src="/detective.png" alt='detective' width={130} height={136}/>
              <div className="flex flex-col items-center gap-4 text-center px-6">
                  <p className="text-heading-1">There is no feedback yet.</p>
                  <p className="text-body-1 max-w-[278px] md:max-w-[410px] ">Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
              </div>
              <Button asChild>
                <Link href="/feedback/new-feedback">+ Add Feedback</Link>
              </Button>
          </div>
        )
    }
    
    return (
      <div id="feedbacks" className='flex flex-col gap-5'>
          {data.map((d, i) => <FeedbackItem key={i} {...d}/>)}
      </div>
    )
}