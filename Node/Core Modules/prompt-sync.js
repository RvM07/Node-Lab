var prompt=require('prompt-sync')();
var n=prompt("Enter number");
i=1
fact=1
while(i<=n)
{
    fact=fact*i;
    i++;
}
console.log(`Factorial of ${n} is ${fact}`);