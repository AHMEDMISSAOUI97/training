export const exercisesOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  //console.log(exercisesOptions.headers["X-RapidAPI-Key"])

export const fetchData = async (url,options)=>{
    const response = await fetch(url,options);
    const data=await response.json();

    return data ;
}