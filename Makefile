THIS_MAKEFILE := $(lastword ${MAKEFILE_LIST})
FLOWGEN = npx flowgen --add-flow-header --no-inexact -o $@ $^
TSC = npx tsc --lib es2015 --types --jsx react -d --emitDeclarationOnly $^

TARGET_FILES = $(shell find src \( -name '*.ts' -or -name '*.tsx' \) -and -not -name 'index.ts' | perl -pe 's/\.tsx?$$/.js.flow/g')

.PHONY: all
all: $(TARGET_FILES)

%.js.flow: %.d.ts
	$(FLOWGEN); rm $^

%.d.ts: %.ts
	$(TSC)

%.d.ts: %.tsx
	$(TSC)

.PHONY: clean
