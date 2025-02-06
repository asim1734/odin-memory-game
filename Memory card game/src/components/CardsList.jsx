import Card from "./Card";
import PropTypes from 'prop-types';
import "../styles/cardsList.css";
import fetchPokemons from "../fetchPokemons";
import { useEffect, useState } from "react";

const CardsList = function ({ updateScore, gameLost }) {

    const [pokemons , setPokemons] = useState([]);
    const [clickedPokemons, setClickedPokemons] = useState([]);

    useEffect(() => {
        const getPokemons = async () => {
            const pokemonData = await fetchPokemons(14);
            setPokemons(pokemonData);
        };
        
        getPokemons();
    }, []);

    const handleClick = (name) => {
        if (!clickedPokemons.includes(name)){
            setClickedPokemons((prevClickedPokemons) => [...prevClickedPokemons, name]);
            updateScore();
            setPokemons(shuffleArray(pokemons));
        }
        else{
            gameLost();
            setClickedPokemons([]);
            console.log("Lost");
        }
    };

    const shuffleArray = (arr) => {
        const newArr = [...arr]; 
        for (let i = newArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); 
            [newArr[i], newArr[j]] = [newArr[j], newArr[i]]; 
        }
        return newArr;
    };
    
    return (
        <div className="cards-list">
            {pokemons.map((pokemon, index) => (
                <Card key={index} name={pokemon.name} imageURL={pokemon.imageURL} onClick={() => handleClick(pokemon.name)}/>
            ))}
        </div>
    );
};

CardsList.propTypes = {
    updateScore: PropTypes.func.isRequired,
    gameLost: PropTypes.func.isRequired,
};

export default CardsList;
