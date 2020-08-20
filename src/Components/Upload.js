import React, {Component} from 'react';
import axios from 'axios'
import {storage} from '../firebase'
class Upload extends Component{
    state = {
        selectedFile:null,
        url:"",
        res:null

    }
    fileSelectedHander = event => {
        console.log(event.target.files[0])
        this.setState({selectedFile:event.target.files[0]})
    }
    fileUploadHandler = () => {
        // console.log(this.state.selectedFile)
        // const fd = new FormData()
        // fd.append("image",this.state.selectedFile, this.state.selectedFile.name)
        // this.setState({img:fd})
        // this.fetch()
        const uploadTask = storage.ref(`images/${this.state.selectedFile.name}`).put(this.state.selectedFile)
        uploadTask.on("state_changed",(snapshot)=> {
            //progress 
            console.log(snapshot)
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
          console.log(response)
          this.setState({res:response})

        }).then(()=>{
            alert(this.state.res.data[0].faceAttributes.age)

        })
        .catch((error)=>{
          console.log(error)
        })
      }
    render(){
        return(
            <div>
                <input type="file" onChange={this.fileSelectedHander}/>
                <button onClick={this.fileUploadHandler}>Upload</button>
            </div>
          
        )
    }
}
export default Upload