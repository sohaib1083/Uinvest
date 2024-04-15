import React from 'react';

export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4 text-slate-800'>About Uinvest Realtor and Renovators</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 md:col-span-1">
          <p className='mb-4 text-slate-700'>Uinvest Realtor and Renovators, led by CEO Sarosh Ahmed Shamsi, is a prominent real estate agency with ambitious goals. Our company not only deals in real estate but also has a significant presence in the construction industry, with a portfolio of major projects around Karachi.</p>
          <p className='mb-4 text-slate-700'>
            Construction has been a longstanding family business, with a tradition of excellence passed down through generations. Our mission is to redefine the real estate and construction industries by providing innovative solutions, exceptional service, and unmatched expertise. We are committed to helping our clients achieve their real estate and construction objectives while exceeding their expectations at every step.
          </p>
          <p className='mb-4 text-slate-700'>At Uinvest Realtor and Renovators, we believe in the transformative power of real estate and construction and are dedicated to creating meaningful experiences for our clients. Whether you're buying, selling, or renovating a property, or undertaking a construction project, trust us to deliver unparalleled results and unmatched value.</p>
        </div>
        <div className="hidden md:flex flex-col justify-between">
          <img src='/images/kashif-center.webp' alt="Kashif Center" className="rounded-lg shadow-lg" style={{ maxHeight: '300px' }}/>
        </div>

        {/* Portfolio of Sarosh Ahmed Shamsi */}
        <div className="col-span-2">
          <h2 className="text-xl font-semibold mb-2">Sarosh Ahmed Shamsi (CEO)</h2>
          <p className="mb-4 text-slate-700">Sarosh Ahmed Shamsi, the CEO of Uinvest Realtor and Renovators, has a diverse portfolio of real estate and construction projects. With over two decades of experience in the industry, Sarosh has led the company to success by spearheading innovative projects and delivering exceptional results.</p>
          {/* Picture of Sarosh */}
          <div className="hidden md:flex flex-col justify-between">
            <img src="/img/sarosh.jpg" alt="Sarosh" className="rounded-lg shadow-lg" style={{ maxHeight: '300px', maxWidth: '300px' }}/>
          </div>
        </div>

        {/* Portfolio of Sohaib Sarosh Shamsi */}
        <div className="col-span-2">
          <h2 className="text-xl font-semibold mb-2">Sohaib Sarosh Shamsi (Technical Lead)</h2>
          <p className="mb-4 text-slate-700">Sohaib Sarosh Shamsi, the Technical Lead of Uinvest Realtor and Renovators, combines his expertise in marketing and IT to drive the company's technological advancements and marketing strategies. With a passion for innovation, Sohaib ensures that the company stays ahead of the curve in a rapidly evolving industry.</p>
          {/* Picture of Sohaib */}
          <div className="hidden md:flex flex-col justify-between">
            <img src="/img/AD-2022.jpg" alt="Sohaib" className="rounded-lg shadow-lg" style={{ maxHeight: '300px', maxWidth: '300px' }}/>
          </div>
        </div>

      </div>
    </div>
  );
}
