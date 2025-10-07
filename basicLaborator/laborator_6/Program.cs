{
    int[] a = [1, 2, 3, 4, 5];
    int[] b = [1, 2, 3, 4, 5];
    int[] c = new int[a.Length];
    AddSum(a, b, c);

    
}

void AddSum(int[] a, int[] b, int[] c)
{
    for (var i = 0; i < a.Length; i++)
    {
        c[i] = a[i] + b[i];
    }
}
