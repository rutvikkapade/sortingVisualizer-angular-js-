import { Component } from '@angular/core';
import { NumberSymbol } from '@angular/common';
import { merge } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error("Method not implemented.");
  }
  temp:number=0;
  n:number=100;
arr=[];
generateArray(){

  for(let i=0;i<this.n;i++){
    this.arr[i]=Math.floor(Math.random() * 101); 
  }
  setTimeout(() => {    
    this.arrayfy('generated');
  }, 1000);
}
arrayfy(str:string){
    for(let i=0;i<this.n;i++){
      document.getElementById('bar'+i).style.width=this.arr[i]+'%';
      document.getElementById('bar'+i).style.backgroundColor='brown';
    }
}
swap(i:number,j:number){
  if(this.arr[i]>this.arr[j]){
    setTimeout(() => {
     document.getElementById('bar'+i).style.backgroundColor='green';
     document.getElementById('bar'+j).style.backgroundColor='green';
    }, 1000);
    this.temp=this.arr[i];
    this.arr[i]=this.arr[j];
    this.arr[j]=this.temp;
    document.getElementById('bar'+i).style.backgroundColor='brown';
    document.getElementById('bar'+j).style.backgroundColor='brown';
  }
}
sortt(){
  for(let i=0;i<this.n;i++){
    for(let j=0;j<this.n;j++){
      setTimeout(() => {
        this.swap(i,j);
      }, 1000);
    }
  }
}
quicksort(low:number,high:number){
if(low<high){
  var pi:number=this.partition(low,high);
  setTimeout(() => {
    this.quicksort(low,pi-1);
  }, 1000);
  setTimeout(() => {
    this.quicksort(pi+1,high);
  }, 1000);
}
}
partition(low:number,high:number):number{
  var i:number=-1;
  var pivot:number=this.arr[high];
  for(let j=0;j<=high-1;j++){
    if(this.arr[j]<=pivot){
      i++;
      this.cleanSwap(i,j);
    }
  }
  this.cleanSwap(i+1,high);
  return(i+1);
}
cleanSwap(i:number,j:number){
  this.temp=this.arr[i];
  this.arr[i]=this.arr[j];
  this.arr[j]=this.temp;
  document.getElementById('bar'+i).style.backgroundColor='blue';
  document.getElementById('bar'+j).style.backgroundColor='blue';
}
/*ms(){
  for(let i=0;i<100;i++){
    document.getElementById('bar'+i).style.width='0%';
  }
  setTimeout(() => {
    this.mergesort(0,99);
  }, 1000);
  setTimeout(() => {
    for(let i=0;i<100;i++){
      document.getElementById('bar'+i).style.width=this.arr[i]+'%';
    }
  }, 1000);
}*/
 min(x:number, y:number) { return (x<y)? x :y; } 
 async mergeSort(n:number) 
{ 
    var time:number=0;
   var curr_size:number;  
   var left_start:number; 
   for (curr_size=1; curr_size<=n-1; curr_size = 2*curr_size) 
   { 
       for (left_start=0; left_start<n-1; left_start += 2*curr_size) 
       { 
         var mid:number = this.min(left_start + curr_size - 1, n-1); 
          var right_end:number = this.min(left_start + 2*curr_size - 1, n-1); 
          this.mergge(left_start, mid, right_end); 
          await this.sleep(time);
         
       } 
       time=500;
   } 
} 
async mergge(l:number,m:number, r:number) 
{ 
    var i:number, j:number, k:number; 
    var n1:number = m - l + 1; 
    var n2:number =  r - m; 
  
    var L=[], R=[]; 
  
    for (i = 0; i < n1; i++) 
        L[i] = this.arr[l + i]; 
    for (j = 0; j < n2; j++) 
        R[j] = this.arr[m + 1+ j]; 
    i = 0; 
    j = 0; 
    k = l; 
    while (i < n1 && j < n2) 
    { 
        if (L[i] <= R[j]) 
        { 
            this.arr[k] = L[i]; 
            i++; 
            document.getElementById('bar'+k).style.backgroundColor='green';
        } 
        else
        { 
             this.arr[k] = R[j]; 
             document.getElementById('bar'+k).style.backgroundColor='green';
            j++; 
        } 
        k++; 
    } 
    while (i < n1) 
    { 
        this.arr[k] = L[i]; 
        document.getElementById('bar'+k).style.backgroundColor='green';
        i++; 
        k++; 
        
    } 
    while (j < n2) 
    { 
       this.arr[k] = R[j]; 
       document.getElementById('bar'+k).style.backgroundColor='green';
        j++; 
        k++; 
    } 
} 
sleep(ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
printArray(){
  for(let i=0;i<100;i++){
    setTimeout(() => {
      console.log(this.arr[i]);
    }, 1000);
      
  }
}
}
