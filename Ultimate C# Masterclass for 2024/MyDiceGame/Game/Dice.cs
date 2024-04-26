public class Dice
{
    private readonly int _sides;

    public Dice(int Sides)
    {
        _sides = Sides;
    }

    public int Sides
    {
        get { return _sides; }
    }

    public int Roll()
    {
        Random _random = new Random();
        return _random.Next(0, _sides + 1);
    }
}