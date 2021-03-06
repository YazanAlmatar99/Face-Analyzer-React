import React, {Component} from 'react';
import axios from 'axios';
import UserCard from './UserCard'
import {storage} from '../firebase';
import {Button,Icon,Header,Image,Container,Progress} from "semantic-ui-react"  
class Upload extends Component{
    state = {
        selectedFile:null,
        url:"",
        res:null,
        progress:0,
        faceDetected: false,
        message:""

    }
    fileSelectedHander = event => {
        this.setState({selectedFile:event.target.files[0]})
    }
    fileUploadHandler = () => {
        const uploadTask = storage.ref(`images/${this.state.selectedFile.name}`).put(this.state.selectedFile)
        uploadTask.on("state_changed",(snapshot)=> {
            //progress 
            var progress = parseInt((snapshot.bytesTransferred/snapshot.totalBytes)*100)
            this.setState({progress:progress})
        },
        (error)=> {
            console.log(error)
        }, ()=> {
            //complete function
            storage.ref('images').child(this.state.selectedFile.name).getDownloadURL().then(url=> {
                this.setState({url:url})
                console.log(url)
                if (this.state.url) {
                    this.fetch()
                }
            })
        })
    }
     fetch = () =>{
        axios({
        "method":"POST",
        "url":"https://microsoft-face1.p.rapidapi.com/detect",
        "headers":{
        "content-type":"application/json",
        "x-rapidapi-host":"microsoft-face1.p.rapidapi.com",
        "x-rapidapi-key":"c203a10e88mshd433e824b902fa1p154b41jsndc794dc3483f",
        "accept":"application/json",
        "useQueryString":true
        },"params":{
        "detectionModel":"detection_01",
        "returnFaceAttributes":"age,gender,smile,facialHair,glasses,emotion",
        "returnFaceId":"true",
        "recognitionModel":"recognition_02"
        },"data":{
        "url":`${this.state.url}`
        }
        })
        .then((response)=>{
            console.log(response.data,"hellooooo")
            if (response.data.length !== 0){
                this.setState({res:response.data,faceDetected:true})
                this.setState({message:""})
            } else {
                this.setState({faceDetected:false})
                this.setState({message:"No Face Detected"})
            }

        })
        .catch((error)=>{
          console.log(error)
        })
      }
    render(){
        return(
            <Container>
                <input style={{display:"none"}} type="file" onChange={this.fileSelectedHander}
                ref={fileInput => this.fileInput = fileInput}/>
                <Header as='h2' icon textAlign='center' style={{marginTop:"15px"}}>
                    <Icon name='id badge' circular />
                    <Header.Content>Face Analyzer</Header.Content>
                 </Header>
                <Image
                    centered
                    size='large'
                    src='https://www.eyewitness-oman.com/wp-content/uploads/2018/04/FaceRecognition.png'
                />
                <div className="uploadFormWrapper">
                    <Button animated secondary onClick={()=> this.fileInput.click()} >
                        <Button.Content visible >Choose File</Button.Content>
                        <Button.Content hidden>
                        <Icon name='file' />
                        </Button.Content>
                    </Button>
                    <Button animated primary onClick={this.fileUploadHandler}  className="uploadButton"  disabled={!this.state.selectedFile}>
                        <Button.Content visible>Upload</Button.Content>
                        <Button.Content hidden>
                        <Icon name='upload' />
                        </Button.Content>
                    </Button>
                </div>
                {this.state.selectedFile ? <Progress percent={this.state.progress} autoSuccess  progress/> : null}
               {this.state.faceDetected? <UserCard data={this.state.res} image={this.state.url}/> : <h1>{this.state.message}</h1>}

            </Container>
          
        )
    }
}
export default Upload