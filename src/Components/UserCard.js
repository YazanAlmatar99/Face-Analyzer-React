import React from 'react';
import {Card,Image,Table,Header,List} from "semantic-ui-react" 
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
            <div className="userCard-wrapper">
                 <Card
                 width={50}
                 height={50}
                     image={this.props.image}
                      header={"Age: " + this.props.data.data[0].faceAttributes.age + " | Gender: " + this.props.data.data[0].faceAttributes.gender + " | " + this.props.data.data[0].faceAttributes.glasses}
                    // meta='Friend'
                 />
                 <div className="emotion-wrapper">
                 <List horizontal>
                    <List.Item>
                    <Image avatar src='https://images.emojiterra.com/google/android-10/512px/1f620.png' />
                    <List.Content>
                        <List.Header>Anger</List.Header>
                        {this.props.data.data[0].faceAttributes.emotion.anger}/1
                    </List.Content>
                    </List.Item>
                    <List.Item>
                    <Image avatar src='https://cdn.imgbin.com/14/0/20/imgbin-emojipedia-smile-eye-face-emoji-rxMbcw36w5zWsNm85GZeQdGzP.jpg' />
                    <List.Content>
                        <List.Header>Contempt</List.Header>
                        {this.props.data.data[0].faceAttributes.emotion.contempt}/1
                    </List.Content>
                    </List.Item>
                    <List.Item>
                    <Image avatar src='https://img.favpng.com/17/15/19/emoji-company-gmbh-smiley-emoticon-computer-icons-png-favpng-gBU5JZM73SqSuU3gkRScK8ATj.jpg' />
                    <List.Content>
                        <List.Header>Disgust</List.Header>
                        {this.props.data.data[0].faceAttributes.emotion.disgust}/1
                    </List.Content>
                    </List.Item>
                </List>
                <List horizontal>
                    <List.Item>
                    <Image avatar src='https://w0.pngwave.com/png/67/312/pile-of-poo-emoji-smiley-happiness-emoji-png-clip-art.png' />
                    <List.Content>
                        <List.Header>Happiness</List.Header>
                        {this.props.data.data[0].faceAttributes.emotion.happiness}/1
                    </List.Content>
                    </List.Item>
                    <List.Item>
                    <Image avatar src='https://www.vhv.rs/dpng/d/430-4305687_neutral-face-emoji-clipart-emotionless-clipart-hd-png.png' />
                    <List.Content>
                        <List.Header>Neutral</List.Header>
                        {this.props.data.data[0].faceAttributes.emotion.contempt}/1
                    </List.Content>
                    </List.Item>
                    <List.Item>
                    <Image avatar src='https://img1.pnghut.com/1/4/1/KehuvXXPNs/emoji-crying-happiness-frown-smile.jpg' />
                    <List.Content>
                        <List.Header>Sad</List.Header>
                        {this.props.data.data[0].faceAttributes.emotion.sadness}/1
                    </List.Content>
                    </List.Item>
                </List>
                </div>
            </div>
            

        ) } else {
            return null
        }
    }
}

export default UserCard;