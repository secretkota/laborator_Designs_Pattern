int select;

MenuOption[] dictProduct = [
    new(){
        Name="Drink",
        Price=30
    },
    new(){
        Name="FirstEat",
        Price=40
    },
    new(){
        Name="SecondEat", 
        Price=50
    },
];

// int client1_order1
List<int> client1 = new();
List<int> client2 = new();
while (true)
{
    Console.WriteLine("Выберите пункт: \n 1. Заполнить первого клиента \n 2. Заполнить второго клиента \n 3. Посчитать счет \n 0. Завершить программу");
    while (true)
    {
        bool isOk = int.TryParse(Console.ReadLine(), out select);
        if (isOk)
        {
            break;
        }

        Console.WriteLine("You didn't enter a number.");
    }

    switch (select)
    {
        case 0:
            return;
        case 1:
            {
                Console.WriteLine("Выберите 2 продукта (0 = Drink, 1 = FirstEat, 2 = SecondEat):");
                for (int i = 0; i < 2; i++)
                {
                    int selectProd;
                    int.TryParse(Console.ReadLine(), out selectProd);
                    client1.Add(selectProd);
                }
            }
            break;
        case 2:
            {
                Console.WriteLine("Выберите 2 продукта (0 = Drink, 1 = FirstEat, 2 = SecondEat):");
                for (int i = 0; i < 2; i++)
                {
                    int selectProd;
                    int.TryParse(Console.ReadLine(), out selectProd);
                    client2.Add(selectProd);
                }
            }
            break;
        case 3:
            {
                {
                    int totalClient = 0;
                    Console.WriteLine("Заказ клиента 1:");
                    foreach (int id in client1)
                    {
                        Console.WriteLine(dictProduct[id].Name);
                        totalClient += dictProduct[id].Price;
                    }
                    Console.WriteLine("Итого " + totalClient);
                }
                {
                    int totalClient = 0;
                    Console.WriteLine("Заказ клиента 2:");
                    foreach (int id in client2)
                    {
                        Console.WriteLine(dictProduct[id].Name);
                        totalClient += dictProduct[id].Price;
                    }
                    Console.WriteLine("Итого " + totalClient);
                }
            }
            break;
    }

}


struct MenuOption
{
    public required string Name;
    public required int Price;   
}