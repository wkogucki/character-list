import React from 'react';
import { urlOptimizer } from 'utils/urlOptimizer';
import { getStatusColorClass } from 'utils/getStatusColorClass';
import { ICharacter } from 'types/rickAndMorty.types';

interface CardProps {
  character: ICharacter;
  className?: string;
}

export const Card = ({ character, className }: CardProps) => {
  return (
    <div
      className={`border rounded overflow-hidden shadow-lg cursor-pointer w-[300px] ${className}`}
    >
      <img src={urlOptimizer(character.image)} alt={character.name} />
      <div className="py-3 px-3">
        <p className="text-xl font-bold">{character.name}</p>
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
        <div className="flex gap-1 flex-col items-start">
          <span className="font-semibold">Last known location:</span>
          <span>{character.location.name}</span>
        </div>
      </div>
    </div>
  );
};
