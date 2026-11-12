import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Menu from './components/Menu.jsx';
import SummaryCard from './components/SummaryCard.jsx';
import Panel from './components/Panel.jsx';
import InfoRow from './components/InfoRow.jsx';
import StatusBadge from './components/StatusBadge.jsx';
import DetailsToggle from './components/DetailsToggle.jsx';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-[#0b1e49] via-[#143d74] to-[#14a5d1] text-white">
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
            <SummaryCard
              title="Jogos totais"
              value={250}
              icon=""
              isHighlighted
            />
            <SummaryCard
              title="Jogos da Nintendo em estoque"
              value={50}
              icon="🟥"
            />
            <SummaryCard
              title="Jogos da Playstation em estoque"
              value={0}
              icon="🟦"
            />
            <SummaryCard
              title="Jogos do Xbox em estoque"
              value="200"
              icon="🟩"
            />
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

        <Panel id="list" title="Lista" className="xl:min-h-80">
          <p className="text-muted">Em construção.</p>
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
