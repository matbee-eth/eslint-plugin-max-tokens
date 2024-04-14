# eslint-plugin-max-tokens

`eslint-plugin-max-tokens` is an ESLint plugin that enforces a maximum token length for files in your project. It helps ensure that your source code files do not exceed a specified token limit, which can be useful for optimizing code size and adhering to certain constraints.

## Installation

You can install `eslint-plugin-max-tokens` using npm:

```bash
npm install eslint-plugin-max-tokens --save-dev
```

## Usage

To use the plugin, you need to add it to your ESLint configuration file (e.g., `.eslintrc.json`) and enable the `max-token/max-tokens` rule:

```json
{
  "plugins": ["max-token"],
  "rules": {
    "max-token/max-tokens": ["warn", { "maxTokenLength": 8192 }]
  }
}
```

In the above example, the `max-token/max-tokens` rule is set to `"warn"`, and the `maxTokenLength` option is set to `8192`. You can adjust the `maxTokenLength` value according to your project's requirements.

## Rule Details

The `max-token/max-tokens` rule enforces a maximum token length for each file in your project. It uses the `gpt-tokenizer` library to tokenize the source code and counts the number of tokens.

If the token length of a file exceeds the specified `maxTokenLength`, the rule will report a warning or error (depending on the rule configuration).

### Options

The `max-token/max-tokens` rule accepts an optional options object with the following property:

- `maxTokenLength` (number): The maximum allowed token length for a file. Default value is `4096`.

### Example Configuration

```json
{
  "plugins": ["max-token"],
  "rules": {
    "max-token/max-tokens": ["error", { "maxTokenLength": 10000 }]
  }
}
```

In this example, the `max-token/max-tokens` rule is set to `"error"`, and the `maxTokenLength` option is set to `10000`. Files exceeding 10,000 tokens will trigger an error.

## License

`eslint-plugin-max-tokens` is licensed under the [MIT License](LICENSE).

## Contributing

Contributions to `eslint-plugin-max-tokens` are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/matbee-eth/eslint-plugin-max-tokens).
