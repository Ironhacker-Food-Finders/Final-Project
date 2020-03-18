import React, { Component } from 'react';
import service from '../../services/service';
import { Container, Card, ListGroup, Button, Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import actions from '../../services/index';

class Account extends Component {


    state = {
        UserID: "",
        username: "",
        firstName: "",
        lastName: "",
        imageUrl: "",
        dietPreference: "",
        allergies: [],
        recipes: [],
        activity: [],
    }

      async componentDidMount(){
         actions.getProfile(this.props.user._id).then(profileFound=>{
            console.log(profileFound.data[0]) 
            this.setState({...profileFound.data[0]})
         })
        }

      putCategoryInState = (e) => {
        console.log('putCategoryInState is being called')
        // let profile= actions.getProfile(this.props.user._id)
        
        let categoryArr = [...this.state.dietPreference];
        categoryArr.push(e.target.value)
        console.log(categoryArr)
        this.setState({
            
            dietPreference: categoryArr
        
        }) 
    }
    handleFileUpload = e => {
        console.log("The file to be uploaded is: ", e.target.files[0]);

        const uploadData = new FormData();
        // imageUrl => this name has to be the same as in the model since we pass
        // req.body to .create() method when creating a new thing in '/api/things/create' POST route
        uploadData.append("imageUrl", e.target.files[0]);
        
        service.handleUpload(uploadData)
        .then(response => {
            // console.log('response is: ', response);
            // after the console.log we can see that response carries 'secure_url' which we can use to update the state 
            this.setState({ imageUrl: response.secure_url });
        })
        .catch(err => {
            console.log("Error while uploading the file: ", err);
        });
    }
    handleChange=(e)=>{
        console.log(e.target.name,e.target.value)
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        actions.updateProfile(this.state)
        .then(profileUpdated =>{ 

            console.log('profileupdated',profileUpdated)
            window.location.href = "http://localhost:3000/profile"
        })
        .catch(error=> console.log('error occurred',error))
        
        // service.saveNewThing(this.state)
        // .then(res => {
        //     console.log('added: ', res);
        //     // here you would redirect to some other page 
        // })
        // .catch(err => {
        //     console.log("Error while adding the thing: ", err);
        // });
    }  
   
    // if(!props.user.email){ 
    //     props.history.push('/log-in') 
    // }   
    render (){
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
                <h1 className="prof-title">Account Preferences | {this.state.username}</h1>
            </Card.Header> 
          </Card.Title>
          <Card.Header>
          <Card.Img className="prof-cover" variant="top" src="http://www.ironchefamerica.tv/us/images/lets-get-cooking.jpg "/>
          </Card.Header>
        </Card>
        <div className="settings">
        <Card className="sm-card" id="main-card" style={{ width: '18rem' }}>
            <Card.Header>Settings</Card.Header>
            <Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item className="settings-links"><Link to="/profile"><Button className="settings-button" ><i class="fas fa-user-circle"></i> Profile</Button></Link></ListGroup.Item>
                <ListGroup.Item className="settings-links"><Link to="/myrecipes"><Button className="settings-button" ><i class="fas fa-list"></i> MyRecipes</Button></Link></ListGroup.Item>
                <ListGroup.Item className="settings-links"><Link to="/myactivity"><Button className="settings-button" ><i class="fas fa-chart-line"></i> Activity</Button></Link></ListGroup.Item>
                <ListGroup.Item className="settings-links"><Link to="/log-out"><Button className="settings-button" ><i class="fas fa-sign-out-alt"></i> Logout</Button></Link></ListGroup.Item>
            </ListGroup>
            </Card.Header>
        </Card>
        <Card className="sm-card" id="main-card" style={{ width: '100%' }}>
            <Card.Header>Account Preferences</Card.Header>
            <Card>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label for="exampleInputEmail1">Change User Preferences </Form.Label>
                    <small id="userHelp" className="form-text text-muted">Username must be unique</small>
                    <Form.Control onChange={this.handleChange} name="username" type="username" className="form-control" id="exampleInputEmail1" aria-describedby="UserHelp" placeholder={this.state.username} />
                    <small id="fNameHelp" className="form-text text-muted">First Name (Optional)</small>
                    <Form.Control onChange={this.handleChange} name="firstName" type="firstname" className="form-control" id="exampleInputEmail1" aria-describedby="FirstNameHelp" placeholder={this.state.firstName} />
                    <small id="lNameHelp" className="form-text text-muted">Last Name (Optional)</small>
                    <Form.Control onChange={this.handleChange} name="lastName" type="lastname" className="form-control" id="exampleInputEmail1" aria-describedby="LastNameHelp" placeholder={this.state.lastName} />
                </Form.Group>
                
                <Form.Group>
                    <Form.Control type="hidden" name="MAX_FILE_SIZE" value="4194304" />
                    <Form.Control name="avatar" placeholder="Upload Avatar Image" type="file" 
                    onChange={this.handleFileUpload}/>
                    <small id="emailHelp" className="form-text text-muted">Avatar Upload. 4MB Maximum.</small>

                </Form.Group>
                <Form.Group id="categoryGridCheckbox">
                <Form.Label>Please Select Any Dietary Restrictions Below</Form.Label>
                    <Form.Check type="checkbox" label="Vegetarian" value="Vegetarian" name="category" onChange={this.putCategoryInState}/>
                    <Form.Check type="checkbox" label="Vegan" value="Vegan" onChange={this.putCategoryInState}/>
                    <Form.Check type="checkbox" label="Gluten Free" value="Gluten Free" onChange={this.putCategoryInState}/>
                    <Form.Check type="checkbox" label="Diary Free" value="Diary Free" onChange={this.putCategoryInState}/>
                    <Form.Check type="checkbox" label="Preganancy Friendly" value="Pregnancy Friendly" onChange={this.putCategoryInState}/>
                    <Form.Check type="checkbox" label="None" value="None" onChange={this.putCategoryInState}/>
                    
                </Form.Group>
                
                

                <Button type="submit" size="lg" className="btn btn-primary account-button" block>Submit</Button>
                
                </Form>
            </Card>
           
            
        </Card>
        </div>
        
        
        </Container>
        </div>
        
    );
}
}
export default Account;