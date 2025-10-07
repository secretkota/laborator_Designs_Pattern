
class Maximum
{

    static void Main()
    {
        int[] a = [1, 2, 3, 4, 5, 7];

        int max = FindMax(a);

        Console.WriteLine(max);
    }

    static int FindMax(int[] a)
    {
        Debug.Assert(a.Length > 0);

        int maximum = a[0];

        for (int i = 1; i < a.Length; i++)
        {
            if (a[i] > maximum)
            {
                maximum = a[i];
            }
        }

        return maximum;
    }

}

// class Program
// {
//     static void Main()
//     {
//         var a = new List<int> { 1, 2, 3, 4, 5 };
//         var b = new List<int> { 1, 2, 3, 4, 5 };
//         var c = new List<int>();
//         AddSum(a, b, c);
//         Console.WriteLine(string.Join(", ", c));
//         Thread.Sleep(500);
//         c.Clear();
//         AddSumWhile(a, b, c);
//         Console.WriteLine(string.Join(", ", c));
//     }

//     static void AddSum(List<int> a, List<int> b, List<int> c)
//     {
//         for (int i = 0; i < a.Count; i++)
//         {
//             c.Add(a[i] + b[i]);
//         }
//     }

//     static void AddSumWhile(List<int> a, List<int> b, List<int> c)
//     {
//         int i = 0;
//         while (i < a.Count)
//         {
//             c.Add(a[i] + b[i]);
//             i++;
//         }
//     }
// }