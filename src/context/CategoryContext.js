import React, { Component } from 'react';

const CategoryContext = React.createContext();
export const CategoryConsumer = CategoryContext.Consumer;

class CategoryProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            categories : []
         };
    }

    componentDidMount(){
        this.getCategories();

    }

    getCategories = async () =>{
        const _token = process.env.REACT_APP_TOKEN_EVENBRITE;
        const url = `https://www.eventbriteapi.com/v3/categories/`;
        const request = {
            method : 'GET',
            headers : {
                Authorization : `Bearer ${_token}`
            }
        };

        let response = await fetch(url,request);
        let data = await response.json();
        console.log(data);
        this.setState({
            categories : data
        })
    }

    
    render() {
        return (
            <CategoryContext.Provider
                value={{
                    categories : this.state.categories
                }}
            >
                {this.props.children}
                
            </CategoryContext.Provider>
            
        );
    }
}

export default CategoryProvider;