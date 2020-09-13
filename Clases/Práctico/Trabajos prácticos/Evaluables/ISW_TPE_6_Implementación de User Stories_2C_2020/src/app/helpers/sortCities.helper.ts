
const sortCitiesByName = ( cities ) => {

    const compare = (a, b) => {
        const cityA = a.nombre.toUpperCase();
        const cityB = b.nombre.toUpperCase();
      
        return cityA > cityB ? 1 : cityA < cityB ? -1 : 0;
      }
      
      return cities.sort(compare);
}

export default sortCitiesByName;