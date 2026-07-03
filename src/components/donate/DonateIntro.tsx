import React from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'

export const DonateIntro = ({ data }: { data: any }) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-text-dark mb-12">
          {data?.pageTitle || 'Your Contribution Changes Lives'}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Image and Text */}
          <div className="space-y-6">
            {data?.introImage?.url ? (
              <img 
                src={data.introImage.url} 
                alt="Donation Impact" 
                className="w-full h-auto aspect-[4/3] object-cover rounded-3xl shadow-md"
              />
            ) : (
              <div className="w-full aspect-[4/3] bg-gray-200 rounded-3xl animate-pulse"></div>
            )}
            
            <div className="prose prose-gray max-w-none text-sm md:text-base leading-relaxed text-gray-700">
              {data?.introText ? (
                <RichText data={data.introText} />
              ) : (
                <p>
                  Adivasi Social Service Educational Trust (ASSET) is a registered Non-Governmental Organization working with dedication towards the upliftment and empowerment of tribal and underprivileged communities in Tamil Nadu.
                </p>
              )}
            </div>
          </div>

          {/* Right Column: Donation Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-brand-primary/30 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary text-center mb-10 tracking-wide uppercase">
              DONATE
            </h2>
            
            {/* QR Code */}
            <div className="flex justify-center mb-10">
              {data?.qrCode?.url ? (
                <img 
                  src={data.qrCode.url} 
                  alt="Donation QR Code" 
                  className="w-48 h-48 sm:w-64 sm:h-64 object-contain"
                />
              ) : (
                <div className="w-64 h-64 bg-gray-100 flex items-center justify-center rounded-xl border border-dashed border-gray-300">
                  <span className="text-gray-400 font-medium">QR Code Placeholder</span>
                </div>
              )}
            </div>

            {/* Bank Details */}
            <div className="space-y-3 text-sm sm:text-base text-gray-800 border border-green-500 rounded-lg p-6">
               <div className="flex flex-col sm:flex-row">
                 <span className="font-bold min-w-[150px]">Bank Name:</span>
                 <span className="text-gray-600">{data?.bankDetails?.bankName || 'Indian Bank'}</span>
               </div>
               <div className="flex flex-col sm:flex-row">
                 <span className="font-bold min-w-[150px]">Account Number:</span>
                 <span className="text-gray-600">{data?.bankDetails?.accountNumber || '407057375'}</span>
               </div>
               <div className="flex flex-col sm:flex-row">
                 <span className="font-bold min-w-[150px]">Account Name:</span>
                 <span className="text-gray-600">{data?.bankDetails?.accountName || 'Asset'}</span>
               </div>
               <div className="flex flex-col sm:flex-row">
                 <span className="font-bold min-w-[150px]">Account Type:</span>
                 <span className="text-gray-600">{data?.bankDetails?.accountType || 'SB (Savings Bank) account'}</span>
               </div>
               <div className="flex flex-col sm:flex-row">
                 <span className="font-bold min-w-[150px]">Branch name:</span>
                 <span className="text-gray-600">{data?.bankDetails?.branchName || 'Tambaram East'}</span>
               </div>
               <div className="flex flex-col sm:flex-row">
                 <span className="font-bold min-w-[150px]">IFSC Code:</span>
                 <span className="text-gray-600">{data?.bankDetails?.ifscCode || 'IDIB0001004'}</span>
               </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
