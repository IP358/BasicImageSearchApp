import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './imageList';


class App extends React.Component{
    state = { images: [] };

    onSearchSubmit = async term => {
        try {
            const response = await unsplash.get('/search/photos', {
            params: { 
                query: term,
                per_page: '30'
             }
        })

        this.setState({ images: response.data.results });
        
        if(this.state.images.length === 0){
            alert("No Images Found!");
        }

        } catch (error){
            if(error.response)
            {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
            else if (error.request){
                console.log(error.request);
            }
            else{
                console.log('Error', error.message);
            }
        }
    }

    render(){
        
        return(
            <div>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>

            
        );
    }
}

export default App;