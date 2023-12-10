import ItemLoja from './ItemLoja';
import itensLoja from './Itens';

function Loja({ setLoja }: { setLoja: (p: boolean) => void }) {
  return (
    <section className="w-96 p-5 flex gap-5 flex-col h-96 absolute bg-slate-700">
      <div className="w-full">
        <button onClick={ () => setLoja(false) }>
          X

        </button>
      </div>
      <div className="w-full h-full flex flex-row gap-3 flex-wrap">
        {itensLoja && itensLoja.map((item) => (
          <ItemLoja item={ item } key={ item.Nome } />
        ))}
      </div>
    </section>
  );
}

export default Loja;
