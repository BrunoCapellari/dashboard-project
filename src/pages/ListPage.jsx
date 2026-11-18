import { useState } from 'react';
import ListItem from '../components/ListItem';
import Panel from '../components/Panel';
import games from '../data/games.js';

const filterOptions = [
  { id: 'all', label: 'Todos' },
  { id: 'playing', label: 'Jogando' },
  { id: 'completed', label: 'Zerados' },
];

export default function ListPage() {
  const [statusFilter, setStatusFilter] = useState('all');
  const [search, setSearch] = useState('');

  const searchTerm = search.trim().toLowerCase();

  const visibleGames = games.filter((game) => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm);
    if (statusFilter === 'completed') return game.isCompleted && matchesSearch;
    if (statusFilter === 'playing') return !game.isCompleted && matchesSearch;
    return matchesSearch;
  });

  return (
    <Panel id="list" title="Meus jogos" className="xl:min-h-80">
      <label htmlFor="game-search" className="text-sm text-muted">
        Buscar pelo nome
      </label>
      <input
        id="game-search"
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Ex.: hades"
        className="mt-1 mb-3 w-full rounded-lg border border-border bg-background
    px-3 py-2 focus:border-primary focus:outline-none"
      />
      <p className="mb-2 text-sm text-muted" aria-live="polite">
        {visibleGames.length} de {games.length} jogos
      </p>
      <div className="mb-4 flex flex-wrap gap-2">
        {filterOptions.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => setStatusFilter(option.id)}
            aria-pressed={statusFilter === option.id}
            className={
              statusFilter === option.id
                ? 'rounded-full border border-primary bg-primary px-3 py-1 text-sm font-bold text-background'
                : 'rounded-full border border-border px-3 py-1 text-sm font-bold text-muted hover:border-primary'
            }
          >
            {option.label}
          </button>
        ))}
      </div>
      {visibleGames.length === 0 ? (
        <p className="text-muted">Nenhum jogo na lista ainda.</p>
      ) : (
        <ul>
          {visibleGames.map((game) => (
            <ListItem
              key={game.id}
              title={game.title}
              hours={game.hours}
              isCompleted={game.isCompleted}
            />
          ))}
        </ul>
      )}
    </Panel>
  );
}
