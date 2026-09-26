# Projektstruktur

Projektet bruger 2 branches: `main` og `gh-pages`.

`main` bruges til indholdsmæssige ændringer i den data, der vises på siden. Væsentlige ændringer i indholdet skal udføres på GitHub direkte i browseren. Derefter tester Lea om `main` ser rigtig ud og derefter pushes ændringer til `gh-pages`, som er den version af projektet, som er live på det valgte domæne. (`leakrullp.github.io/art-portfolio` pr. 22/1/26).

## Noter til Amanda

Coming soon...

## Noter til Lea

### Deployment af ændringer

Når der er lavet ændringer på `main` i browseren, bruges denne kommando:

```
git switch main
git pull
npm run deploy
```
