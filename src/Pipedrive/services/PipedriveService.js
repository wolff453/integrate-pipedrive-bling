export const PipedriveService = ({ request, config, xml, blingSchema, pipedriveRepository }) => {
    const getAllWonStatus = async () => {
        const get = await request.get(`${config.pipedrive.baseUrl}${config.pipedrive.apiToken}`);
        return get.data.data;
    }

    const parseJsonToXml = (objectDeals) => {
        return xml.parse(objectDeals);
    }

    const insertDealsInBling = async (deals) => {
        deals.forEach(async item => {
            const products = await request.get(`https://teste121.pipedrive.com/api/v1/deals/${item.id}/products/?api_token=f23dc98ca6ec980bc8ed8306cf1ee8ab4b995181`)
            const name = await request.get(`https://teste121.pipedrive.com/api/v1/products/${products.data.data[0].product_id}?api_token=f23dc98ca6ec980bc8ed8306cf1ee8ab4b995181`)
            const schema = blingSchema(item, name.data.data.name)
            const parse = parseJsonToXml(schema)
            await request.post(`${config.bling.baseUrl}${config.bling.apiToken}&xml=${parse}`)
            schema.created_at = new Date()
            await pipedriveRepository.insert(config.mongo.db, config.mongo.collection, [schema])
        })
    }
    return {
        getAllWonStatus,
        insertDealsInBling
    }
}