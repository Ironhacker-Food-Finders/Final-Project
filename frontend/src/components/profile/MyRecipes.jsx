import React, { Component } from 'react';
import { Container, Card, ListGroup, Button, } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import InfiniteCarousel from 'react-leaf-carousel';
import actions from '../../services/index'


class MyRecipes extends Component {
    
    // findMyRecipes(){
    //     // console.log(this.props)
    //     actions.findProfileRecipes(this.props.user._id).then(myRecipes => 
    //         console.log('myRecipesReceived', myRecipes)
    //     ).catch(({ response }) => {
    //         window.location.href = "http://localhost:3000/log-in" ;
    //         console.log('error loading',response)   
    //     })
    // }
    
    async componentDidMount (){
        actions.findProfileRecipes(this.props.user._id)
            .then(myRecipes => 
                console.log('myRecipesReceived', myRecipes))
                // this.setState({savedRecipes: myRecipes.data})
            .catch(({ response }) => {
             ;
                console.log('error loading',response)   
            })
        actions.getProfile(this.props.user._id)
            .then(profile =>
                console.log('myProfile received', profile))
                // this.setState({myProfile: profile.data})
            .catch(({ response }) =>
            console.log('error loading',response))
        };
    // if(!props.user.email){ 
    //     props.history.push('/log-in') 
    // }   
    render() {
        console.log(this.state)
        return (
        <div>
            {/* Profile
            Welcome {props.user.email} !!!  */}
            <Container className="home-recipe">
          {/* <img className="hero-img" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5446883.jpg&w=596&h=596&c=sc&poi=face&q=85"></img>
          <div className="hero-recipe">
          <h1 className="recipe-title">My Recipe Name</h1>
          <ul>
            <li>Step 1 - Boil Water at High Heat</li>
            <li>Step 2 - Boil Meat for 30 minutes</li>
            <li>Step 3 - Dice Vegetables into a Juliene Cut</li>
            <li>Step 4 - Prep Appetizers and Grab a Beer</li>
          </ul>
          </div> */}
          
          <Card id="main-card" 
          style={{ width: '100%' }}>
          
          <Card.Title className="text-center">
            <Card.Header>
                <h1 className="prof-title">Let's Get Cooking, Michael!</h1>
            </Card.Header> 
          </Card.Title>
          <Card.Header>
          <Card.Img className="prof-cover" variant="top" src="http://www.ironchefamerica.tv/us/images/lets-get-cooking.jpg" />
          </Card.Header>
        </Card>
        <div className="settings">
        <Card className="sm-card" id="main-card" style={{ width: '18rem' }}>
            <Card.Header>Settings</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item className="settings-links"><Link to="/profile"><Button className="settings-button" ><i class="fas fa-user-circle"></i> Profile</Button></Link></ListGroup.Item>
                <ListGroup.Item className="settings-links"><Link to="/myrecipes"><Button className="settings-button" ><i class="fas fa-list"></i> MyRecipes</Button></Link></ListGroup.Item>
                <ListGroup.Item className="settings-links"><Link to="/myactivity"><Button className="settings-button" ><i class="fas fa-chart-line"></i> Activity</Button></Link></ListGroup.Item>
                <ListGroup.Item className="settings-links"><Link to="/log-out"><Button className="settings-button" ><i class="fas fa-sign-out-alt"></i> Logout</Button></Link></ListGroup.Item>
            </ListGroup>
        </Card>
        <Card className="sm-card" id="main-card" style={{ width: '100%' }}>
            <Card.Header>Featured Recipes</Card.Header>
            <div >
            <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={false}
    showSides={true}
    sidesOpacity={.5}
    sideSize={.1}
    slidesToScroll={1}
    slidesToShow={2}
    scrollOnDevice={true}
  >
    <div>
    <Card className="past-recipe-card" style={{ width: '100%' }}>
            <Card.Img variant="top" src="https://i.ytimg.com/vi/CcwQeQ4VY7I/hqdefault.jpg" />
                <Card.Body>
                    <Card.Title>Kitchen Sink Nachos</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="secondary" className="settings-button">View Recipe</Button>
                </Card.Body>
            </Card>
      
    </div>
    <div>
    <Card className="past-recipe-card" style={{ width: '100%' }}>
            <Card.Img variant="top" src="https://i.ytimg.com/vi/LIubvcunMBc/hqdefault.jpg" />
                <Card.Body>
                    <Card.Title>Brooklyn Style Pizza</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="secondary" className="settings-button">View Recipe</Button>
                </Card.Body>
            </Card>
    </div>
    <div>
    <Card className="past-recipe-card" style={{ width: '100%' }}>
            <Card.Img variant="top" src="https://i.ytimg.com/vi/ZJPpMSx3eSw/hqdefault.jpg" />
                <Card.Body>
                    <Card.Title> Tiquana Street Tacos</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="secondary" className="settings-button">View Recipe</Button>
                </Card.Body>
            </Card>
    </div>
    <div>
    <Card className="past-recipe-card" style={{ width: '100%' }}>
            <Card.Img variant="top" src="https://i.ytimg.com/vi/ZJPpMSx3eSw/hqdefault.jpg" />
                <Card.Body>
                    <Card.Title> Tiquana Street Tacos</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="secondary" className="settings-button">View Recipe</Button>
                </Card.Body>
            </Card>
    </div>
    <div>
    <Card className="past-recipe-card" style={{ width: '100%' }}>
            <Card.Img variant="top" src="https://i.ytimg.com/vi/ZJPpMSx3eSw/hqdefault.jpg" />
                <Card.Body>
                    <Card.Title> Tiquana Street Tacos</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="secondary" className="settings-button">View Recipe</Button>
                </Card.Body>
            </Card>
    </div>
  </InfiniteCarousel>
            {/* <Card className="past-recipe-card" style={{ width: '33%' }}>
            <Card.Img variant="top" src="https://i.ytimg.com/vi/LIubvcunMBc/hqdefault.jpg" />
                <Card.Body>
                    <Card.Title>Brooklyn Style Pizza</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="secondary" className="settings-button">View Recipe</Button>
                </Card.Body>
            </Card> */}
            {/* <Card className="past-recipe-card" style={{ width: '33%' }}>
            <Card.Img variant="top" src="https://i.ytimg.com/vi/CcwQeQ4VY7I/hqdefault.jpg" />
                <Card.Body>
                    <Card.Title>Kitchen Sink Nachos</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="secondary" className="settings-button">View Recipe</Button>
                </Card.Body>
            </Card> */}
            </div>
        </Card>
        
        </div>

        
        
        
        </Container>
        </div>
        );
    }
}

export default MyRecipes;