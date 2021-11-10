import { produce } from 'src/Functional basic/immer';

let book = { title: "Harry Potter" };

function publish(book) {
  return produce(book, draftBook => {
    draftBook.isPublished = true;
  });
}

let updated = publish(book);

console.log(book); // this will print orginal bookj
console.log(updated);
