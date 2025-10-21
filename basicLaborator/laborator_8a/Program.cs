int[] array = new int [3];
int sum = 0;

for (int i = 0; i < array.Length; i++)
{
    while (true)
    {
        Console.WriteLine($"Введите число №{i + 1}");
        string number = Console.ReadLine()!;

        if (int.TryParse(number, out int num) && num >= 2)
        {
            array[i] = num;
            break;
        }
        else
        {
            Console.WriteLine("Введите число которое больше 2");
        }
    }
}

foreach (int num in array)
{
    sum += num;
}

Console.WriteLine($"Сумма чисел равна: {sum}");