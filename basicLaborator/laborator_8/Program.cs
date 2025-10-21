var library = new Library
{
    books = new Book[5],
};

library.books[0] = new Book { name = "test", year = 1929, status = true };
library.books[1] = new Book { name = "testBook2", year = 1930, status = true };
library.books[2] = new Book { name = "testBook3", year = 1931, status = true };
library.books[3] = new Book { name = "testBook4", year = 1932, status = true };
library.books[4] = new Book { name = "testBook5", year = 1933, status = false };

foreach (var b in library.books)
{
    Console.WriteLine(b.name.Length);
}

library.ShowAllBook();

library.TakeBook("testBook3");
library.ShowAllBook();


library.BusyBook();

library.ReturnBook("testBook3");
library.ShowAllBook();

library.BusyBook();
class Library
{
    public required Book[] books;

    public void ShowAllBook()
    {
        foreach (var book in books)
        {
            string statusInfo = book.status ? "В наличии" : "Занято";
            Console.WriteLine($"{book.name} ({book.year} - Статус: {statusInfo})");
        }
    }

    public void TakeBook(string name)
    {
        foreach (var book in books)
        {
            if (book.name == name)
            {
                if (!book.status)
                {
                    Console.WriteLine("Книга занята");
                    return;
                }
                book.status = false;
                Console.WriteLine($"Ты взял книгу {book.name}");
                return;
            }
        }

        Console.WriteLine("Книга не найдена");
        return;
    }
    public void ReturnBook(string name)
    {
        foreach (var book in books)
        {
            if (book.name == name)
            {
                if (book.status)
                {
                    Console.WriteLine("Книга уже в библиотеке");
                    return;
                }
                book.status = true;
                Console.WriteLine($"Вы вернули книгу {book.name}");
                return;
            }
        }
        Console.WriteLine("Книга не найдена");
        return;
    }
    public void BusyBook()
    {
        var busyBook = new List<string>();

        foreach (var book in books)
        {
            if (book.status == false)
            {
                busyBook.Add(book.name);
            }
        }


        Console.WriteLine("Занятые книги:");

        foreach (var busy in busyBook)
        {
            Console.WriteLine(busy);
        }
    }
}

class Book
{
    public required string name;
    public int year;
    public bool status;
}