import React from 'react'

export const GoalsSection = ({ data }: { data: any }) => {
  const goals = data?.goalsItems || [
    { title: 'No Poverty' }, { title: 'Good Health and Well-being' },
    { title: 'Quality Education' }, { title: 'Gender Equality' },
    { title: 'Decent Work and Economic Growth' }, { title: 'Reduced Inequality' },
    { title: 'Climate Action' }, { title: 'Peace and Justice Strong Institutions' }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">{data?.goalsHeadline || 'Our Goals'}</h2>
          <p className="text-brand-accent font-medium text-base">
            {data?.goalsSubtitle || 'Driving SDG aligned Initiatives'}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {goals.map((goal: any, i: number) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-brand-bg-alt rounded-full flex items-center justify-center mb-4 transition-colors text-brand-primary">
                {goal?.icon?.url ? (
                  <img src={goal.icon.url} alt={goal.title} className="w-24 h-24 object-contain" />
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                )}
              </div>
              <p className="text-lg font-normal text-black leading-tight max-w-[250px]">{goal.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
