import { useState, useEffect, ChangeEvent } from 'react';

interface SearchInputProps {
  searchTerm: string;
  onSearchChange: (newSearchTerm: string) => void;
}

export const SearchInput = ({
  searchTerm,
  onSearchChange,
}: SearchInputProps) => {
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearchChange(debouncedTerm);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [debouncedTerm, onSearchChange]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDebouncedTerm(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="search" className="mb-2 text-gray-700 font-semibold">
        Search a character:
      </label>
      <input
        id="search"
        type="text"
        value={debouncedTerm}
        onChange={handleChange}
        className="appearance-none bg-transparent border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
        placeholder="Search a character, eg. Rick"
        aria-label="Search through all of the Rick and Morty characters"
      />
    </div>
  );
};
