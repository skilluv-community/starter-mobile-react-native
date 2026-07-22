.PHONY: dev android ios web test lint fmt clean help

help:
	@echo "Targets: dev / android / ios / web / test / lint / fmt / clean"

dev:
	npm install --no-audit --no-fund
	npx expo start

android:
	npx expo start --android

ios:
	npx expo start --ios

web:
	npx expo start --web

test:
	npm test -- --watchAll=false

lint:
	npm run lint
	npm run typecheck

fmt:
	npm run format

clean:
	rm -rf node_modules .expo dist web-build
