
enum ShapeKind {
    Circle,
    Square
}
interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}
interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}
const circle1: Circle = {
    radius: 2,
    kind: ShapeKind.Circle
}
const myShape = ShapeKind.Circle
////example
enum Grades {
    Junior = 'junior',
    Middle = 'middle',
    Senior = 'senior',
    Lead = 'lead',
    Nomark = 'noMark'
}

interface Employer {
    name: string;
    role: string;
    skills: string[];
    level:Grades;
}

const upGrade = (employer:Employer):Employer => {
    if (employer.skills.length >=5) {
        employer.level = Grades.Junior
    }
    return employer
}

const employer:Employer = {
    name: 'Johanes',
    role: 'marketMaiker',
    skills: ['sales', 'networking', 'NLP', 'manipulation', 'communicable'],
    level: Grades.Nomark
}

console.log(upGrade(employer))
