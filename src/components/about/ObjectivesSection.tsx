import React from 'react'

export const ObjectivesSection = ({ data }: { data: any }) => {
  const objectives = data?.objectivesList || [
    { label: 'Formation of tribal women and men Self-Help Groups' },
    { label: 'Formation of Village Poverty Reduction Committees' },
    { label: 'Establishment of evening tuition centers for tribal children' },
    { label: 'To preserve and promote the cultural identity of Scheduled Tribes' },
  ];

  return (
    <section className="py-20 bg-brand-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-text-dark">Objectives</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {objectives.map((obj: any, i: number) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-24 h-24 mb-6 text-brand-primary flex items-center justify-center">
                {obj?.icon?.url ? (
                  <img src={obj.icon.url} alt={obj.label} className="w-20 h-20 object-contain" />
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                )}
              </div>
              <p className="text-gray-800 font-medium text-base leading-snug max-w-[200px]">{obj.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
