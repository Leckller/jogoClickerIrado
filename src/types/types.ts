export type Item = {
  valor: number,
  Nome: string,
  efeito: number,
};

export type GlobalType = {
  LojaReducer: {
    mochila: Item[],
  }
  StatsReducer: {
    stats: {
      click: number,
    }
  }
};
