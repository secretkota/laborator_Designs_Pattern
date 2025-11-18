ColorLightTraffic currentLight = ColorLightTraffic.Red;
action_to_light(currentLight);
currentLight = NextLight(currentLight);

static ColorLightTraffic NextLight(ColorLightTraffic current)
{
    int numericLight = (int)current;
    
    return (ColorLightTraffic)((numericLight + 1) % 3);
}

void change_ligth()
{
    while (true)
    {
        currentLight = NextLight(currentLight);
        Thread.Sleep(2000);
        action_to_light(currentLight);
    }
}

change_ligth();

void action_to_light(ColorLightTraffic light)
{
    switch (light)
    {
        case ColorLightTraffic.Green:
            Console.WriteLine($"Сейчас {ColorLightTraffic.Green} Можем идти!");
            break;
        case ColorLightTraffic.Yellow:
           Console.WriteLine($"Сейчас {ColorLightTraffic.Yellow} Приготовься!");
            break;
        case ColorLightTraffic.Red:
            Console.WriteLine($"Сейчас {ColorLightTraffic.Red} Нельзя идти!");
            break;
        default:
            Console.WriteLine("Неизвестное действие");
            break;
    }
}
enum ColorLightTraffic
{
    Red = 0,
    Yellow = 1,
    Green = 2
}




