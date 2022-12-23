//встроенные утилиты
//ключами могут быть только строки, значения массивы строк
namespace newSpace {
    type Status = 'success' | 'clientError' | 'serverError'
    type StatusCode =  | 200 | 401 | 502

    type Names = Record<string, string[]>
    type Names1 = Record<string, boolean[]>
    type Names2 = Record<string, number[]>
    type Names3 = Record<string, Status>
    type Error = Record<Status, boolean>
    type Error1 = Record<Status, StatusCode>


    const obj: Names = {
        'a': ['a', 'b']
    }
    const obj2: Names1 = {
        'b': [true, false]
    }
    const obj3: Names2 = {
        'a': [1, 2, 3]
    }

    const obj4: Names3 = {
        'a': 'success',
        'b': 'serverError'
    }

    const obj5:Error = {
        success: true,
        clientError: false,
        serverError: false
    }
    const obj6:Error1 = {
        success: 200,
        clientError: 401,
        serverError: 502
    }
}

