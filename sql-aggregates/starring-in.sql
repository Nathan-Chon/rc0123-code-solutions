select "g"."name" as "genre",
  count("f". *) as "numberOfFilms"
from "filmGenre"
 join "films" as "f" using ("filmId")
 join "castMembers" using ("filmId")
 join "genres" as "g" using ("genreId")
 join "actors" using ("actorId")
  where "firstName" = 'Lisa'
  and "lastName" = 'Monroe'
 group by "g"."name";
