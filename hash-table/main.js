  // Array.prototype.add = value => {
  //   console.log('adding...', value);
  // }

  class HashTable {
    constructor(length = 13) {
      this._store = new Array(length);
    }
    hash(value) {
      let result = 0;
      for (let i = 0; i < value.length; i++) {
        result += value.charCodeAt(i);
      }
      return result % this._store.length;
    }
    setValue(key, value) {
      const hash = this.hash(key);
      this._store[hash] = this._store[hash] || new Array();
      this._store[hash].push({key,value});
      console.log(this._store);
    }
    getValue(key) {
      const hash = this.hash(key);
      const array = this._store[hash];
      if (!array) {
        return false;
      }
      return array.find(item => {
        return item.key === key;
      }).value;

    }
  }

  let hashTable = new HashTable(13);
  // hashTable.setValue('Hello', 'Привет');
  // hashTable.setValue('World', 'Мир');
 function addWord() {
   const word = document.querySelector('#addInput').value;
   const translate = document.querySelector('#addTranslate').value;

   hashTable.setValue(word, translate);
 }

 function translateWord() {
    const input = document.querySelector('#translateInput').value;

   const result = hashTable.getValue(input);
   if (result) {
     document.querySelector('#result').innerHTML = result;
   }
 }

window.onload = function () {
  // console.log('ok');
  // console.log(hashTable);
  // console.log(hashTable.getValue('World'));

  console.log(document.querySelector('#addButton'));
  document.querySelector('#addButton').addEventListener('click', addWord);
  document.querySelector('#translateButton').addEventListener('click', translateWord);


  // const array = new Array(5);
  // const hash = string => {
  //   let result = 0;
  //   for (let i = 0; i < string.length; i++) {
  //     result += string.charCodeAt(i);
  //   }
  //   return result % array.length;
  // }

  // array[hash('world')] = 'Мир';
  // array[hash('hello')] = 'Привет';
  // console.log(array);
  // array.add(1);
}