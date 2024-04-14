
// eslint-disable-next-line node/no-extraneous-require
const {encode} = require('gpt-tokenizer');
module.exports = {
    preprocess(text, filename) {
        const maxTokenLength = 4096; // Default max token length if not specified
        const tokens = encode(text);
        // eslint-disable-next-line no-constant-condition
        for (const token of tokens) {
            if (token.length > maxTokenLength) {
                throw new Error(`${filename} Token length (${token.length}) exceeds the maximum limit of ${maxTokenLength}`);
            }
        }

        return [text];
    },
    postprocess(messages) {
      return messages[0];
    },
};
