window.onload = () =>{
	document.getElementById('btn_clc').onclick = (event) =>{
		event.preventDefault();
		translate(document.getElementById('pole').value);
	}
}
function createNodes(text){
	arr = text.split('');
	let LinkedArr =[];
	for (let i=0; i<arr.length; i++){
		// console.log(arr[i]);
		if (i==0) {
			let num = new LinkedListNode(arr[i], arr[i+1], null);
			// console.log(num);
			LinkedArr.push(num);
		}
		if (i>0&&i<arr.length-1){
			 let num = new LinkedListNode(arr[i], arr[i+1], arr[i-1]);
			 // console.log(num);
			 LinkedArr.push(num);
		}
		if (i==arr.length-1){
			let num = new LinkedListNode(arr[i], null, arr[i-1]);
			// console.log(num);
			LinkedArr.push(num);
		}
	}
	return LinkedArr;
}
class LinkedListNode {
    constructor(data, next, prev) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}
function translate(text){
	let arr2 = createNodes(text);
	console.log(arr2);
	let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  	let roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  	for (let i=0; i<arr2.length; i++){
  		result = 0;
  		console.log(arr2[i].data);
  		// console.log(roman.indexOf(arr2[i].data));
  		result += decimal[roman.indexOf(arr2[i].data)];
  		let r = document.createElement('div');
  		r.innerHTML = "Начиная с символа " + arr2[i].data + "<br>" + result;
  		document.getElementById('done').appendChild(r);
  		console.log(result);
  		for (let j=i+1; j<arr2.length; j++){
  			// console.log(decimal[roman.indexOf(arr2[i].prev)])
  			if (decimal[roman.indexOf(arr2[j].data)]==decimal[roman.indexOf(arr2[i].data)]&&
  				decimal[roman.indexOf(arr2[j].next)]==decimal[roman.indexOf(arr2[i].data)]&&
  				decimal[roman.indexOf(arr2[j+1].next)]==decimal[roman.indexOf(arr2[i].data)]){
  				console.log("error");
  				let r = document.createElement('div');
  				r.innerHTML = "Начиная с символа " + arr2[i].data + "<br> error";
  				document.getElementById('done').appendChild(r);
  				break;
  			}
  			if (decimal[roman.indexOf(arr2[j].data)]>decimal[roman.indexOf(arr2[j-1].data)]){
  				result = decimal[roman.indexOf(arr2[j].data)] - decimal[roman.indexOf(arr2[j-1].data)] * 2  + result;
  				console.log(result);
  				let r = document.createElement('div');
	  			r.innerHTML = "Начиная с символа " + arr2[i].data + "<br>" + result;
	  			document.getElementById('done').appendChild(r);
  			}
  			if (decimal[roman.indexOf(arr2[j].data)]<=decimal[roman.indexOf(arr2[j-1].data)]){
  				result+=decimal[roman.indexOf(arr2[j].data)];
  				console.log(result);
  				let r = document.createElement('div');
	  			r.innerHTML = "Начиная с символа " + arr2[i].data + "<br>" + result;
	  			document.getElementById('done').appendChild(r);
  			}
  			
  			// return result;
  		}
  		// console.log(result);
  		// return result;
  	}
}