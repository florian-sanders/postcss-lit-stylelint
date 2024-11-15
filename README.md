The goal of this repo is to reproduce an issue with [`postcss-lit`](https://github.com/43081j/postcss-lit) and `Stylelint`.

Steps to reproduce the issue:

1. clone this repo,
2. run `npm i`,
3. open `wc-test.js` with one of the following editors:
  - VSCode with [vscode-stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) (don't forget to add `javascript` to the list of validated files),
  - WebStorm with the Stylelint option enabled and `**/*.{css,js}` as value for the `run for files` option.

You should get an error like in the screenshots below:
![VSCode error collapsed](/img/vscode-error.png)
![VSCode error expanded](/img/vscode-error-expanded.png)
![Webstorm error](/img/webstorm-error.png)

See [#60 - postcss-lit](https://github.com/43081j/postcss-lit/issues/60)
