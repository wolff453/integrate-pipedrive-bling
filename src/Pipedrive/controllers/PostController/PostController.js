export const PostController = ({ pipedriveService }) => ({
  handle: async (request, response) => {
    try {
      const deals = await pipedriveService.getAllWonStatus()
      await pipedriveService.insertDealsInBling(deals)
      return response.status(200).send({ message: 'Data entered succesfully' })
    } catch (error) {
      return response.status(error.response.status || 500).send({ message: error.message })

    }
  },
})