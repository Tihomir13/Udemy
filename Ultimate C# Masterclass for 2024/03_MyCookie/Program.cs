using System.Drawing;
using System.Security.Cryptography.X509Certificates;

namespace _03_MyCookie
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int counter = 0;
            List<Ingredients> ingridients = new List<Ingredients>();
            Ingredients.Add_Ingridients(ingridients);

            List<Ingredients> newRecipe = new List<Ingredients>();

            Ingredients.Printing_Initial_Ingridients(ingridients);
            do
            {
                Ingredients.Printing_Informative_Msg();
                int choice = int.Parse(Console.ReadLine());

                Console.WriteLine(ingridients[choice - 1].Name);
                newRecipe.Add(ingridients[choice - 1]);
                counter++;
            } while (counter < Recipe.numberOfIngridients);
            
            Console.WriteLine();
            if(newRecipe.Count!=0)
            Console.WriteLine("Recipe added:");
            else {
            Console.WriteLine("No intgredients have been selected. " + "Recipe will not be saved.");
            }

            Recipe.SaveRecipe();

            foreach (Ingredients ingr in newRecipe)
            {
                Console.WriteLine($"{ingr.Name} {ingr.Instruction}");
            }
        }
    }

    public class Ingredients
    {
        private string? _name;
        private string? _instruction;

        public string Name
        {
            get { return _name; }
            set { _name = value; }
        }

        public string Instruction
        {
            get { return _instruction; }
            set { _instruction = value; }
        }

        public Ingredients(string Name, string Instruction)
        {
            _name = Name;
            _instruction = Instruction;
        }

        public static void Add_Ingridients(List<Ingredients> ingridients)
        {
            ingridients.Add(new Ingredients("Wheat flour", "Sieve.Add to other ingredients."));
            ingridients.Add(new Ingredients("Coconut flour", "Sieve. Add to other ingredients."));
            ingridients.Add(new Ingredients("Butter", "Melt on low heat. Add to other ingredients."));
            ingridients.Add(new Ingredients("Chocolate", "Melt in a water bath. Add to other ingredients."));
            ingridients.Add(new Ingredients("Sugar", "Add to other ingredients."));
            ingridients.Add(new Ingredients("Cardamom", "Take half a teaspoon. Add to other ingredients."));
            ingridients.Add(new Ingredients("Cinnamon", "Take half a teaspoon. Add to other ingredients."));
            ingridients.Add(new Ingredients("Cocoa powder", "Add to other ingredients."));
        }

        public static void Printing_Initial_Ingridients(List<Ingredients> ingridients)
        {
            for (int i = 0; i < ingridients.Count; i++)
            {
                Console.WriteLine($"{i + 1} {ingridients[i].Name}");
            }
            Console.WriteLine();
        }

        public static void Printing_Informative_Msg()
        {
            Console.WriteLine("Add an ingredient by its ID or type anything else if finished.");
        }
    }

    public class Recipe
    {
        public static int numberOfIngridients = 4;

        
        const string path = @"C:\Users\tihom\Desktop\Udemy\Ultimate C# Masterclass for 2024\03_MyCookie\Recipes";
        public static void SaveRecipe()
        {
            if (!File.Exists(path))
            {
                // Create a file to write to.
                using (StreamWriter sw = File.CreateText(path))
                {
                    sw.WriteLine("Hello");
                }
            }
        }
        
    }

    
    
}
