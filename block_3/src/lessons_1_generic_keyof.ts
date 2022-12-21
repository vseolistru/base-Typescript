//U обратится через keyof к T и возмет его ключи, создасться динамический Юнион с ключами объекта T
export function prop <T, U extends keyof T> (key:U, obj:T): T[U] {
    return obj[key]
}

// interface Laptop {
//     brand: string,
// }
// type F = Laptop["brand"]


const obj1 = {a:1, b:2, c:3}

console.log(prop('c', obj1))