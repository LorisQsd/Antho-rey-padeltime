export default function Joueurs() {
  const people = [
    {
      name: "Anthony REY",
      surname: "TiZeN",
      imageUrl: "/antho.jpeg",
      xUrl: "#",
      linkedinUrl: "#",
    },
    {
      name: "Sebastien REY",
      surname: "KoolSeb",
      imageUrl:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      xUrl: "#",
      linkedinUrl: "#",
    },
    {
      name: "Mathieu ROTONDI",
      surname: "Guido La Pasta",
      imageUrl:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      xUrl: "#",
      linkedinUrl: "#",
    },
    {
      name: "Ludovic TOURTOIS",
      surname: "Dolu",
      imageUrl:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      xUrl: "#",
      linkedinUrl: "#",
    },
    // More people...
  ];

  return (
    // Ca fait pas mal de div dans des div, c'est acceptable mais si on peut réduire c'est une bonne victoire :)
    <div className="py-24 sm:py-32">
      <div className="max-w-5xl px-6 mx-auto text-center lg:px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Joueurs
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            Liste des joueurs du groupe
          </p>
        </div>
        <ul
          // BEST PRACTICE
          // On ne surcharge pas par un attribut WAI/ARIA une balise HTML qui a une signification sémantique
          // ul renverra naturellement déjà une list aux screen readers
          role="list"
          className="grid max-w-2xl grid-cols-1 gap-6 mx-auto mt-12 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          {/* BEST PRACTICE
          Pour améliorer la lecture du code et match avec l'approche react, on préfère souvent destructurer
          Dans le cas de ton map on peut faire quelque chose comme :
          people.map(({imageUrl, name, surname, xUrl, linkedinUrl}) => (...))
          
          Grâce à ça le code est plus concis et tu utilises uniquement ce dont tu as besoin dans ton objet
          */}
          {people.map((person) => (
            <li
              // BEST PRACTICE
              // Attention à l'utilisation de valeur comme name dans une key react, il faut que tu sois sûr à 100% que la valeur sera unique
              // Une astuce consiste à utilisation l'objet natif crypto : key={crypto.randomUUID()}
              // Voici un article qui en parle très bien : https://dev.to/elyasshamal/generating-unique-ids-with-cryptorandomuuid-in-react-2d1e
              key={person.name}
              className="px-8 py-8 bg-gray-800 rounded-2xl hover:bg-gray-700 hover:cursor-pointer"
            >
              {/* BEST PRACTICE
              
              Attention à l'utilisation des img, on est dans un context NextJS. On peut utiliser le composant Image de Next*/}
              <img
                className="w-48 h-48 mx-auto rounded-full md:h-56 md:w-56"
                src={person.imageUrl}
                // BEST PRACTICE
                // Même si c'est un peu relou, il faut toujours penser à mettre un attribut alternatif pour les images
                alt=""
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">
                {person.name}
              </h3>
              <p className="text-sm leading-6 text-gray-400">
                {person.surname}
              </p>
              {/* Même remarque pour le role list */}
              {/* Attention à ne pas trop abuser des ul/li pour deux éléments. Ca surcharge le DOM et c'est peut être pas le plus pertinent pour l'utilisateur.
              Cependant, c'est ouvert au débat et ce n'est pas une vérité absolue */}
              <ul role="list" className="flex justify-center mt-6 gap-x-6">
                <li>
                  {/* !!! Il FAUT utiliser le composant Link de Next plutôt qu'un simple anchor link !!! */}
                  <a
                    href={person.xUrl}
                    className="text-gray-400 hover:text-gray-300"
                  >
                    {/* Bien d'avoir penser au sr-only mais il n'est pas très utile dans un contexte link. On s'en sert plus généralement dans des boutons */}
                    <span className="sr-only">X</span>
                    {/* C'est dommage tu as installé hero icon dans ton package et tu passes des svg en dur dans le code.. :/ */}
                    <svg
                      // TIPS : Dans une des dernières versions, tailwind a introduit size pour gérer le cas où la width et la height sont équivalentes
                      // cf doc : https://tailwindcss.com/docs/size
                      className="w-5 h-5"
                      // Non, on ne met pas aria-hidden à true si un élément est visible pour l'utilisateur
                      aria-hidden="true"
                      // Bien d'avoir pensé à l'attribut currentColor pour l'héritage des couleurs
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href={person.linkedinUrl}
                    className="text-gray-400 hover:text-gray-300"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
