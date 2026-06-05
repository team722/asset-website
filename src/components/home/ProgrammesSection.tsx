import React from 'react'

export const ProgrammesSection = ({ data }: { data: any }) => {
  const programmes = data?.programmesItems || [
    { title: 'Rural Development', description: 'Creating integral paths for tomorrow' },
    { title: 'Education, Health, Child and Women Development', description: 'Transforming community spaces to empower' },
    { title: 'Tribal Development', description: 'Empowering communities globally without borders' },
    { title: 'Culture Development', description: 'Fostering cultural roots and networks' },
    { title: 'Tribal Rights', description: 'Advocating those in need by legal aide clinics' },
    { title: 'Accessing Government Schemes', description: 'Accessing governance that rights assures' },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">{data?.programmesHeadline || 'Our Programmes'}</h2>
          <p className="text-brand-accent font-medium text-base">
            {data?.programmesSubtitle || 'Solutions to the world\'s pressing issues'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programmes.map((prog: any, i: number) => (
            <div key={i} className="flex flex-col sm:flex-row gap-4 items-start p-4 hover:bg-gray-200 rounded-xl transition-colors border border-transparent hover:border-gray-100">
              <div className="w-48 h-32 flex-shrink-0 bg-transparent flex items-center justify-center">
                {prog?.icon?.url ? (
                  <img src={prog.icon.url} alt={prog.title} className="w-full h-full object-contain" />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-blue-100"></div>
                )}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{prog.title}</h3>
                <p className="text-sm text-gray-600">{prog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
