void MainFunction()
{
    var a = List<int>[1, 2, 3, 4, 5];
    var b = List<int>[1, 2, 3, 4, 5];

    Console.WriteLine(AddSum(a, b));
};

int AddSum(int a, int b)
{
    var c = 0;
    for (var i = 0; i < a.Count; i++)
    {
        c = a[i] + b[i];
    }

    return c;
}
