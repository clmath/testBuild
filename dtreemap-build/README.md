# dtreemap-build

Build version of [ibm-js/dtreemap](https://github.com/ibm-js/dtreemap).

## Status

No official release yet.

## Installation

_Bower_ release installation:

    $ bower install dtreemap-build

_Manual_ master installation:

    $ git clone git://github.com/ibm-js/dtreemap-build.git

Then install dependencies with bower (or manually from github if you prefer to):

	$ cd dtreemap-build
	$ bower install


## How to use

### `baseUrl` is the directory containing `dtreemap-build`.
This is the most common use-case so the needed configuration is built in the layer.
To load the minified layer you just need to wrap your main `require` call with another `require`, requiring `"dtreemap-build/layer"`.
Then you should continue to refer to modules with `"dtreemap/foo"`.

For example, this code:
```js
require(["app/main", "dtreemap/foo"], function() {
	...
});
```
Becomes:
```js
require(["dtreemap-build/layer"], function() {
	require(["app/main", "dtreemap/foo"], function() {
		...
	});
});
```

### Other `baseUrl`

If `baseUrl` is not the directory containing `dtreemap-build`, custom configuration is needed.

```js
require.config({
	paths: {
		"dtreemap": "path/to/dtreemap-build",
		"dcolor": "path/to/dcolor-build",
		"dpointer": "path/to/dpointer-build",
		"delite": "path/to/delite-build"
	}
});
```


## Bug reporting

Issues should be filled against the source version of this project at [ibm-js/dtreemap](https://github.com/ibm-js/dtreemap)


## Licensing

This project is distributed by the Dojo Foundation and licensed under the ["New" BSD License](./LICENSE).
All contributions require a [Dojo Foundation CLA](http://dojofoundation.org/about/claForm).
