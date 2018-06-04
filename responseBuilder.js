class ResponseObj {
    constructor(rootNode, rootAttributes, rootText, subElements) {
        this.rootNode = rootNode;
        this.xmlObj = {
            [rootNode]: {
                '$': rootAttributes
            }
        };

        if (rootText) {
            this.xmlObj[this.rootNode]['_'] = rootText;
        };

        if (subElements) {
            let subRootElement = Object.keys(subElements)[0];
            this.xmlObj[this.rootNode][subRootElement] = subElements[subRootElement]
        }
    }
    addPlainElement(nodeName, nodeAttributes, nodeText, subElements) {
        if (!this.xmlObj[this.rootNode][nodeName]) {
            this.xmlObj[this.rootNode][nodeName] = [];
        }
        let node = {};

        if (nodeAttributes) {
            node.$ = nodeAttributes;
        }
        if (nodeText) {
            node._ = nodeText;
        }
        if (subElements) {
            let subRootElement = Object.keys(subElements)[0];
            node[subRootElement] = subElements[subRootElement]; 
        }
        this.xmlObj[this.rootNode][nodeName].push(node);
    }
}

module.exports = {
    ResponseObj
};