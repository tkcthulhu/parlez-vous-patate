import React from "react"

export function AppetizerButton(props) {
    
    let selections = (props.menu.filter((item) => (item.category.title === 'Appetizer')))
    
    let items = new Array;

    for(let i = 0; i < selections.length; i++) {
        items.push(<><h1>{selections[i].title}</h1><br/><p>{selections[i].description}</p><br/><p>{selections[i].price}</p></>)
    }
    return(<div>{items}</div>)
}

export function BreakfastButton(props) {
    
    let selections = (props.menu.filter((item) => (item.category.title === 'Breakfast')))

    let items = new Array;

    for(let i = 0; i < selections.length; i++) {
        items.push(<><h1>{selections[i].title}</h1><br/><p>{selections[i].description}</p><br/><p>{selections[i].price}</p></>)
    }
    return(<div>{items}</div>)
}

export function BrunchButton(props) {
    
    let selections = (props.menu.filter((item) => (item.category.title === 'Brunch')))

    let items = new Array;

    for(let i = 0; i < selections.length; i++) {
        items.push(<><h1>{selections[i].title}</h1><br/><p>{selections[i].description}</p><br/><p>{selections[i].price}</p></>)
    }
    return(<div>{items}</div>)
}

export function LunchButton(props) {
    
    let selections = (props.menu.filter((item) => (item.category.title === 'Lunch')))
    
    let items = new Array;

    for(let i = 0; i < selections.length; i++) {
        items.push(<><h1>{selections[i].title}</h1><br/><p>{selections[i].description}</p><br/><p>{selections[i].price}</p></>)
    }
    return(<div>{items}</div>)
}

export function DinnerButton(props) {
    
    let selections = (props.menu.filter((item) => (item.category.title === 'Dinner')))

    let items = new Array;

    for(let i = 0; i < selections.length; i++) {
        items.push(<><h1>{selections[i].title}</h1><br/><p>{selections[i].description}</p><br/><p>{selections[i].price}</p></>)
    }
    return(<div>{items}</div>)
}

export function SidesButton(props) {
    
    let selections = (props.menu.filter((item) => (item.category.title === 'Side')))

    let items = new Array;

    for(let i = 0; i < selections.length; i++) {
        items.push(<><h1>{selections[i].title}</h1><br/><p>{selections[i].description}</p><br/><p>{selections[i].price}</p></>)
    }
    return(<div>{items}</div>)
}

export function DessertButton(props) {
    
    let selections = (props.menu.filter((item) => (item.category.title === 'Dessert')))

    let items = new Array;

    for(let i = 0; i < selections.length; i++) {
        items.push(<><h1>{selections[i].title}</h1><br/><p>{selections[i].description}</p><br/><p>{selections[i].price}</p></>)
    }
    return(<div>{items}</div>)
}