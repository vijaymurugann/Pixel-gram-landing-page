import React from 'react';

export const CommunityAvatars: React.FC = () => {
  // Using picsum for placeholder faces
  const avatars = [
    "https://i.pravatar.cc/150?u=seerakku1",
    "https://i.pravatar.cc/150?u=seerakku2",
    "https://i.pravatar.cc/150?u=seerakku3"
  ];

  return (
    <div className="flex items-center">
      <div className="flex -space-x-4 p-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
        {avatars.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Member ${i + 1}`}
            className="w-12 h-12 rounded-full border-2 border-white object-cover"
          />
        ))}
      </div>
      <div className="ml-4 flex flex-col justify-center">
         <div className="flex gap-1">
            {[1,2,3,4,5].map(star => (
                <svg key={star} className="w-3 h-3 text-seerakku-yellow fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
         </div>
         <span className="text-xs text-white/90 font-medium mt-0.5">Trusted by 1200+ Customers</span>
      </div>
    </div>
  );
};