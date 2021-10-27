import React, { FC } from 'react'
//import { firstState as firstStateProps } from '../App'

type firstStateChild = {
    definedPropsChild: {
        response?: [] | undefined
    }
}

type itemProps = {
    //definedItems: {
    continent: string
    country: string
    day: number
    population: number
    //}
}

const List: FC<firstStateChild> = ({ definedPropsChild }) => {

    const { response } = definedPropsChild

    return (
        <ul>
            {response?.map((item: itemProps, idx) => (
                <li key={idx}>
                    {/* {item.cases.OneM_pop} */}
                    {item?.continent} - 
                    {item.country} - 
                    {item.day} - 
                    {item.population}
                </li>
            ))}
        </ul>
    )

}
export default List