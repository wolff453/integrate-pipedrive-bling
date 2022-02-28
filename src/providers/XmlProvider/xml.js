export const XmlProvider = (xml) => ({
    parse: (json) => {
        return xml.parse('pedido', json)
    }
})