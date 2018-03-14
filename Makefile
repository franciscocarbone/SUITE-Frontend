VERSION=$(shell git describe --tags)
NOMBRE="suite-frontend"
EMBER=./node_modules/.bin/ember

N=[0m
G=[01;32m
Y=[01;33m
B=[01;34m


comandos:
	@echo ""
	@echo "${B}Comandos disponibles para ${Y}${NOMBRE}${N} (versión: ${VERSION})"
	@echo ""
	@echo "  ${Y}Generales de la aplicación${N}"
	@echo ""
	@echo "    ${G}iniciar${N}               Instala todas las dependencias."
	@echo "    ${G}test${N}                  Ejecuta los tests."
	@echo "    ${G}deploy_a_produccion${N}   Sube la aplicación compilada a producción."
	@echo ""


iniciar:
	yarn install

test:
	yarn test

deploy_a_produccion:
	rm -rf dist
	@SUITE_API_URL="http://suite-backend.enjambrelab.com.ar" yarn build --prod
	@echo "Compilando aplicación en modo producción"
	@rm -rf suite2
	@echo "Clonando repositorio para realizar el deploy."
	@git clone dokku@dtelab.com.ar:suite2
	@echo "Moviendo archivos..."
	@cp -r dist/* suite2/
	@echo "Realizando deploy..."
	@cd suite2; git add .; git config user.email "hugoruscitti@gmail.com"; git config user.name "Hugo Ruscitti"; git commit -am 'rebuild' --allow-empty; git push -f

