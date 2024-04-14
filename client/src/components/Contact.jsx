import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact({ listing }) {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState('');
 

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`https://uinvest-api.vercel.app/api/user/${listing.userRef}`);
        const data = await res.json();
        console.log(data)
        setLandlord(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);

  console.log(listing);

  const handleWhatsAppButtonClick = () => {
    const propertyDetails = `${listing.name}`;
    const encodedMessage = encodeURIComponent(`${"Im interested in "}\n\n${propertyDetails}\n\nLink: ${window.location.href}`);
    window.open(`https://wa.me/${landlord.num}?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      {landlord && (
        <div className='flex flex-col gap-2'>
          <p>
            Contact <span className='font-semibold'>{landlord.username}</span>{' '}
            for{' '}
            <span className='font-semibold'>{listing.name.toLowerCase()}</span>

          </p>
          <p>
            on{' '}
            <a href={`tel:${landlord.num}`} className='font-semibold text-blue-500 hover:underline'>
              {landlord.num}
            </a>
          </p>
          <button onClick={handleWhatsAppButtonClick} className='bg-green-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-green-600'>
            WhatsApp
          </button>
        </div>
      )}
    </>
  );
}
