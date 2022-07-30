import Beer from "./Beer";

export default function Beerlist ({beers}){
    const Beerlist = beers.map(beer => (
                
        <Beer image={beer.image_url}
        name ={beer.name}
        description={beer.description}
        alcohol={beer.abv}
        />
        ))
    return (
        <div>
            <div className="dflex">
            {Beerlist}
                </div>
            </div>
            
    )
}