// Problem 1: Reverse Each Word in a Sentence
// Reverse each word in a sentence without changing word order and without using any generic functions.

let a="Hello Param Dholakia";
console.log("Original String: ",a);
function length(input)
{
    let count=0;
    for (let i of input)
        count++;
    return count;
}

function split_string(input_string, len)
{
    let arr=[];
    let count=0;
    let str='';

    for (let i=0;i<len;i++)
    {
        if(input_string[i]==' '||i==len-1)
        {
            if(i==len-1)
                str+=input_string[i];

            arr[count++]=str;
            str='';
            continue;
        }
        str+=input_string[i];
    }
    return arr;
}

let len_a=length(a);
let arr=split_string(a,len_a);

console.log("Array conversion: ",arr);

for (let index=0;index<length(arr);index++)
{
    let element=arr[index];
    let len=length(element);

    arr[index]="";
    for (let i=len-1;i>=0;i--)
    {
        arr[index]+=element[i];
    }
}


console.log("Reversing the array elements: ",arr);
a=''
for (let index=0;index<length(arr);index++)
{
    let element=arr[index];
    a+=element;
    a+=' ';
}
console.log("Final output: ",a);