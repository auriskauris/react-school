## Käynnistä tietokanta localhost:iin

docker-compose up -d 

## Migrates
eli miten tietokantataulu laitetaan ulos
npx knex migrate:latest --env production

##rollback
eli miten tietokantataulu otetaan takasin
ensin rollback, sitten vasta tiedoston muokkaus
npx knex migrate:rollback

## Hashays kirjasto
npm install bcryptjs --save

## Seeds
npx knex seed:run --env production