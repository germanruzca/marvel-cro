import React from "react";

import { Target } from "../Target"

const movies = [
  {
    id_movie: 1,
    id_cro: 1,
    id_normal: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrdPsGJEBxBev7gKo_EMp0Pgk7Q7su_xTUxf3vo8dE9S_CiG2Z",
    title: "Spiderman: No Way Home",
    year: 2021,
    sipnosis: "With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."
  },
  {
    id_movie: 2,
    id_cro: 1,
    id_normal: 1,
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9",
    title: "Avengers: Endgame",
    year: 2019,
    sipnosis: "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance."
  },
  {
    id_movie: 3,
    id_cro: 1,
    id_normal: 1,
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ1bDkDLq-_bteASakhnC1XYwlkErFuqcof7KMhFpRwVhCTh1Vo",
    title: "Captain Marvel",
    year: 2019,
    sipnosis: "Amidst a mission, Vers, a Kree warrior, gets separated from her team and is stranded on Earth. However, her life takes an unusual turn after she teams up with Fury, a S.H.I.E.L.D. agent."
  },
  {
    id_movie: 4,
  id_cro: 1,
  id_normal: 1,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrdPsGJEBxBev7gKo_EMp0Pgk7Q7su_xTUxf3vo8dE9S_CiG2Z",
  title: "Spiderman: No Way Home",
  year: 2021,
  sipnosis: "With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."
},
{
  id_movie: 5,
  id_cro: 1,
  id_normal: 1,
  image: "http://www.movienewsletters.net/photos/277218R1.jpg",
  title: "Captain America: The First Avenger",
  year: 2011,
  sipnosis: "During World War II, Steve Rogers decides to volunteer in an experiment that transforms his weak body. He must now battle a secret Nazi organisation headed by Johann Schmidt to defend his nation."
},
{
  id_movie: 1,
  id_cro: 1,
  id_normal: 1,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrdPsGJEBxBev7gKo_EMp0Pgk7Q7su_xTUxf3vo8dE9S_CiG2Z",
  title: "Spiderman: No Way Home",
  year: 2021,
  sipnosis: "With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."
},
{
  id_movie: 2,
  id_cro: 1,
  id_normal: 1,
  image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9",
  title: "Avengers: Endgame",
  year: 2019,
  sipnosis: "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance."
},
{
  id_movie: 3,
  id_cro: 1,
  id_normal: 1,
  image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ1bDkDLq-_bteASakhnC1XYwlkErFuqcof7KMhFpRwVhCTh1Vo",
  title: "Captain Marvel",
  year: 2019,
  sipnosis: "Amidst a mission, Vers, a Kree warrior, gets separated from her team and is stranded on Earth. However, her life takes an unusual turn after she teams up with Fury, a S.H.I.E.L.D. agent."
},
{
  id_movie: 4,
id_cro: 1,
id_normal: 1,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrdPsGJEBxBev7gKo_EMp0Pgk7Q7su_xTUxf3vo8dE9S_CiG2Z",
title: "Spiderman: No Way Home",
year: 2021,
sipnosis: "With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."
},
{
id_movie: 5,
id_cro: 1,
id_normal: 1,
image: "http://www.movienewsletters.net/photos/277218R1.jpg",
title: "Captain America: The First Avenger",
year: 2011,
sipnosis: "During World War II, Steve Rogers decides to volunteer in an experiment that transforms his weak body. He must now battle a secret Nazi organisation headed by Johann Schmidt to defend his nation."
},
{
  id_movie: 1,
  id_cro: 1,
  id_normal: 1,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrdPsGJEBxBev7gKo_EMp0Pgk7Q7su_xTUxf3vo8dE9S_CiG2Z",
  title: "Spiderman: No Way Home",
  year: 2021,
  sipnosis: "With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."
},
{
  id_movie: 2,
  id_cro: 1,
  id_normal: 1,
  image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9",
  title: "Avengers: Endgame",
  year: 2019,
  sipnosis: "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance."
},
{
  id_movie: 3,
  id_cro: 1,
  id_normal: 1,
  image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ1bDkDLq-_bteASakhnC1XYwlkErFuqcof7KMhFpRwVhCTh1Vo",
  title: "Captain Marvel",
  year: 2019,
  sipnosis: "Amidst a mission, Vers, a Kree warrior, gets separated from her team and is stranded on Earth. However, her life takes an unusual turn after she teams up with Fury, a S.H.I.E.L.D. agent."
},
{
  id_movie: 4,
id_cro: 1,
id_normal: 1,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrdPsGJEBxBev7gKo_EMp0Pgk7Q7su_xTUxf3vo8dE9S_CiG2Z",
title: "Spiderman: No Way Home",
year: 2021,
sipnosis: "With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."
},
{
id_movie: 5,
id_cro: 1,
id_normal: 1,
image: "http://www.movienewsletters.net/photos/277218R1.jpg",
title: "Captain America: The First Avenger",
year: 2011,
sipnosis: "During World War II, Steve Rogers decides to volunteer in an experiment that transforms his weak body. He must now battle a secret Nazi organisation headed by Johann Schmidt to defend his nation."
},
{
  id_movie: 1,
  id_cro: 1,
  id_normal: 1,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrdPsGJEBxBev7gKo_EMp0Pgk7Q7su_xTUxf3vo8dE9S_CiG2Z",
  title: "Spiderman: No Way Home",
  year: 2021,
  sipnosis: "With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."
},
{
  id_movie: 2,
  id_cro: 1,
  id_normal: 1,
  image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9",
  title: "Avengers: Endgame",
  year: 2019,
  sipnosis: "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance."
},
{
  id_movie: 3,
  id_cro: 1,
  id_normal: 1,
  image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ1bDkDLq-_bteASakhnC1XYwlkErFuqcof7KMhFpRwVhCTh1Vo",
  title: "Captain Marvel",
  year: 2019,
  sipnosis: "Amidst a mission, Vers, a Kree warrior, gets separated from her team and is stranded on Earth. However, her life takes an unusual turn after she teams up with Fury, a S.H.I.E.L.D. agent."
},
{
  id_movie: 4,
id_cro: 1,
id_normal: 1,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrdPsGJEBxBev7gKo_EMp0Pgk7Q7su_xTUxf3vo8dE9S_CiG2Z",
title: "Spiderman: No Way Home",
year: 2021,
sipnosis: "With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."
},
{
id_movie: 5,
id_cro: 1,
id_normal: 1,
image: "http://www.movienewsletters.net/photos/277218R1.jpg",
title: "Captain America: The First Avenger",
year: 2011,
sipnosis: "During World War II, Steve Rogers decides to volunteer in an experiment that transforms his weak body. He must now battle a secret Nazi organisation headed by Johann Schmidt to defend his nation."
},
{
  id_movie: 1,
  id_cro: 1,
  id_normal: 1,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrdPsGJEBxBev7gKo_EMp0Pgk7Q7su_xTUxf3vo8dE9S_CiG2Z",
  title: "Spiderman: No Way Home",
  year: 2021,
  sipnosis: "With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."
},
{
  id_movie: 2,
  id_cro: 1,
  id_normal: 1,
  image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9",
  title: "Avengers: Endgame",
  year: 2019,
  sipnosis: "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance."
},
{
  id_movie: 3,
  id_cro: 1,
  id_normal: 1,
  image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ1bDkDLq-_bteASakhnC1XYwlkErFuqcof7KMhFpRwVhCTh1Vo",
  title: "Captain Marvel",
  year: 2019,
  sipnosis: "Amidst a mission, Vers, a Kree warrior, gets separated from her team and is stranded on Earth. However, her life takes an unusual turn after she teams up with Fury, a S.H.I.E.L.D. agent."
},
{
  id_movie: 4,
id_cro: 1,
id_normal: 1,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrdPsGJEBxBev7gKo_EMp0Pgk7Q7su_xTUxf3vo8dE9S_CiG2Z",
title: "Spiderman: No Way Home",
year: 2021,
sipnosis: "With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."
},
{
id_movie: 5,
id_cro: 1,
id_normal: 1,
image: "http://www.movienewsletters.net/photos/277218R1.jpg",
title: "Captain America: The First Avenger",
year: 2011,
sipnosis: "During World War II, Steve Rogers decides to volunteer in an experiment that transforms his weak body. He must now battle a secret Nazi organisation headed by Johann Schmidt to defend his nation."
}
]

const Component = () => {
  return (
    <> 
      {
        movies.map((movie, index) => <Target key={index} movie={movie}/>)
      }
    </>
  )
}

export default Component;
export {Component as Targets};