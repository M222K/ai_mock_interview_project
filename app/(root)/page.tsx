import { Button } from '@/components/ui/button'
import React from 'react'
import { dummyInterviews } from '@/constants'
import InterviewCard from '@/components/InterviewCard'
import { id } from 'zod/v4/locales'

const page = () => {
    return (
        <>
            <section className='card-cta'>
                <div className="flex flex-col gap-6 max-w-lg">
                    <h2>Get Interview Ready with AI-Powered Practice & Feedback</h2>
                    <p className='text-lg'>Practie on real Interview quetions & get instant Feedback</p>
                    <Button asChild className="btn-primary max-sm:w-full">
                        <a href="/interview">Start an Interview</a>
                    </Button>
                </div>

                <img src="/robot.png" alt="robot-dude" width={400} height={400}
                    className='max-sm:hidden' />
            </section>

            <section className="flex flex-col gap-6 mt-8">
                <h2>Your Interviews</h2>
                <div className="interviews-section">
                    {dummyInterviews.map((interview) => (<InterviewCard {...interview} key={interview.id} />
                    ))}

                    {/* <p>You haven&apos;t taken any interviews yet!</p> */}
                </div>

            </section>

            <section className='flex flex-col gap-6 mt-8'>
                <h2>Take an Interview</h2>
                <div className='interviews-section'>
                    {dummyInterviews.map((interview) => (<InterviewCard {...interview} key={interview.id} />
                    ))}
                </div>

            </section>
        </>
    )
}

export default page

