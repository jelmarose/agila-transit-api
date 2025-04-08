# Agila Transit API

Backend part of the [Agila Transit Project](https://github.com/jelmarose/agila-transit). Made with NestJS.

## Endpoints
```
[GET]  /cabins - Get cabins
[GET]  /cabins/{cabinId} - Get cabin by id

[GET]  /terminals - Get terminals
[GET]  /terminals/{regionCode} - Get terminal by region code
[GET]  /terminals/region - Get regions

[POST] /timetables - Generate timetables

[POST] /bookings - Create booking
[GET]  /bookings?controlNumber={controlNumber} - Get booking by control number
```

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```