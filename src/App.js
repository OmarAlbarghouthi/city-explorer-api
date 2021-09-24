import React from 'react'
import axios from 'axios'
import Movie from './components/Movie'
import Weather from './components/Weather'




class App extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
     
      dataInfo: [],
      searchQuery: '',
      render: false,
      movieInformation: [],
      // MRes: {}
    }

  }


  submitFun = async (event) => {
    event.preventDefault();

    await this.setState({
      searchQuery: event.target.city.value
    })

    try {
     
      let weatherUrl = `${process.env.REACT_APP_SERVER_LINK}/weather?city=${this.state.searchQuery}`;
      let weatherInfo = await axios.get(weatherUrl);
      await this.setState({

        dataInfo: weatherInfo.data,
        render: true

      })
      


      let movieUrl = `${process.env.REACT_APP_SERVER_LINK}/movie?query=${this.state.searchQuery}`;
      let movieInfo = await axios.get(movieUrl);
      
      await this.setState({
        render: true,
        movieInformation: movieInfo.data
      })
      


    } catch {
      console.log('There is an error');
    }



  }
  render() {
    return (
      <div>
        <h2> City Explorer </h2>


        <form onSubmit={this.submitFun}> 
        <label> Enter City Name:  </label>
        <br></br>

          <input type="text" name='city' />
          <input type="submit" value="Let's Go" />
        </form>

        {this.state.render &&
          <>
            
            {
              this.state.dataInfo.map(element => {
                return (
                  <Weather ele={element} />
                )
              })
            }




            {
              this.state.movieInformation.map(element => {
                return (
                  <Movie ele={element} />
                )
              })

            }



          </>
        }
      </div>
    )
  }
}
export default App