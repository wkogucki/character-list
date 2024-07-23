import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Homepage } from 'pages/Homepage';
import { CharacterDetails } from 'pages/CharacterDetails';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10,
    },
  },
});
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/character/:id" element={<CharacterDetails />} />
          </Routes>
        </main>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
