SHELL=/bin/bash
DOMAIN="daviddias.me"

IPFS="ipfs"
IPFSLOCAL="http://localhost:8080/ipfs/"
IPFSGATEWAY="https://ipfs.io/ipfs/"
OUTPUTDIR=public
THEME=vanilla-bootstrap-hugo-theme

ifeq ($(DEBUG), true)
	PREPEND=
	APPEND=
else
	PREPEND=@
	APPEND=1>/dev/null
endif

help:
	@echo 'Makefile for a daviddias.me, a hugo built static site.                                                    '
	@echo '                                                                                                          '
	@echo 'Usage:                                                                                                    '
	@echo '   make                                Build the optimised site to ./$(OUTPUTDIR)                         '
	@echo '   make dev                            Preview the production ready site at http://localhost:1313         '
	@echo '   make publish                        Build and add the website to your local IPFS node                  '
#	@echo '   make update-dns                     Update $(DOMAIN) DNS record to the ipfs hash from the last deploy  '
	@echo '   make clean                          remove the generated files                                         '
	@echo '                                                                                                          '
	@echo '   DEBUG=true make [command] for increased verbosity                                                      '

build: clean
	$(PREPEND)hugo -t $(THEME) && \
	echo "" && \
	echo "Site built out to ./public dir"

dev:
	$(PREPEND)hugo server --watch --disableFastRender -t $(THEME) -p 1313

publish: build
	$(PREPEND) \
	$(IPFS) add -r -q $(OUTPUTDIR) | tail -n1 >versions/current ; \
	cat versions/current >>versions/history ; \
	export hash=`cat versions/current`; \
		echo ""; \
		echo "published website:"; \
		echo "- $(IPFSLOCAL)$$hash"; \
		echo "- $(IPFSGATEWAY)$$hash"; \
		echo "make sure to leave your daemon running with:"; \
		echo "- $(IPFS) daemon"; \
		echo ""; \
		echo "next steps:"; \
		echo "- $(IPFS) pin add -r /ipfs/$$hash"; \
		echo "- make update-dns";

update-dns: versions/current
	DNSIMPLE_TOKEN="$(shell if [ -f auth.token ]; then cat auth.token; else cat $HOME/.dnsimple.daviddias.me.token; fi)" \
	./dnslink.sh $(DOMAIN) $(shell cat versions/current)

clean:
	$(PREPEND)[ ! -d $(OUTPUTDIR) ] || rm -rf $(OUTPUTDIR)
