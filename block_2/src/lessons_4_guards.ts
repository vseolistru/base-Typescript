//Защита типов
namespace NewSpace {

    type Fish = { swim: () => void }
    type Bird = { fly: () => void }

    const isFish = (pet: Fish | Bird): pet is Fish => {
        //Утверждение
        return (pet as Fish).swim !== undefined
    }

    const move = (animal: Fish | Bird) => {
        if (isFish(animal)) {
            return animal.swim
        }
        return animal.fly()
    }

    const cat:Fish = {
        swim(){
            console.log('Im swiming')
        }
    }
    move(cat)
}