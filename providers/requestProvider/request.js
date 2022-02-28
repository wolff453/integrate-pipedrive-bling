export const RequestProvider = (request) => ({
    get: async (url) => {
        return request.get(url)
    },
    post: async (url) => {
        return request.post(url)
    }
});
