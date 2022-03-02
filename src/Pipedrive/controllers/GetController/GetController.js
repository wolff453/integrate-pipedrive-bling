export const GetController = ({ pipedriveService }) => ({
  handle: async (request, response) => {
    try {
      const deals = await pipedriveService.getBlingDealsFromDatabase()
      return response.status(200).send(deals)
    } catch (error) {
      return response.status(500).send({ message: error.message })
    }
  },
})