type Union1 = 'a'| 'b' | 'c' | 'd';
type Union2 = 'a'| 'e' | 'c' | 'i';
type Union3 = Union1 | Union2;
type Union4 = Union1 & Union2;

const union1:Union3 = 'e' //all from Union1,2
const union2:Union4 = 'c' //only twice from Union 1,2

