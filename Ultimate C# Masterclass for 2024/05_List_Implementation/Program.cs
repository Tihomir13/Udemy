var numbers = new ListOfInts();
numbers.Add(10);
numbers.Add(20);
numbers.Add(30);
numbers.Add(40);
numbers.Add(50);

class ListOfInts
{
    private int[] _ints = new int[4];
    private int _size = 0;

    public void Add(int item)
    {
        if(_size >= _ints.Length)
        {
            int[] newItems = new int[_ints.Length * 2];

            for (int i = 0; i < _ints.Length; i++)
            {
                newItems[i] = _ints[i];
            }
            _ints = newItems;
        }
        _ints[_size] = item;
        _size++;
    }

    public void RemoveAt(int index)
    {
        if (_ints[index]!=default)
        {
            _ints[index]
        }
    }
}
