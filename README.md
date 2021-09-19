# Github Top List

This show top starred repo from Github in last 30 days.
<br>
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#Description
Here you can see list of repos in responsive rows using React with infinite scroll and show relative error messages when reach the end or limit exceed of API from api.github.

#Used third party packages
* [Axios](https://www.npmjs.com/package/axios): to make http request and wrap it to have central place when need to change it or have handle for some error on all used places.
* [Bootstrap](https://www.npmjs.com/package/bootstrap) this UI framework have a good utility classes make handle responsive easy.
* [Date-fns](https://www.npmjs.com/package/date-fns) this package is lightweight package to deal with date [Momentjs](https://momentjs.com/) is good one but it will increase the bundle size.
* [React-infinite-scroller](https://www.npmjs.com/package/react-infinite-scroller) for handle the infinite scroll.
##Extra
[Debounce polyfill](https://www.codegrepper.com/code-examples/javascript/debounce+polyfill): this is usefull to not have too many calls of function when there is no data or scrolling, it also may used to prevent user from call search with each char when have search input connected with API.  
#Installation

using node version 12.16.1 run `yarn install` then `npm start` for development server, and for build you can run `npm run build` and you will get the dist directory in root.

#Deploy
using [Netlify](https://www.netlify.com/) set the node_version with used version and make CD on main branch.
<br>
[Demo](https://vigilant-hoover-8bfa2f.netlify.app/)
