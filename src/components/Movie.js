import React from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class Movie extends React.Component {


    render() {




        return (

            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.ele.img} />
                    <Card.Body>
                        <Card.Title>Title: {this.props.ele.title}</Card.Title>
                        <Card.Text>
                            <p>Rate: {this.props.ele.rate}</p>

                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

        )

    }


}

export default Movie;