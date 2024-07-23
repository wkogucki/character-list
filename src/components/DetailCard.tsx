import { useState } from 'react';
import { ICharacter } from 'types/rickAndMorty.types';
import { urlOptimizer } from 'utils/urlOptimizer';
import { getStatusColorClass } from 'utils/getStatusColorClass';
import moment from 'moment';

interface DetailCardProps {
  character: ICharacter;
}
export const DetailCard = ({ character }: DetailCardProps) => {
  const [showAll, setShowAll] = useState(false);
  const episodesToShow = showAll
    ? character.episode
    : character.episode.slice(0, 9);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="flex gap-8 flex-wrap justify-center mt-8">
      <img
        className="rounded w-[300px] h-[300px]"
        src={urlOptimizer(character.image)}
        alt={character.name}
      />
      <div className="flex flex-col gap-4">
        <p className="font-semibold text-2xl">{character.name}</p>
        <div className="flex gap-1">
          <span className="font-semibold">Status:</span>
          <span
            className={`font-semibold ${getStatusColorClass(character.status)}`}
          >
            {character.status}
          </span>
        </div>
        <div className="flex gap-1">
          <span className="font-semibold">Species:</span>
          <span>{character.species}</span>
        </div>
        <div className="flex gap-1">
          <span className="font-semibold">Gender:</span>
          <span>{character.gender}</span>
        </div>
        <div className="flex gap-1">
          <span className="font-semibold">Origin:</span>
          <span>{character.origin.name}</span>
        </div>
        <div className="flex gap-1">
          <span className="font-semibold">Location:</span>
          <span>{character.location.name}</span>
        </div>
        <div className="flex gap-1">
          <span className="font-semibold">Created:</span>
          <span>{moment(character.created).format('DD/MM/YYYY HH:mm')}</span>
        </div>
        {character.type && (
          <div className="flex gap-1">
            <span className="font-semibold">Type:</span>
            <span>{character.type}</span>
          </div>
        )}
      </div>
      <div>
        <div className="flex items-center gap-2">
          <p className="font-semibold">Episodes:</p>
          {character.episode.length > 9 && (
            <button
              onClick={toggleShowAll}
              className="font-semibold text-blue-800 hover:underline"
              aria-label={showAll ? 'Show less episodes' : 'Show more episodes'}
            >
              {showAll ? 'Read Less' : 'Read More'}
            </button>
          )}
        </div>
        <ul>
          {episodesToShow.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
