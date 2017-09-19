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
                    "viewings": []
                },
                {
                    "id": "2",
                    "name": "Michael",
                    "gender": "male",
                    "viewings":[]
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