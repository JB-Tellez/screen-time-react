import { delay } from '../utils/AsyncUtils'

export default class DB {

    families = []

    constructor() {
        console.log('...........DB Constructor........')

        this.families.push({
            "id": "1",
            "name": "Jackson",
            "password": "pass",
            "children": [{
                    "id": "1",
                    "name": "Millie",
                    "gender": "female",
                    "viewings": [
                        {
                          "_id": "598ced985fab070011800d70",
                          "title": "Wonder Woman",
                          "movieId": "297762",
                          "kid": "598ced7d5fab070011800d6f",
                          "__v": 0,
                          "endTime": "2017-09-19T23:34:48.440Z",
                          "startTime": "2017-09-19T22:34:48.440Z"
                        },
                        {
                          "_id": "598cef1a5fab070011800d72",
                          "title": "Fantastic 4: Rise of the Silver Surfer",
                          "movieId": "1979",
                          "kid": "598ced7d5fab070011800d6f",
                          "__v": 0,
                          "endTime": "2017-09-18T23:41:14.286Z",
                          "startTime": "2017-09-18T21:41:14.286Z"
                        }
                      ]
                },
                {
                    "id": "2",
                    "name": "Michael",
                    "gender": "male",
                    "viewings":[
                        {
                            "_id": "598ced985fab070011800d70",
                            "title": "Wonder Woman",
                            "movieId": "297762",
                            "kid": "598ced7d5fab070011800d6f",
                            "__v": 0,
                            "endTime": "2017-09-16T23:34:48.440Z",
                            "startTime": "2017-09-16T22:34:48.440Z"
                          },
                          {
                            "_id": "598cef1a5fab070011800d72",
                            "title": "Fantastic 4: Rise of the Silver Surfer",
                            "movieId": "1979",
                            "kid": "598ced7d5fab070011800d6f",
                            "__v": 0,
                            "endTime": "2017-09-17T23:41:14.286Z",
                            "startTime": "2017-09-17T21:41:14.286Z"
                          }
                    ]
                }]  
      }

        )
    }

    getFamily(name, password) {
        console.log('[getFamily]', name, password, this.families)
        const family = this.families.find( fam => fam.name === name && fam.password === password)
        console.log('found family', family)
        return new Promise(resolve => {
            delay(500).then(resolve(family))
        })
    }

    addFamily(name, password) {

        console.log('[DB] addFamily')
        const family = {
            id: this.families[this.families.length - 1].id + 1,
            name,
            password,
            children:[]
        }

        this.families.push(family)
        
        return new Promise( resolve => {
            delay(500).then(resolve(family))
        })
    }
}