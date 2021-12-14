# Goal
The goal of this project is to use the Algolia example dataset found here: [Wine Dataset](https://github.com/algolia/datasets/tree/master/wine) and the Algolia React InstantSearch libraries to make a simple UI with some of the basic search functionality displayed.

Future work could include adding more InstantSearch Widgets and more in depth styling.

# Feedback for Algolia
Overall the React InstantSearch library was incredibly easy to use. The most inconvenient part of working was adding widgets that necessiated Faceting
``` html
<RefinementList attribute="domain" />
```
but it was clear in the documentation that this was necessary, so when I ran into this issue, I was immediately able to resolve it.

The only issue I had was when copying the RangeSlider code from the documentation here: [Range Slider](https://www.algolia.com/doc/api-reference/widgets/range-slider/react/#full-example)

The example code throws a number of warnings in my console
```
Warning: Legacy context API has been detected within a strict-mode tree.

Warning: Failed prop type: Invalid prop `handle` supplied to `withDirection(withStyles(Rheostat))`.

...
```

Overall the documentation was very impressive and was able to answer all of my questions