pragma solidity ^0.8.7;

contract learnStructs 
{
    struct Movie 
    {
     string director;
     string title;
     uint movie_id;
    }

    Movie movie; // Movie tip na danni ot struktura/ movie e imeto na promenlivata
    Movie comedy;

    function setMovie() public {
        //movie = Movie ('Ridley scott', 'Blade Runnder', 1);
        //movie = Movie ('Ron Statlof', 'Spider-Man Strikes Back', 2);
        comedy = Movie ('Zoolander', 'Ben Stiller', 4);
    }

    function getMovieId() public view returns (uint) {
        //return movie.movie_id;
        return comedy.movie_id;
    }


////////////////////////////////////////////////////////////////////////////////////////
//Exercise

    
}

 