const last = <T> (arr: T[]): T => {
  return arr[arr.length - 1];
};


const l = last([1, 2, 3]);

const l2 = last<string>(['a', 'b', 'c']);


const makeArr = <X, Y>(x: X, y: Y): [X, Y] => {
  return [x, y];
};

const v = makeArr(5, 6);
const v1 = makeArr('a', 'b');
const v2 = makeArr('a', 5);

const makeFullName = <T extends {firstName: string, lastName: string }> (obj: T) => {
  return {
    ...obj,
    fullname: obj.firstName + ' ' + obj.lastName
  };
};

const v4 = makeFullName({firstName: 'Prasad', lastName: 'Palla', age: 25});

class KeyValuePair<T, U>
{
    private key: T;
    private val: U;

    setKeyValue(key: T, val: U): void {
        this.key = key;
        this.val = val;
    }

    display(): void {
        console.log(`Key = ${this.key}, val = ${this.val}`);
    }
}

let kvp1 = new KeyValuePair<number, string>();
kvp1.setKeyValue(1, 'Steve');
kvp1.display(); // Output: Key = 1, Val = Steve

// let kvp2 = new KayValuePair<string, string>();
// kvp2.SetKeyValue('CEO', 'Bill');
// kvp2.display(); // Output: Key = CEO, Val = Bill
