import BST from './bst.js';

const Bst1 = new BST();
Bst1.add(50);
Bst1.add(17);
Bst1.add(23);
Bst1.add(12);
Bst1.add(72);
Bst1.add(54);
Bst1.add(76);
Bst1.add(9);
Bst1.add(14);
Bst1.add(19);
Bst1.add(67);
console.log(Bst1);

Bst1.remove(9);
Bst1.remove(76);
Bst1.findMin();
Bst1.findMax();

// console.log(Bst1.isPresent(19));
