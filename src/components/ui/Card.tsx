import React from 'react';
import Image from 'next/image';

interface CardProps {
    title: string;
    content: string;
    imageUrl?: string;
}

const Card: React.FC<CardProps> = ({ title, content, imageUrl }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden p-4 m-4">
            {imageUrl && (
              <div className="relative w-full h-48">
                <Image src={imageUrl} alt={title} fill className="object-cover" unoptimized />
              </div>
            )}
            <h2 className="text-xl font-semibold mt-4">{title}</h2>
            <p className="text-gray-700 mt-2">{content}</p>
        </div>
    );
};

export default Card;