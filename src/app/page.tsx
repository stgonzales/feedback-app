import Image from 'next/image'

import { api } from '@/api';
import { Button } from '@/components/form-elements/input/button';
import { FeedbackItem } from '@/components/feedback';
import { SortByValueType } from '@/types';
import Link from 'next/link';
import { Feedback } from '@prisma/client';
import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { FeedbackCount } from '@/components/counter';
import { SortBy } from '@/components/sortby';

export default async function Feedbacks({
  searchParams,
}: {
  searchParams: {
    category: string | string[] | undefined
    sortBy: string | undefined
  }
}) {
    const sortBy = searchParams.sortBy as SortByValueType || undefined
    const category = searchParams.category?.toString()    

    const urlParams = new URLSearchParams()

    if(sortBy) urlParams.set("sortBy", sortBy)
    if(category) {
      category.split(',').forEach(c =>  urlParams.append("category", c))
    }

    const data = await api<Feedback[]>(`/feedback/all${'?' + urlParams}`)

    return (
      <div className="flex flex-col m-auto md:gap-6 md:pt-14 md:px-6 md:max-w-[689px] lg:max-w-[1110px] lg:flex-row">
        <Sidebar/>
        <div className="flex flex-col gap-6 text-FFFFFF">
          <Header className="bg-373F68">
            <div className="flex gap-9">
              <FeedbackCount count={data.length}/>
              <SortBy/>
            </div>
            <Button asChild>
              <Link href="/feedback/new-feedback">+ Add Feedback</Link>
            </Button>
          </Header>
          <main className="px-6 md:p-0">
            <div id="feedbacks" className='flex flex-col gap-5'>
              {!data.length ? (<EmptyFeedbacks/>) : (data.map((d, i) => d && <FeedbackItem key={i} {...d}/>))}
            </div>
          </main>
        </div>
      </div>
    )
}

function EmptyFeedbacks() {
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