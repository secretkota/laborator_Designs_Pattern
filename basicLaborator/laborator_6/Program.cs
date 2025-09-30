var a = new List<int>() { 10, 11, 23, 15 };

var b = new List<int>() { 1, 11, 23, 15 };
var c = 0;

for (var i = 0; i < a.Count; i++)
{
    c = a[i] + b[i];
    Console.WriteLine(c);
}
