public static class Game
{
    public static void Play()
    {
        Console.WriteLine("Dice roller. Guess what number it shows in 3 tries.");

        Dice dice = new Dice(6);
        int diceResult = dice.Roll();

        for (int i = 0; i < 3; i++)
        {
            Console.WriteLine("Enter a number");
            int enteredDice;
            enteredDice = int.Parse(Console.ReadLine());

            if (enteredDice == diceResult)
            {
                Console.WriteLine("You win");
                return;
            }
            else
            {
                Console.WriteLine("Wrong number");
                continue;
            }
        }
        Console.WriteLine(" You lose");
    }
}