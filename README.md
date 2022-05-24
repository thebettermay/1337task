# 1337 coding task

This is my coding assignment for 1337. 
I used Vue2 + Typescript (I used it for the first time), Vuex for store management,
Vuetify lib (which lets me easily apply some margin and padding styling,
provides simple grid system + can use Material Design icons ),
SASS variables. I also wanted to write some tests using Jest, but decided not to waste any more time.
The design is responsible for all the screen resolutions.

The app itself is very simple: i use Vuex to store the whole array of users in Users module:
 - users property to keep the raw data just in case i need it;
 - mutatedUsersArray to mutate the array and display the changes(filtering, sorting, pagination);

Besides filtering and sorting both by name and office, pagination, i decided to make cards clickable,
so the user's able to see more info about the person.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
