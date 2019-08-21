# pika-plugin-clean-dist-src

remove dist-src and correct package.json


## usage

must be last pipeline

```json
{
"@pika/pack": {
    "pipeline": [
      [
        "@pika/plugin-standard-pkg",
        {
          "exclude": [
            "__tests__/**/*"
          ]
        }
      ],
      [
        "@pika/plugin-build-node",
        {
          "sourcemap": false
        }
      ],
      [
        "@pika/plugin-build-types"
      ],
      ["pika-plugin-clean-dist-src"]
    ]
  }
}
```
