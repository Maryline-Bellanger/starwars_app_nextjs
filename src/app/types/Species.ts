export type SpeciesData =  {
    "count": number;
    "next": string | null;
    "previous": string | null;
    "results": [
        {
            "average_height": string;
            "average_lifespan": string;
            "classification": string;
            "created": string;
            "designation": string;
            "edited": string;
            "eye_colors": string;
            "hair_colors": string;
            "homeworld": string;
            "language": string;
            "name": string;
            "people": string[];
            "films": string[];
            "skin_colors": string;
            "url": string;
        }
    ];
};

export type OneSpecie = {
    "average_height": string;
    "average_lifespan": string;
    "classification": string;
    "designation": string;
    "eye_colors": string;
    "hair_colors": string;
    "homeworld": string;
    "language": string;
    "name": string;
    "people": string[];
    "films": string[];
    "skin_colors": string;
    "url": string;
}