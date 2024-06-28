# Code Review

Ici tu trouveras un récap des remarques globale que j'apporte.
Pour tout autre commentaire, j'apposerai un commentaire js directement dans le code.

## BONS

- Utilisation de tailwindCSS. Très très bien pour ce genre de projet.
- Utilisation de prisma
- Très bien d'avoir penser aux metadata
- Gestion de la navigation _(Création d'un array)_

## MOINS BON

- Le projet a sans doute été initialisé avec page router plutôt qu'AppRouter, si c'est le cas, il faut vraiment préféré l'approche app router.
  J'ai remarqué ça avec la réponse "GET /200" dans la console server side à chaque changement de page.
- Dommage que tu n'utilises pas typescript. C'est très très bien pour réduire le nombre de bug potentiel dans ton app et permettre l'auto completion etc.
  C'est désormais demandé partout d'avoir une base de typescript.
- Beaucoup trop d'Import inutiles dans les composants. Faire gaffe à ça

## A EVITER

- Ne surtout pas faire "use client" à la racine. Dans ce cas là nextJs ne sert strictement à rien.
  L'idée est de réduire un maximum le client boundary.
  Voici une très bonne vidéo qui parle de ce sujet : https://www.youtube.com/watch?v=Qdkg_mrniLk
- Utilisation des anchor link classique dans un contexte nextJS... Il FAUT utiliser le composant Link de Next. C'est très très très important de comprendre également pourquoi.
  Voici la doc à ce sujet : https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#link-component
  Pareil pour les images : https://nextjs.org/docs/app/api-reference/components/image
- Ne surtout pas utiliser axios dans un contexte nextjs. Ces derniers étendent les capacités de l'api native fetch pour faire du cache.
  Cf doc : https://nextjs.org/docs/app/api-reference/functions/fetch
- Avoir des fichier js alors que tu renvoies du jsx/tsx

## Bonus

- J'aime beaucoup le fait que tu utilises pnpm, quand tu apprends et que tu fais plein de projet, ton disque dur va très certainement te remercier de mettre toutes tes dépendances en cache
