

class Program
{
    static void Main()
    {
        var a = new List<int> { 1, 2, 3, 4, 5 };
        var b = new List<int> { 1, 2, 3, 4, 5 };
        var c = Enumerable.Repeat(0, a.Count).ToList();
        AddSum(a, b, c);
        Console.WriteLine(string.Join(", ", c));
        Thread.Sleep(500);
        AddSumWhile(a, b, c);
        Console.WriteLine(string.Join(", ", c));
    }

    static void AddSum(List<int> a, List<int> b, List<int> c)
    {
        for (int i = 0; i < a.Count; i++)
        {
            c[i] = a[i] + b[i];
        }
    }

    static void AddSumWhile(List<int> a, List<int> b, List<int> c)
    {
        int i = 0;
        while (i < a.Count)
        {
            c[i] = a[i] + b[i];
            i++;
        }
    }
}