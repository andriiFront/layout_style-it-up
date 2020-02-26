report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Entire_document.png",
        "test": "..\\bitmaps_test\\20200226-144502\\Entire_document.png",
        "selector": "document",
        "fileName": "Entire_document.png",
        "label": "Entire document",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/style-it-up/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "engineErrorMsg": "net::ERR_CONNECTION_REFUSED at http://localhost:8080/index.html",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -792,
            "height": -920
          },
          "misMatchPercentage": "3.70",
          "analysisTime": 115
        },
        "diffImage": "..\\bitmaps_test\\20200226-144502\\failed_diff_Entire_document.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Block.png",
        "test": "..\\bitmaps_test\\20200226-144502\\Block.png",
        "selector": "#qa-block",
        "fileName": "Block.png",
        "label": "Block",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/style-it-up/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "engineErrorMsg": "net::ERR_CONNECTION_REFUSED at http://localhost:8080/index.html",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 68,
            "height": -80
          },
          "misMatchPercentage": "55.56",
          "analysisTime": 76
        },
        "diffImage": "..\\bitmaps_test\\20200226-144502\\failed_diff_Block.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Hovered_block.png",
        "test": "..\\bitmaps_test\\20200226-144502\\Hovered_block.png",
        "selector": "#qa-block",
        "fileName": "Hovered_block.png",
        "label": "Hovered block",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/style-it-up/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "engineErrorMsg": "net::ERR_CONNECTION_REFUSED at http://localhost:8080/index.html",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -68,
            "height": -20
          },
          "misMatchPercentage": "69.60",
          "analysisTime": 83
        },
        "diffImage": "..\\bitmaps_test\\20200226-144502\\failed_diff_Hovered_block.png"
      },
      "status": "fail"
    }
  ]
});