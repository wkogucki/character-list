import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { Loader, Pagination, SearchInput, ErrorScreen, Card } from 'components';
import { getCharacters } from 'services/rickAndMortyApi';
import { CharactersResponse } from 'types/rickAndMorty.types';

export const Homepage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [searchName, setSearchName] = useState('');
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery<CharactersResponse>({
    queryKey: ['characters', pageNumber, searchName],
    queryFn: () => getCharacters(pageNumber, searchName),
  });

  useEffect(() => {
    setPageNumber(1);
  }, [searchName]);

  const handlePageClick = (selectedItem: { selected: number }) => {
    const selectedPage = selectedItem.selected + 1;
    setPageNumber(selectedPage);
  };

  const handleCardClick = (id: number) => {
    navigate(`/character/${id}`);
  };

  return (
    <div className="max-w-[948px] mx-auto flex flex-col gap-8">
      <h1 className="flex justify-center font-bold text-3xl pt-8 px-4">
        Rick and Morty Character List
      </h1>
      <div className="px-4 desktop:px-0">
        <SearchInput searchTerm={searchName} onSearchChange={setSearchName} />
      </div>

      {isLoading && <Loader />}
      {error && (
        <ErrorScreen
          title="Something went wrong!"
          message="Please, try again"
        />
      )}
      {data && (
        <div className="flex flex-wrap justify-center items-center gap-6">
          {data?.results.map((el, index) => (
            <button
              key={index}
              className="p-0 border-none bg-transparent cursor-pointer hover:shadow-lg"
              aria-label={`View details of ${el.name}`}
              onClick={() => handleCardClick(el.id)}
            >
              <Card character={el} />
            </button>
          ))}
          <div className="w-full mx-auto mt-3">
            <Pagination
              pageCount={data.info.pages}
              pageNumber={pageNumber}
              onPageChange={(selected) => handlePageClick(selected)}
            />
          </div>
        </div>
      )}
    </div>
  );
};
