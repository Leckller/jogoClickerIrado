import { useDispatch } from 'react-redux';
import { Item } from '../../types/types';
import { buyItem } from '../../redux/actions/LojaActions';
import { upClick } from '../../redux/actions/StatsActions';

function ItemLoja({ item }: { item: Item }) {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>
        {item.Nome}
      </h2>
      <h3>
        {`Efeito --- ${item.efeito} ++`}
      </h3>
      <button
        onClick={ () => {
          dispatch(buyItem(item));
          dispatch(upClick(item));
        } }
      >
        Comprar
      </button>
    </div>
  );
}

export default ItemLoja;
