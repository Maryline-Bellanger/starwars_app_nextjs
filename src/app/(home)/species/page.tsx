"use client"

import Card from '@/app/components/Card';
import useSpecies from '@/app/hooks/species/useSpecies'
import Link from 'next/link';
import Pagination from '@/app/components/pagination/Pagination';
import Loading from '@/app/components/loading/Loading';
import { baseURLImage } from '@/app/services/api';
import { getUrlId } from '@/app/utils/getUrlId';
import { useState } from 'react';

export default function Species() {
    const [page, setPage] = useState(1);
    const { species, isLoading, error } = useSpecies({page})
    const totalPage = species && Math.ceil(species.count / 10)
   
    if (isLoading) return <Loading />
    if (error) return 'An error has occurred: ' + error

    return (
        <div>
            <Pagination
                page={page}
                totalPage={totalPage}
                setPage={setPage}
            />
            <div className="flex flex-wrap my-6 justify-center">
                {species && species.results.map((specie) => (
                    <Link href={`/species/${getUrlId(specie.url)}`} key={`${getUrlId(specie.url)}`}>
                        <Card 
                            id={`${getUrlId(specie.url)}`} 
                            name={specie.name} 
                            image={`${baseURLImage}species/${getUrlId(specie.url)}.jpg`} />
                    </Link>
                ) )}
            </div>
        </div>
    )
}
