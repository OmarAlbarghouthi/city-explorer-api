import React from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';




class Weather extends React.Component {

    render() {


        return (
            <div>
              
                <Card style={{ width: '18rem' }}>
                
                    <Card.Body>
                        <Card.Title>Date: {this.props.ele.Date}</Card.Title>
                        <Card.Text>
                            <p>Temp: {this.props.ele.Temperature}</p>

                        </Card.Text>
                    </Card.Body>
                </Card>

               
            </div>

        )
    }




}

export default Weather;