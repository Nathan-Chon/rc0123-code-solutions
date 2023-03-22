select "c"."name" as "countr",
count("y". *) as "cityAmount"
  from "cities" as "y"
  join "countries" as "c" using ("countryId")
group by "c"."name";
