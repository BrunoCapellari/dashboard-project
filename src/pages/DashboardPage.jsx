import { Link } from 'react-router-dom';
import DetailsToggle from '../components/DetailsToggle';
import InfoRow from '../components/InfoRow';
import ListItem from '../components/ListItem';
import Panel from '../components/Panel';
import StatusBadge from '../components/StatusBadge';
import SummaryCard from '../components/SummaryCard';
import games from '../data/games';

const firstGames = games.slice(0, 3);

export default function DashboardPage() {
  const totalHours = games.reduce((total, game) => total + game.hours, 0);
  const completedCount = games.filter((game) => game.isCompleted).length;

  const summaryCards = [
    { id: 'games', title: 'Jogos', value: games.length, icon: '🎮' },
    { id: 'hours', title: 'Horas jogadas', value: totalHours, icon: '⏱️' },
    {
      id: 'completed',
      title: 'Zerados',
      value: completedCount,
      icon: '🏆',
      isHighlighted: true,
    },
    { id: 'playing', title: 'Jogando', value: games.length - completedCount },
  ];

  return (
    <>
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

      <Panel id="highlight" title="Destaque da loja" className="md:col-span-2">
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
        {firstGames.length === 0 ? (
          <p className="text-muted">Nenhum jogo na lista ainda.</p>
        ) : (
          <ul>
            {firstGames.map((game) => (
              <ListItem
                key={game.id}
                title={game.title}
                hours={game.hours}
                isCompleted={game.isCompleted}
              />
            ))}
          </ul>
        )}
        <Link to="/lista" className="mt-4 inline-block font-bold text-primary hover:underline">
          Ver todos os {games.length} jogos
        </Link>
      </Panel>

      <Panel id="chart" title="Gráfico" className="xl:min-h-80">
        <p className="text-muted">Em construção.</p>
      </Panel>
    </>
  );
}
