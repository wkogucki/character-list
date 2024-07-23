import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Loader, ErrorScreen, DetailCard } from 'components';
import { getCharacterById } from 'services/rickAndMortyApi';
import { ReactComponent as ArrowBackIcon } from 'assets/icons/ArrowBackIcon.svg';
import { ICharacter } from 'types/rickAndMorty.types';

export const CharacterDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery<ICharacter>({
    queryKey: ['characters', id],
    queryFn: () => getCharacterById(Number(id)),
  });

  const goToHomePage = () => {
    navigate('/');
  };

  return (
    <div className="container mx-auto flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl py-8 px-4">Character Details</h1>
      <button
        aria-label="Back to Home"
        className="flex items-center px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        onClick={goToHomePage}
      >
        <ArrowBackIcon className="w-5 h-5 mr-2 text-white" />
        Back to Home
      </button>
      {isLoading && <Loader className="my-8" />}
      {data && <DetailCard character={data} />}
      {error && (
        <ErrorScreen
          title="Something went wrong!"
          message="Please, try again"
          className="w-[400px] my-8"
        />
      )}
    </div>
  );
};
