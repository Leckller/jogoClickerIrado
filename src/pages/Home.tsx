import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loja from '../components/Loja/Loja';
import { GlobalType } from '../types/types';
import { userClick } from '../redux/actions/StatsActions';

function Home() {
  const clickStat = useSelector((
    state: GlobalType,
  ) => state.StatsReducer.stats.click);
  useEffect(() => {
    setClick(clickStat);
  }, [clickStat]);
  const dispatch = useDispatch();
  const [click, setClick] = useState(1);
  const [loja, setLoja] = useState(false);

  return (
    <div
      className="w-screen h-screen bg-slate-800 flex items-center justify-around flex-col"
    >
      <header className="fixed w-full flex flex-row justify-around top-0 p-5">
        <h1>Jogo Clicker Irado</h1>
        <span>{click}</span>
      </header>
      <main className="w-full h-full flex items-center justify-center">
        {loja && (
          <Loja setLoja={ setLoja } />
        )}
        <div className="flex flex-row gap-10">
          <button onClick={ () => dispatch(userClick()) }>
            click
          </button>
          <button onClick={ () => setLoja(true) }>
            Loja
          </button>
        </div>
      </main>
    </div>
  );
}

export default Home;
