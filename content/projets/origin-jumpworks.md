---
title:
  FRA: "Origin Jumpworks"
  ENG: "Origin Jumpworks"
  SPA: "Origin Jumpworks"
  DEU: "Origin Jumpworks"
date: "2026-11-12"
tags: ["Next.js", "React", "TypeScript", "Tailwind", "Three.js", "WebGL", "Playwright"]
context: "perso"
description:
  FRA: "J'ai conçu et développé un site de fan non officiel consacré à Origin Jumpworks, constructeur de vaisseaux de luxe de Star Citizen, avec une 3D liée au défilement."
  ENG: "I designed and built an unofficial fan website about Origin Jumpworks, Star Citizen's luxury spaceship manufacturer, with scroll-driven 3D."
  SPA: "Diseñé y desarrollé un sitio de fans no oficial dedicado a Origin Jumpworks, el fabricante de naves de lujo de Star Citizen, con 3D vinculado al desplazamiento."
  DEU: "Ich habe eine inoffizielle Fan-Website über Origin Jumpworks, den Luxus-Raumschiffhersteller aus Star Citizen, mit scrollgesteuertem 3D konzipiert und entwickelt."
details:
  # --- SECTION 1 : Présentation du projet (image : accueil, thème sombre) ---
  - - FRA: "Présentation du projet"
      ENG: "Project Overview"
      SPA: "Presentación del proyecto"
      DEU: "Projektübersicht"
    - FRA: "Origin Jumpworks est un site de fan, non officiel, consacré au constructeur de vaisseaux de luxe de Star Citizen. Il se parcourt comme une longue descente guidée par un fil d'or : le manifeste de la marque, son histoire, sa flotte jouable et les lieux où l'acquérir en jeu. Après Anvil Aerospace, mon premier site sur cet univers, je voulais marquer une vraie évolution : de la 3D liée au défilement, des transitions entre les pages et une direction artistique soignée, sans rien céder sur l'accessibilité ni sur la performance."
      ENG: "Origin Jumpworks is an unofficial fan website dedicated to Star Citizen's luxury spaceship manufacturer. It reads as one long descent guided by a golden thread: the brand's manifesto, its history, its playable fleet and where to buy it in the game. After Anvil Aerospace, my first website about this universe, I wanted to show real progress: scroll-driven 3D, page transitions and a polished art direction, without compromising on accessibility or performance."
      SPA: "Origin Jumpworks es un sitio de fans, no oficial, dedicado al fabricante de naves de lujo de Star Citizen. Se recorre como un largo descenso guiado por un hilo dorado: el manifiesto de la marca, su historia, su flota jugable y los lugares donde adquirirla en el juego. Después de Anvil Aerospace, mi primer sitio sobre este universo, quería marcar una verdadera evolución: 3D vinculado al desplazamiento, transiciones entre páginas y una dirección artística cuidada, sin renunciar a la accesibilidad ni al rendimiento."
      DEU: "Origin Jumpworks ist eine inoffizielle Fan-Website über den Luxus-Raumschiffhersteller aus Star Citizen. Sie ist als langer Abstieg entlang eines goldenen Fadens aufgebaut: das Manifest der Marke, ihre Geschichte, ihre spielbare Flotte und die Orte, an denen man sie im Spiel erwerben kann. Nach Anvil Aerospace, meiner ersten Website zu diesem Universum, wollte ich einen echten Fortschritt zeigen: scrollgesteuertes 3D, Seitenübergänge und eine sorgfältige Art Direction, ohne Abstriche bei Barrierefreiheit und Performance."

  # --- SECTION 2 : Direction artistique (image : « Où les acquérir », thème clair) ---
  - - FRA: "Une direction artistique « le trait d'abord »"
      ENG: "A “Line First” Art Direction"
      SPA: "Una dirección artística «primero el trazo»"
      DEU: "Eine Art Direction nach dem Prinzip „Linie zuerst“"
    - FRA: "J'ai défini une direction artistique fondée sur le trait : des lignes d'un pixel, des coins coupés à 45°, beaucoup de vide et des mouvements lents et amortis. Le site propose deux thèmes, « Galerie » en clair et « Nuit sur New Austin » en sombre, et passe de l'un à l'autre par un lever de soleil. Les couleurs sont des tokens CSS partagés par les styles, la 3D et un test automatique qui vérifie les contrastes."
      ENG: "I defined an art direction built on the line: one-pixel strokes, corners cut at 45°, plenty of empty space and slow, eased motion. The site offers two themes, “Gallery” in light mode and “New Austin night” in dark mode, and switches between them with a sunrise. Colors are CSS tokens shared by the styles, the 3D scene and an automated test that checks contrast."
      SPA: "Definí una dirección artística basada en el trazo: líneas de un píxel, esquinas cortadas a 45°, mucho espacio vacío y movimientos lentos y suavizados. El sitio ofrece dos temas, «Galería» en claro y «Noche en New Austin» en oscuro, y pasa de uno a otro con un amanecer. Los colores son tokens CSS compartidos por los estilos, el 3D y una prueba automática que comprueba los contrastes."
      DEU: "Ich habe eine Art Direction entwickelt, die auf der Linie aufbaut: ein Pixel breite Striche, um 45° abgeschnittene Ecken, viel Leerraum und langsame, gedämpfte Bewegungen. Die Website bietet zwei Themes, „Galerie“ in Hell und „Nacht über New Austin“ in Dunkel, und wechselt zwischen ihnen mit einem Sonnenaufgang. Die Farben sind CSS-Tokens, die von den Styles, der 3D-Szene und einem automatischen Kontrasttest gemeinsam genutzt werden."

  # --- SECTION 3 : La couche 3D (image : le fil d'or traverse le manifeste) ---
  - - FRA: "Une 3D discrète au service de la page"
      ENG: "Subtle 3D in Service of the Page"
      SPA: "Un 3D discreto al servicio de la página"
      DEU: "Dezentes 3D im Dienst der Seite"
    - FRA: "Toute la 3D tient dans un seul canvas React Three Fiber, placé derrière la page et chargé après le contenu, avec des shaders GLSL écrits sur mesure. Un fil d'or se dessine au fil du défilement, un ciel d'étoiles bouge en légère parallaxe et des nuées de vaisseaux traversent l'écran de temps en temps, avec un bonus caché pour qui clique dessus. Comme la caméra suit le défilement à l'échelle du pixel, le fil passe exactement par des repères posés dans la page, jusqu'à redessiner le monogramme de la marque en bas de page."
      ENG: "All the 3D lives in a single React Three Fiber canvas, placed behind the page and loaded after the content, with custom GLSL shaders. A golden thread draws itself as you scroll, a starry sky moves with a gentle parallax, and flocks of ships cross the screen from time to time, with a hidden bonus for those who click on them. Because the camera follows the scroll at pixel scale, the thread passes exactly through markers placed in the page, until it redraws the brand's monogram at the bottom of the page."
      SPA: "Todo el 3D cabe en un único canvas de React Three Fiber, situado detrás de la página y cargado después del contenido, con shaders GLSL hechos a medida. Un hilo dorado se dibuja a medida que se desplaza la página, un cielo de estrellas se mueve con un ligero paralaje y bandadas de naves cruzan la pantalla de vez en cuando, con un bonus oculto para quien haga clic en ellas. Como la cámara sigue el desplazamiento a escala de píxel, el hilo pasa exactamente por marcas colocadas en la página, hasta redibujar el monograma de la marca al pie de la página."
      DEU: "Das gesamte 3D steckt in einem einzigen React-Three-Fiber-Canvas hinter der Seite, das nach dem Inhalt geladen wird und eigene GLSL-Shader nutzt. Ein goldener Faden zeichnet sich beim Scrollen, ein Sternenhimmel bewegt sich mit leichter Parallaxe, und ab und zu ziehen Schiffsschwärme über den Bildschirm, mit einem versteckten Bonus für alle, die darauf klicken. Da die Kamera dem Scrollen pixelgenau folgt, verläuft der Faden exakt durch Markierungen auf der Seite, bis er am Seitenende das Monogramm der Marke nachzeichnet."

  # --- SECTION 4 : Fiches et comparateur (image : fiche du 890 Jump) ---
  - - FRA: "Toute la flotte, vaisseau par vaisseau"
      ENG: "The Whole Fleet, Ship by Ship"
      SPA: "Toda la flota, nave por nave"
      DEU: "Die ganze Flotte, Schiff für Schiff"
    - FRA: "Les 17 vaisseaux jouables ont chacun leur fiche : une image en relief grâce à une carte de profondeur en WebGL, leurs caractéristiques, leurs prix en jeu selon la concession et une galerie avec une visionneuse accessible. Un comparateur place jusqu'à trois vaisseaux côte à côte, silhouettes à l'échelle, et les changements de page se font en « saut quantique » grâce à l'API View Transitions."
      ENG: "Each of the 17 playable ships has its own page: an image given depth in WebGL with a depth map, its specifications, its in-game prices by dealership and a gallery with an accessible image viewer. A comparison tool puts up to three ships side by side with their silhouettes to scale, and page changes play out as a “quantum jump” using the View Transitions API."
      SPA: "Cada una de las 17 naves jugables tiene su ficha: una imagen en relieve en WebGL gracias a un mapa de profundidad, sus características, sus precios en el juego según el concesionario y una galería con un visor accesible. Un comparador sitúa hasta tres naves una al lado de otra, con sus siluetas a escala, y los cambios de página se hacen con un «salto cuántico» gracias a la API View Transitions."
      DEU: "Jedes der 17 spielbaren Schiffe hat eine eigene Seite: ein Bild mit Tiefenwirkung in WebGL dank einer Tiefenkarte, die technischen Daten, die Preise im Spiel je nach Händler und eine Galerie mit barrierefreiem Bildbetrachter. Ein Vergleichstool stellt bis zu drei Schiffe nebeneinander, mit maßstabsgetreuen Silhouetten, und Seitenwechsel laufen als „Quantensprung“ über die View Transitions API ab."

  # --- SECTION 5 : Données (image : toute la flotte à l'échelle) ---
  - - FRA: "Des données fiables, collectées une seule fois"
      ENG: "Reliable Data, Collected Once"
      SPA: "Datos fiables, recopilados una sola vez"
      DEU: "Verlässliche Daten, einmalig erfasst"
    - FRA: "Les données viennent de l'API du Star Citizen Wiki (caractéristiques et prix UEX) et de starcitizen.tools (images, auteurs et licences). J'ai écrit un script de collecte, lancé à la main, qui valide chaque vaisseau avec Zod, convertit les images en AVIF et WebP, puis isole chaque vaisseau de son fond étoilé pour en tirer, sans IA, sa silhouette à l'échelle et sa carte de profondeur. Tout est figé dans le dépôt : le site, généré en export statique (44 pages), ne fait aucun appel externe. Chaque image et chaque texte repris sont crédités sur une page dédiée, dans le respect du fan kit officiel du jeu."
      ENG: "The data comes from the Star Citizen Wiki API (specifications and UEX prices) and from starcitizen.tools (images, authors and licenses). I wrote a collection script, run by hand, that validates each ship with Zod, converts images to AVIF and WebP, then isolates each ship from its starry background to extract, without AI, its to-scale silhouette and its depth map. Everything is frozen in the repository: the site, generated as a static export (44 pages), makes no external calls. Every reused image and text is credited on a dedicated page, in line with the game's official fan kit."
      SPA: "Los datos proceden de la API del Star Citizen Wiki (características y precios de UEX) y de starcitizen.tools (imágenes, autores y licencias). Escribí un script de recopilación, ejecutado manualmente, que valida cada nave con Zod, convierte las imágenes a AVIF y WebP y aísla cada nave de su fondo estrellado para obtener, sin IA, su silueta a escala y su mapa de profundidad. Todo queda fijado en el repositorio: el sitio, generado como exportación estática (44 páginas), no hace ninguna llamada externa. Cada imagen y cada texto reutilizado se acredita en una página dedicada, respetando el fan kit oficial del juego."
      DEU: "Die Daten stammen aus der API des Star Citizen Wiki (technische Daten und UEX-Preise) und von starcitizen.tools (Bilder, Urheber und Lizenzen). Ich habe ein manuell gestartetes Erfassungsskript geschrieben, das jedes Schiff mit Zod validiert, die Bilder in AVIF und WebP umwandelt und jedes Schiff ohne KI von seinem Sternenhintergrund freistellt, um daraus seine maßstabsgetreue Silhouette und seine Tiefenkarte zu gewinnen. Alles liegt fest im Repository: Die als statischer Export erzeugte Website (44 Seiten) ruft keine externen Dienste auf. Alle übernommenen Bilder und Texte sind auf einer eigenen Credits-Seite nachgewiesen, im Einklang mit dem offiziellen Fan-Kit des Spiels."

  # --- SECTION 6 : Accessibilité et qualité (image : comparateur, thème clair) ---
  - - FRA: "Accessible, bilingue et testé"
      ENG: "Accessible, Bilingual and Tested"
      SPA: "Accesible, bilingüe y probado"
      DEU: "Barrierefrei, zweisprachig und getestet"
    - FRA: "Le site est en français et en anglais, se parcourt au clavier comme avec un lecteur d'écran, et chaque animation a un repli statique quand l'utilisateur demande à réduire les animations. La qualité est mesurée : axe ne relève aucune violation WCAG 2.2 AA dans les deux thèmes, et Lighthouse donne 99 à 100 en performance sur ordinateur et 100 en accessibilité, bonnes pratiques et SEO. 40 tests unitaires (Vitest) et 32 tests de bout en bout (Playwright) sont lancés par la CI à chaque push."
      ENG: "The site is available in French and English, can be browsed with a keyboard or a screen reader, and every animation has a static fallback when the user asks for reduced motion. Quality is measured: axe reports no WCAG 2.2 AA violations in either theme, and Lighthouse scores 99 to 100 for performance on desktop and 100 for accessibility, best practices and SEO. 40 unit tests (Vitest) and 32 end-to-end tests (Playwright) run in CI on every push."
      SPA: "El sitio está en francés e inglés, se puede recorrer con el teclado o con un lector de pantalla, y cada animación tiene una alternativa estática cuando el usuario pide reducir el movimiento. La calidad se mide: axe no detecta ninguna infracción de WCAG 2.2 AA en ninguno de los dos temas, y Lighthouse da de 99 a 100 en rendimiento en ordenador y 100 en accesibilidad, buenas prácticas y SEO. La CI ejecuta 40 pruebas unitarias (Vitest) y 32 pruebas de extremo a extremo (Playwright) en cada push."
      DEU: "Die Website ist auf Französisch und Englisch verfügbar, lässt sich per Tastatur und mit einem Screenreader bedienen, und jede Animation hat einen statischen Ersatz, wenn reduzierte Bewegung gewünscht ist. Die Qualität wird gemessen: axe findet in beiden Themes keinen WCAG-2.2-AA-Verstoß, und Lighthouse vergibt 99 bis 100 Punkte für Performance am Computer sowie 100 für Barrierefreiheit, Best Practices und SEO. Die CI führt bei jedem Push 40 Unit-Tests (Vitest) und 32 End-to-End-Tests (Playwright) aus."

images: ["origin1.webp", "origin2.webp", "origin3.webp", "origin4.webp", "origin5.webp", "origin6.webp", "origin7.webp", "origin8.webp"]
git: "https://github.com/LilianBrossard/origin-jumpworks"
site: "https://origin-jumpworks.vercel.app/"
---
