---
title:
  FRA: "MUSE · IDFou"
  ENG: "MUSE · IDFou"
  SPA: "MUSE · IDFou"
  DEU: "MUSE · IDFou"
date: "2026-03-08"
tags: ["Next.js", "React", "TypeScript", "Tailwind", "GraphQL", "PostgreSQL", "Python"]
context: "etudes"
description:
  FRA: "En équipe de 7, nous avons créé MUSE, une plateforme de streaming musical, de l'analyse des données jusqu'à l'application web."
  ENG: "As a team of 7, we built MUSE, a music streaming platform, from data analysis all the way to the web application."
  SPA: "En un equipo de 7, creamos MUSE, una plataforma de streaming musical, desde el análisis de datos hasta la aplicación web."
  DEU: "In einem Team von 7 Personen haben wir MUSE entwickelt, eine Musik-Streaming-Plattform, von der Datenanalyse bis zur Webanwendung."
details:
  # --- SECTION 1 : Présentation ---
  - - FRA: "Présentation du projet"
      ENG: "Project Overview"
      SPA: "Presentación del proyecto"
      DEU: "Projektübersicht"
    - FRA: "Ce projet est la SAÉ du 5ᵉ semestre de mon BUT Informatique, menée d'octobre 2025 à mars 2026 avec le groupe IDFou. À partir de jeux de données musicaux, nous avons enchaîné quatre étapes : l'analyse des données, la conception d'une base de données, un système de recommandation, puis MUSE, une plateforme de streaming composée d'une API GraphQL et d'une application web."
      ENG: "This project is the 5th-semester SAÉ (team project) of my IT Bachelor's degree, carried out from October 2025 to March 2026 with the IDFou group. Starting from music datasets, we went through four stages: data analysis, database design, a recommendation system, and finally MUSE, a streaming platform made of a GraphQL API and a web application."
      SPA: "Este proyecto es la SAÉ (proyecto en equipo) del 5.º semestre de mi BUT Informática, realizada de octubre de 2025 a marzo de 2026 con el grupo IDFou. A partir de conjuntos de datos musicales, encadenamos cuatro etapas: el análisis de datos, el diseño de una base de datos, un sistema de recomendación y, por último, MUSE, una plataforma de streaming compuesta por una API GraphQL y una aplicación web."
      DEU: "Dieses Projekt ist die SAÉ (Teamprojekt) des 5. Semesters meines Informatikstudiums (BUT), durchgeführt von Oktober 2025 bis März 2026 mit der Gruppe IDFou. Ausgehend von Musikdatensätzen haben wir vier Etappen durchlaufen: Datenanalyse, Datenbankentwurf, ein Empfehlungssystem und schließlich MUSE, eine Streaming-Plattform aus einer GraphQL-API und einer Webanwendung."

  # --- SECTION 2 : Analyse de données ---
  - - FRA: "Analyse et visualisation des données"
      ENG: "Data Analysis and Visualization"
      SPA: "Análisis y visualización de datos"
      DEU: "Datenanalyse und Visualisierung"
    - FRA: "Pour la première étape, en Python avec pandas, j'ai réalisé un graphique à bulles des albums et une heatmap croisant morceaux et albums. J'ai aussi développé une petite application Dash avec un tableau interactif, pour explorer facilement les données avant leur nettoyage."
      ENG: "For the first stage, in Python with pandas, I created a bubble chart of albums and a heatmap crossing tracks and albums. I also built a small Dash application with an interactive table, to easily explore the data before cleaning it."
      SPA: "En la primera etapa, en Python con pandas, realicé un gráfico de burbujas de los álbumes y un mapa de calor que cruza canciones y álbumes. También desarrollé una pequeña aplicación Dash con una tabla interactiva para explorar fácilmente los datos antes de limpiarlos."
      DEU: "In der ersten Etappe habe ich in Python mit pandas ein Blasendiagramm der Alben und eine Heatmap erstellt, die Titel und Alben gegenüberstellt. Außerdem habe ich eine kleine Dash-Anwendung mit einer interaktiven Tabelle entwickelt, um die Daten vor der Bereinigung leicht zu erkunden."

  # --- SECTION 3 : Base de données ---
  - - FRA: "Conception de la base de données"
      ENG: "Database Design"
      SPA: "Diseño de la base de datos"
      DEU: "Datenbankentwurf"
    - FRA: "J'ai conçu le schéma PostgreSQL normalisé du projet à partir des données analysées : comptes, artistes, albums, morceaux, genres, tags, caractéristiques audio, écoutes et préférences. J'ai écrit le script SQL de création, la documentation du schéma et un script Python (pandas, psycopg2) qui importe les données nettoyées dans la base."
      ENG: "I designed the project's normalized PostgreSQL schema from the analyzed data: accounts, artists, albums, tracks, genres, tags, audio features, listens and preferences. I wrote the SQL creation script, the schema documentation and a Python script (pandas, psycopg2) that imports the cleaned data into the database."
      SPA: "Diseñé el esquema PostgreSQL normalizado del proyecto a partir de los datos analizados: cuentas, artistas, álbumes, canciones, géneros, etiquetas, características de audio, escuchas y preferencias. Escribí el script SQL de creación, la documentación del esquema y un script en Python (pandas, psycopg2) que importa los datos limpios en la base."
      DEU: "Ich habe das normalisierte PostgreSQL-Schema des Projekts auf Basis der analysierten Daten entworfen: Konten, Künstler, Alben, Titel, Genres, Tags, Audio-Merkmale, Wiedergaben und Präferenzen. Ich habe das SQL-Erstellungsskript, die Schemadokumentation und ein Python-Skript (pandas, psycopg2) geschrieben, das die bereinigten Daten in die Datenbank importiert."

  # --- SECTION 4 : Recommandation ---
  - - FRA: "Système de recommandation"
      ENG: "Recommendation System"
      SPA: "Sistema de recomendación"
      DEU: "Empfehlungssystem"
    - FRA: "J'ai développé une approche « item-based » : à partir de l'historique d'écoute d'un utilisateur, l'algorithme cherche les morceaux les plus proches de ceux qu'il écoute, par similarité cosinus (scikit-learn). Je l'ai fait évoluer en quatre versions, jusqu'à comparer séparément les genres, tags, artistes, albums, titres et chaque caractéristique audio, en pondérant par le nombre d'écoutes."
      ENG: "I developed an item-based approach: from a user's listening history, the algorithm finds the tracks closest to the ones they listen to, using cosine similarity (scikit-learn). I improved it over four versions, up to comparing genres, tags, artists, albums, titles and each audio feature separately, weighted by listen count."
      SPA: "Desarrollé un enfoque «item-based»: a partir del historial de escucha de un usuario, el algoritmo busca las canciones más cercanas a las que escucha mediante similitud del coseno (scikit-learn). Lo hice evolucionar en cuatro versiones, hasta comparar por separado géneros, etiquetas, artistas, álbumes, títulos y cada característica de audio, ponderando por el número de escuchas."
      DEU: "Ich habe einen Item-based-Ansatz entwickelt: Ausgehend vom Hörverlauf eines Nutzers sucht der Algorithmus per Kosinus-Ähnlichkeit (scikit-learn) die Titel, die den gehörten am ähnlichsten sind. Ich habe ihn in vier Versionen weiterentwickelt, bis hin zum getrennten Vergleich von Genres, Tags, Künstlern, Alben, Titeln und jedem Audio-Merkmal, gewichtet nach der Anzahl der Wiedergaben."

  # --- SECTION 5 : Front-end MUSE ---
  - - FRA: "L'application web MUSE"
      ENG: "The MUSE Web Application"
      SPA: "La aplicación web MUSE"
      DEU: "Die MUSE-Webanwendung"
    - FRA: "Sur la dernière étape, je me suis chargé de l'application web en Next.js, React et Tailwind. J'ai d'abord réalisé la maquette, puis les pages (accueil, artiste, album, playlist, bibliothèque, connexion, inscription, paramètres), le lecteur avec sa file d'attente, la barre de recherche, le mode sombre et les mentions légales. J'ai ensuite branché l'ensemble sur l'API GraphQL de l'équipe, avec l'authentification des comptes."
      ENG: "For the final stage, I was in charge of the web application in Next.js, React and Tailwind. I first made the mockup, then the pages (home, artist, album, playlist, library, login, sign-up, settings), the player with its queue, the search bar, dark mode and legal notices. I then connected everything to the team's GraphQL API, including account authentication."
      SPA: "En la última etapa me encargué de la aplicación web en Next.js, React y Tailwind. Primero hice la maqueta y después las páginas (inicio, artista, álbum, playlist, biblioteca, inicio de sesión, registro, ajustes), el reproductor con su cola, la barra de búsqueda, el modo oscuro y el aviso legal. Después conecté todo a la API GraphQL del equipo, con la autenticación de las cuentas."
      DEU: "In der letzten Etappe war ich für die Webanwendung mit Next.js, React und Tailwind verantwortlich. Zuerst habe ich das Mockup erstellt, dann die Seiten (Startseite, Künstler, Album, Playlist, Bibliothek, Anmeldung, Registrierung, Einstellungen), den Player mit Warteschlange, die Suchleiste, den Dark Mode und das Impressum. Anschließend habe ich alles an die GraphQL-API des Teams angebunden, einschließlich der Konto-Authentifizierung."

  # --- SECTION 6 : Recommandation dans l'API ---
  - - FRA: "Des recommandations intégrées à l'API"
      ENG: "Recommendations Built into the API"
      SPA: "Recomendaciones integradas en la API"
      DEU: "In die API integrierte Empfehlungen"
    - FRA: "Enfin, j'ai porté la recommandation dans l'API en TypeScript, en respectant son architecture en couches (Clean Architecture) : un cas d'usage compare les caractéristiques audio des morceaux par similarité cosinus, avec un réglage de part d'aléatoire. Les suggestions s'affichent sur la page d'accueil de l'application."
      ENG: "Finally, I brought the recommendation into the TypeScript API while following its layered design (Clean Architecture): a use case compares the tracks' audio features by cosine similarity, with an adjustable amount of randomness. The suggestions appear on the application's home page."
      SPA: "Por último, trasladé la recomendación a la API en TypeScript respetando su arquitectura por capas (Clean Architecture): un caso de uso compara las características de audio de las canciones mediante similitud del coseno, con un ajuste de aleatoriedad. Las sugerencias se muestran en la página de inicio de la aplicación."
      DEU: "Zum Schluss habe ich die Empfehlung in die TypeScript-API übertragen und dabei ihre Schichtenarchitektur (Clean Architecture) eingehalten: Ein Use Case vergleicht die Audio-Merkmale der Titel per Kosinus-Ähnlichkeit, mit einstellbarem Zufallsanteil. Die Vorschläge erscheinen auf der Startseite der Anwendung."

images: []
gitLinks:
  - url: "https://github.com/trethore/SAE5-C-IDFou"
    label:
      FRA: "Données & recommandation"
      ENG: "Data & recommendation"
      SPA: "Datos y recomendación"
      DEU: "Daten & Empfehlung"
  - url: "https://github.com/trethore/ApiMYLI"
    label:
      FRA: "API & application web"
      ENG: "API & web app"
      SPA: "API y aplicación web"
      DEU: "API & Web-App"
---
