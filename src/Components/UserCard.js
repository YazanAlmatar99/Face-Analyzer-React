import React from 'react';
import {Card,Image,Table,Header} from "semantic-ui-react" 
class UserCard extends React.Component {
    state = {
        data:null
    }

    // componentWillReceiveProps(){
    //     this.setState({data:this.props.data})
    // }
    render(){
        if (this.props.data) {
            console.log(this.props.data,"data")
       
        return(
            <div>
                 <Card
                 width={50}
                 height={50}
                     image={this.props.image}
                      header={"Age: " + this.props.data.data[0].faceAttributes.age + " | Gender: " + this.props.data.data[0].faceAttributes.gender}
                    // meta='Friend'
                     description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                 />
                 <h3></h3>
              
            </div>
           
        ) } else {
            return null
        }
    }
}

export default UserCard;