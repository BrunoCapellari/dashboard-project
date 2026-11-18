import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Menu from './components/Menu.jsx';
import SummaryCard from './components/SummaryCard.jsx';
import Panel from './components/Panel.jsx';
import InfoRow from './components/InfoRow.jsx';
import StatusBadge from './components/StatusBadge.jsx';
import DetailsToggle from './components/DetailsToggle.jsx';
import ListItem from './components/ListItem.jsx';
import { useState } from 'react';

const filterOptions = [
  { id: 'all', label: 'Todos' },
  { id: 'playing', label: 'Jogando' },
  { id: 'completed', label: 'Zerados' },
];

const summaryCards = [
  { id: 'totalGames', title: 'Jogos totais', value: 250, isHighlighted: true },
  {
    id: 'nintendoGames',
    title: 'Jogos da Nintendo em estoque',
    value: 50,
    icon: '🟥',
  },
  {
    id: 'playstationGames',
    title: 'Jogos da Playstation em estoque',
    value: 0,
    icon: '🟦',
  },
  {
    id: 'xboxGames',
    title: 'Jogos do Xbox em estoque',
    value: 200,
    icon: '🟩',
  },
];

const games = [
  {
    id: 'hollow-knight',
    title: 'Hollow Knight',
    hours: 38,
    isCompleted: false,
  },
  { id: 'celeste', title: 'Celeste', hours: 21, isCompleted: true },
  { id: 'hades', title: 'Hades', hours: 64, isCompleted: true },
  {
    id: 'stardew-valley',
    title: 'Stardew Valley',
    hours: 112,
    isCompleted: false,
  },
  {
    id: 'zelda-totk',
    title: 'Zelda: Tears of the Kingdom',
    hours: 83,
    isCompleted: false,
  },
  { id: 'ea-fc-26', title: 'EA Sports FC 26', hours: 45, isCompleted: false },
];

function App() {
  const [statusFilter, setStatusFilter] = useState('all');

  const visibleGames = games.filter((game) => {
    if (statusFilter === 'completed') return game.isCompleted;
    if (statusFilter === 'playing') return !game.isCompleted;
    return true;
  });

  return (
    <div className="flex min-h-screen flex-col bg-linear-to-br from-[#0b1e49] via-[#143d74] to-[#14a5d1] text-white">
      {' '}
      <Header />
      <main
        className="grid flex-1 grid-cols-1 content-start gap-4 p-4
          md:grid-cols-2 md:gap-6 md:p-6
          xl:grid-cols-[15rem_1fr_1fr] xl:p-8"
      >
        <Menu />
        <Panel id="summary" title="Resumo" className={`md:col-span-2`}>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {summaryCards.map((card) => (
              <SummaryCard
                key={card.id}
                title={card.title}
                value={card.value}
                icon={card.icon}
                isHighlighted={card.isHighlighted}
              />
            ))}
          </div>
        </Panel>

        <Panel
          id="highlight"
          title="Destaque da loja"
          className="md:col-span-2"
        >
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-heading text-xl font-bold">Novo no estoque</h3>
            <p className="mt-1 text-muted">Grand Theft Auto VI</p>
            <StatusBadge label="Em alta" isActive />
          </div>
          <div className="mt-4 grid gap-x-6 md:grid-cols-2">
            <InfoRow label="Plataformas" value="PS5 e Xbox Series S/X" />
            <InfoRow label="Valor" value="R$449,90" />
            <InfoRow label="No estoque" value="200 Cópias" />
          </div>
          <DetailsToggle>
            <p>Pre-venda para a Ultimate Edition em breve.</p>
          </DetailsToggle>
        </Panel>

        <Panel id="list" title="Meus jogos" className="xl:min-h-80">
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

        <Panel id="chart" title="Gráfico" className="xl:min-h-80">
          <p className="text-muted">Em construção.</p>
        </Panel>
      </main>
      <Footer />
    </div>
  );
}

export default App;
