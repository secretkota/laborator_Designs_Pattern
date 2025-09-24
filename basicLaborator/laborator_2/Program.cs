
Console.WriteLine("Hello, Jerry");
printABC();
Thread.Sleep(500);
printABC();
Thread.Sleep(500);
printABC();

void printABC()
{
    Console.WriteLine("A");
    Console.WriteLine("B");
    Console.WriteLine("C");
}

void functionA()
{
    functionB();
    functionC();
}

void functionB()
{
    Console.WriteLine("Function B");
}

void functionC()
{
    Console.WriteLine("Function C");
}

void functionD()
{
    Console.WriteLine("Function D");
}

functionA();
Thread.Sleep(500);
functionA();
Thread.Sleep(500);
functionA();
Thread.Sleep(500);