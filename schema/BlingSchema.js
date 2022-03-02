export const BlingSchema =  (deal, name) =>  {
  const unitValue = deal.weighted_value / deal.products_count
  return {
    cliente: {
      nome: deal.person_name,
    },
    item: {
      codigo: deal.id,
      descricao: name,
      vlr_unit: unitValue,
      qtde: deal.products_count,
    },
  }
}
