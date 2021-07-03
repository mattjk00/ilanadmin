import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Button from '@material-ui/core/Button';
import {AppBar,Toolbar,Typography, Container, Grid, CardContent, Card, TextField, CardMedia, Select, MenuItem, InputLabel} from '@material-ui/core/'

import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAZVS4VPzvlkpopkhJrie1Onk7-RNe4mZs",
    authDomain: "ilan-bc1b3.firebaseapp.com",
    projectId: "ilan-bc1b3",
    storageBucket: "ilan-bc1b3.appspot.com",
    messagingSenderId: "715467029812",
    appId: "1:715467029812:web:319a4b5762c6c742457961"
};
  // Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

class PostCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected:1,
            imgUrlValue:"",
            selectedLink:"",
        };
        this.handleChange = this.handleChange.bind(this);
        this.textChanged = this.textChanged.bind(this);
        this.buttonClick = this.buttonClick.bind(this);
    }
    handleChange(e, val) {
        this.setState({selected: e.target.value, selectedLink:val.props.name});
    }

    componentWillReceiveProps(newProps) {
        const newv = newProps.content ? newProps.content.img_src : "logo192.png";
        
        //this.setState({imgUrlValue:''});
        this.setState({imgUrlValue:newv});
        
    }

    buttonClick() {
        this.props.updateFeatured(this.state, this.props.value);
    }

    componentDidUpdate() {
        //console.log(this.state);
    }

    textChanged(e) {
        this.setState({imgUrlValue:e.target.value});
        
    }

    imgSrc() {
        return this.props.content ? this.props.content.img_src : "logo192.png";
    }

    titleText() {
        if (this.props.content) {
            if (this.props.content.link) {
                return this.props.content.link.displayText;
            }
            return "ERROR (1)"; // Display Text Error 
        }
        return "ERROR (2)"; // Props Error
    }

    render() {
        return <Grid item>
            <Card>
                <img src={this.state.imgUrlValue} key={Date.now()} width="192px" height="192px"/>
                <CardContent style={{padding:"25px"}}>
                    <Typography>{
                        this.titleText()}</Typography>
                    <form key={this.props.value}>
                    <InputLabel id="">Song/Album</InputLabel>
                    <Select
                        value={this.state.selected}
                        onChange={this.handleChange}
                    >
                        {
                        //this.props.featured.map((ft, i) => <MenuItem value={ft.link_id} key={ft.link_id}>{ft.link.displayText}</MenuItem>)
                        this.props.allLinks.map((link, i) => <MenuItem value={link.displayText} name={link.uid} key={link.uid}>{link.displayText}</MenuItem>)
                        }
                    </Select>
                    <br/>
                    <br/>
                    <TextField onChange={this.textChanged} variant="outlined" label="image url" value={this.state.imgUrlValue}></TextField>
                    </form>
                </CardContent>
                <Button color="primary" onClick={this.buttonClick}>Save</Button>
            </Card>
        </Grid>
    }
}

class AdminPanel extends React.Component {
    constructor(props) {
        super(props);
        const featuredRef = db.collection('featured');
        const linksRef = db.collection('links');
        this.state = {
            featuredRef:featuredRef,
            linksRef:linksRef,
            featured:[],
            allLinks:[]
        }
        this.updateFeatured = this.updateFeatured.bind(this);
    }
    async componentDidMount() {

        let a = firebase.auth().currentUser;
        console.log(a);

        const snapshot = await this.state.featuredRef.get();
        let feat = [];
        snapshot.forEach(doc => {
            feat.push(doc.data());
        });
        feat.sort((a, b) => (a.order > b.order) ? 1 : -1);

        const linkSnapshot = await this.state.linksRef.get();
        let links = [];
        linkSnapshot.forEach(doc => {
            for (let i = 0; i < feat.length; i++) {
                if (feat[i].link_id === doc.data().uid) {
                    feat[i].link = doc.data();
                }
                
            }
            links.push(doc.data());
        });

        this.setState({featured:feat, allLinks:links});
    }

    renderCard(i) {
        return <PostCard value={i} content={this.state.featured[i]} featured={this.state.featured} allLinks={this.state.allLinks} updateFeatured={this.updateFeatured}/>
    }
    handleClick() {

    }

    async updateFeatured(data, i) {
        //console.log("UPDATE", data, "\n", i);
        const query = await this.state.featuredRef.where('order', '==', i).get();
        query.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
            const res = doc.ref.update({img_src:data.imgUrlValue, link_id:data.selectedLink});
        })
    }

    render() {
        return <div>
            <Grid item>
                <Grid container spacing={2}>
                    {this.renderCard(0)}
                    {this.renderCard(1)}
                    {this.renderCard(2)}
                    {this.renderCard(3)}
                    {this.renderCard(4)}
                    {this.renderCard(5)}
                    {this.renderCard(6)}
                    {this.renderCard(7)}
                </Grid>
                
            </Grid>
        </div>
        
    }
}

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password:""
        };
        this.usernameTextChanged = this.usernameTextChanged.bind(this);
        this.passwordTextChanged = this.passwordTextChanged.bind(this);
        this.login = this.login.bind(this);
    }

    usernameTextChanged(e) {
        this.setState({username:e.target.value});
    }

    passwordTextChanged(e) {
        this.setState({password:e.target.value});
    }

    login() {
        console.log(this.state);

        firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password)
            .then((usercred) => {
                console.log("Success");
                this.props.reAuth();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (<div>
            <Typography>LOGIN</Typography>
            <Card>
                <CardContent>
                    <form>
                        <TextField label="Username" onChange={this.usernameTextChanged} value={this.state.username}></TextField><br/>
                        <TextField label="Password" onChange={this.passwordTextChanged} value={this.state.password} type="password"></TextField><br/><br/>
                        <Button color="primary" onClick={this.login}>Login</Button>
                    </form>
                </CardContent>
            </Card>
            </div>)
    }
}


function NavBar(props) {
    return <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" >
        Ilan Admin
      </Typography>
    </Toolbar>
  </AppBar>;
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auth:false
        }
        this.checkAuth = this.checkAuth.bind(this);
    }
    render() {

        let mainchunk = <AdminPanel/>
        if (!this.state.auth) {
            mainchunk = <LoginForm reAuth={this.checkAuth}/>
        }

        return <div>
            <Container>
                <NavBar/><br/>
                {mainchunk}
            </Container>
        </div>
    }
    componentDidMount() {
        this.checkAuth();
    }

    async checkAuth() {
        //let isAuth = firebase.auth().currentUser != null;

        let isAuth = false;
        await firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                isAuth = true;
            }
        });

        console.log("Auth", isAuth);
        this.setState({auth:isAuth});
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));