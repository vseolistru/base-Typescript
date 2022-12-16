//alias
namespace New {

    type MyBoolean = false | true;
    type Pair = [string, string]; //key - value
    type Pairs = Pair[]
    type Level = 'junior' | 'middle' | 'senior' | 'nomark'

    interface Developer {
        login: string,
        skills: string[],
        level: Level
    }

    function gradeDeveloper (dev:Developer):Developer {
        if (dev.skills.length >= 13) {
            dev.level='senior'
        }
        else if (dev.skills.length >= 7) {
            dev.level='middle'
        }
        else {
            dev.level='junior'
        }
        return dev
    }


    //union
    type Status = 'ok' | 'loading' | 'error'
    const x:Status = 'ok'

    function printId (id:number | string):void {
        if (typeof id === 'string') {
            console.log(id.toUpperCase())
        }
    }

    function welcome (person: [string, string] | string):void {
        if (Array.isArray(person)) {
            console.log('Hello', person.join(' '))
        }
        console.log('Hello',person)
    }

    const pairs: Pairs[] = []
    const bool:MyBoolean = true

    console.log(pairs, bool)
    console.log(x)
    printId('hf34rfdnfjgnv')
    welcome('Admin')

    const dev1:Developer = {
        login : 'someDeveloper1',
        skills : ['JS', 'TS', 'SCSS', 'CSS', 'Express', 'React', 'SQL', 'Cypress', 'Jest'],
        level : 'nomark'
    }

    const dev2:Developer = {
        login : 'someDeveloper2',
        skills : ['JS', 'TS', 'SCSS', 'CSS', 'Express', 'React'],
        level : 'nomark'
    }

    const dev3:Developer = {
        login : 'someDeveloper3',
        skills : ['JS', 'TS', 'SCSS', 'CSS', 'Express', 'React', 'SQL', 'Cypress', 'Jest',
            'mock', 'Vanilla', 'Next', 'Angular', 'Redis', 'Mongo'],
        level : 'nomark'
    }

    const res1 = gradeDeveloper(dev1)
    const res2 = gradeDeveloper(dev2)
    const res3 = gradeDeveloper(dev3)
    console.log(res1)
    console.log(res2)
    console.log(res3)
}

