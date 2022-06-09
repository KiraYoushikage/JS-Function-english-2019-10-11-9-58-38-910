function alphabetSort(message){
  // wirte your code here
  let startCode="a".charCodeAt(0);
  let arrs=new Array(26).fill(0);
  let res="";
  for(let i=0;i<message.length;i++){
	  let index=message.charCodeAt(i)-startCode;
		arrs[index]++;
  }
  for(let i=0;i<arrs.length;i++){
	let j=arrs[i];
	while(j>0){
		console.log("code string : ",String.fromCharCode(startCode+i));
		res+=String.fromCharCode(startCode+i);
		j--;		
	}
  }
  return res;
}
//alphabetSort('hello'); // should return 'ehllo'
console.log(alphabetSort('hello'));