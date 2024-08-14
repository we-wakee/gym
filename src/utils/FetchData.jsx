// import dotenv  from "dotenv";

// dotenv.config({})

export const exerciseOptions ={
    
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises',

  headers: { 
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
    'x-rapidapi-key': import.meta.env.VITE_RAPID_KEY
  }

}

console.log(import.meta.env.VITE_RAPID_KEY)

export const fetchData= async(url,options) =>{


    const response = await fetch(url,options);
    const data = response.json();

    return data;
}