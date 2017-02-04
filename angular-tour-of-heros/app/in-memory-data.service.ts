import { InMemoryDbService  } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb(){
        let heroes = [
            { id: 11, name: "Mr.one" },
            { id: 12, name: "Mr.two" },
            { id: 13, name: "Mr.three" },
            { id: 14, name: "Mr.four" },
            { id: 15, name: "Mr.five" },
            { id: 16, name: "Mr.six" },
            { id: 17, name: "Mr.seven" },
            { id: 18, name: "Mr.eight" },
            { id: 19, name: "Mr.nine" },

        ];
        return {heroes};
    }

}