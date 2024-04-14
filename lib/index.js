/**
 * @fileoverview enforces max token for file
 * @author Mat
 */
"use strict";

// eslint-disable-next-line node/no-extraneous-require
const { isWithinTokenLimit } = require('gpt-tokenizer');

module.exports = {
  rules: {
    'max-tokens': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Enforce a maximum token length',
          category: 'Possible Errors',
          recommended: true,
        },
        schema: [
          {
            type: 'object',
            properties: {
              maxTokenLength: {
                type: 'number',
              },
            },
            additionalProperties: false,
          },
        ],
      },
      create(context) {
        const options = context.options[0] || {};
        const maxTokenLength = options.maxTokenLength || 4096; // Default max token length if not specified

        return {
          Program(node) {
            const sourceCode = context.getSourceCode();
            if (!isWithinTokenLimit(sourceCode.text, maxTokenLength)) {
              context.report({
                node,
                message: `Token exceeds the maximum limit of ${maxTokenLength}`,
              });
            }
          },
        };
      },
    },
  },
};
