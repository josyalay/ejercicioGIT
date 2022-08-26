const array1 = new Array(3,2,1,1,2,3,2,3,1);
const array2 = new Array(1,1,2,2,1,1,1,2,1);

for (i = 0; i < array1.length; i++) {
   for (j = 0; j < array2.length; j++) {
     console.log("--------------------------------");
     console.log(array1[i] + "+" + array2[j] + "=" + (array1[i] + array2[j]) );
     console.log(array1[i] + "*" + array2[j] + "=" + array1[i] * array2[j] );
  }
}
