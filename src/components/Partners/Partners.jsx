import React from 'react';
import Marquee from 'react-fast-marquee';

const partnerOrgs = [
  {
    name: 'BRAC',
    logo: 'https://i.ibb.co/0yKk9mSX/brac.png',
    url: 'https://www.brac.net',
  },
  {
    name: 'JAAGO Foundation',
    logo: 'https://i.ibb.co/gL8bstYN/jaago-logo-1727084165-w2f-ULrshk.png',
    url: 'https://jaago.com.bd',
  },
  {
    name: 'Bidyanondo Foundation',
    logo: 'https://i.ibb.co/8DWzj4g5/biddyaanondo.png',
    url: 'https://bidyanondo.org',
  },
  {
    name: 'Friendship NGO',
    logo: 'https://i.ibb.co/bMfj2cRx/FRIENDSHIP-Logo66-768x217.png',
    url: 'https://friendship.ngo',
  },
  {
    name: 'Shakti Foundation',
    logo: 'https://i.ibb.co/dJMGp0kp/Shakti-Foundation.png',
    url: 'https://shakti.org.bd',
  },
];

const Partners = () => {
  return (
    <div className="my-10 px-1 md:px-3">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold mb-2">Our Partners</h2>
        <p className="italic font-medium text-lg">Together, we make a bigger impact.</p>
      </div>

      <div className='mt-5'>
        <Marquee
        pauseOnHover
        speed={50}
        gradient={false}
        direction="left"
        className="flex gap-10">
        {partnerOrgs.map((partner, index) => (
            <a
            key={index}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-24 flex items-center rounded-xl p-4"
            >
            <img
                src={partner.logo}
                alt={partner.name}
                className="h-20 object-contain w-[200px]"
            />
            </a>
        ))}
        </Marquee>
      </div>

    </div>
  );
};

export default Partners;
