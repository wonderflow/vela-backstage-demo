build:
	yarn install --frozen-lockfile
	# tsc outputs type definitions to dist-types/ in the repo root, which are then consumed by the build
	yarn tsc
	# Build the backend, which bundles it all up into the packages/backend/dist folder.
	yarn build:backend
	docker build . -t wonderflow/backstage

push:
	docker push wonderflow/backstage

build-push: build push
	echo "done"