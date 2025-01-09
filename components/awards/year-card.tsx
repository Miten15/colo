'use client';

import Link from 'next/link';
import { EventType } from '../../types/event';

interface YearCardProps {
  year: string;
  event: EventType | undefined;
}

export default function YearCard({ year, event }: YearCardProps) {
  return (
      <Link href={event ? `/excellence-awards/${event.id}` : "#"} className="block">
          <div className="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{year}</h2>
              {event && (
                  <>
                      <p className="text-gray-600 mb-4">{event.name}</p>
                      <p className="text-blue-500 font-medium">
                        {event.dates}
                      </p>
                   </>
             )}
        </div>
    </Link>
  );
}