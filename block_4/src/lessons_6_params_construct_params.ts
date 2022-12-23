namespace SomeSpace {

        function f1(arg: { a: number, b: string }) {
            return arg.a + arg.b
        }

    //Record утилита определяет выходные параметры
        type T0 = ReturnType<typeof f1>

        const obj: T0 = 'SomeStr'

    //Parameters утилита определяет входные параметры
        type T1 = Parameters<typeof f1>

        const obj2: T1 = [
            {a: 1, b: 'someStr'}
        ]

    //утилита и интерфейс класса ошибка
        type T2 = ConstructorParameters<ErrorConstructor>

        class Car {
            constructor(
                brand: string,
                model: string
            ) {
            }
        }

        type T3 = ConstructorParameters<typeof Car>

        const obj3: T3 = [ 'apple','somemodel']
}