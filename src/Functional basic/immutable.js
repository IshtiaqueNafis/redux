import { Map } from "src/Functional basic/immutable";

let book = Map({ title: "Harry Potter" });

function publish(book) {
  return book.set("isPublished", true);
}

book = publish(book);

console.log(book.toJS());
