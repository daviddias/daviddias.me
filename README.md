[David Dias Webpage](http://daviddias.me)
=========================================

http://daviddias.me

## Found a typo? Please correct me!

Feel welcome to submit PRs to this blog or to contact me at [mail@davidias.me](mailto:mail@daviddias.me).

## Development

This repo provides a Makefile to make it easy to build and publish. You will need [Hugo]() and [IPFS] installed to make it work.

```
» make
Makefile for a daviddias.me, a hugo built static site.

Usage:
   make                                Build the optimised site to ./public
   make dev                            Preview the production ready site at http://localhost:1313
   make publish                        Build and add the website to your local IPFS node
   make clean                          remove the generated files

   DEBUG=true make [command] for increased verbosity
```

Note to self: The theme was added as a submodule, update it with `git submodule update --remote --merge`

## Acknowledgements

If this page looks fantastic it is because it was built with the [vanilla-bootstrap-hugo-theme](https://github.com/zwbetz-gh/vanilla-bootstrap-hugo-theme) made by [@zwbetz-gh](https://github.com/zwbetz-gh). Thank you for making that!
