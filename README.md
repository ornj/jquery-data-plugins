Simple jQuery Plugins
---------------------

This repository contains simple jQuery plugins for data manipulation. It does not contain plugins intended for use on DOM 
objects.

## Dependencies
`jquery.object.js` currently has a dependency on [Underscore.js](http://underscorejs.org/).

### jquery.querystring.js
This file contains methods for working with query strings.

1.  `$.querystring.serialize({...})`: converts a simple object to a query string. `{ foo: 'v1', bar: 'v2' }` translates to `?foo=v1&bar=v2`.
2.  `$.querystring.unserialize('...')`: converts a query string to an object. `?foo=v1&bar=v2` translates to `{ foo: 'v1', bar: 'v2' }`.
3.  `$.querystring.merge(url, object)`: merges a url string with an object containing new or updated parameters.

###jquery.object.js
This file contains methods for working with objects.

1.  `$.object.diff({}, {})`: returns an object containing fields that vary between the first object and second. It currently does not include deletions. Credit goes to [Bergi on Stackoverflow](http://stackoverflow.com/a/11022327/947655) 
2.  `$.object.clear({}, ['prop1', 'prop2'])`: Clear all properties of an object expect for the ones specified in parameter 2.