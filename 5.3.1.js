const a = +prompt ('Введите значение')

if (typeof a !== 'number' || isNaN(a)){
    console.log('Упс, кажется вы ошиблись');
} else if (a%2 === 0){
    console.log('Это четное число')
} else {
    console.log('Это нечетное число')
}

// done 