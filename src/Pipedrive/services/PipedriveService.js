export const PipedriveService = ({ request, config, xml, BlingSchema, pipedriveRepository }) => {
  const getAllWonStatus = async () => {
    const get = await request.get(`${config.pipedrive.baseUrl}${config.pipedrive.apiToken}`);
    return get.data.data;
  }

  const parseJsonToXml = objectDeals => {
    return xml.parse(objectDeals);
  }
    
  const insertDealsInBling = async deals => {
    deals.forEach(async deal => {
      const products = await request.get(`${config.pipedrive.baseUrl2}${deal.id}/products/?api_token=${config.pipedrive.apiToken}`)
      const name = await request.get(`${config.pipedrive.baseProductsUrl}${products.data.data[0].product_id}?api_token=${config.pipedrive.apiToken}`)
      const schema = BlingSchema(deal, name.data.data.name)
      const parse = parseJsonToXml(schema)
      await request.post(`${config.bling.baseUrl}${config.bling.apiToken}&xml=${parse}`)
      schema.created_at = new Date()
      schema.total = deal.value
      await pipedriveRepository.insert(config.mongo.db, config.mongo.collection, [schema])
    })
  }
  const getBlingDealsFromDatabase = async () => {
    return pipedriveRepository.findAll(config.mongo.db, config.mongo.collection)
  }
  return {
    getAllWonStatus,
    insertDealsInBling,
    getBlingDealsFromDatabase,
  }
}