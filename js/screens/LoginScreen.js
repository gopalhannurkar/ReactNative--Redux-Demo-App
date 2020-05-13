import React, { Component } from 'react';
import { Button, TextInput, View, Text, TouchableOpacity } from 'react-native';

import { connect } from "react-redux";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', valid: false };
  }

  closeit = () =>{
    this.setState({valid : false})
  }

  Login_now = () =>{
    if(this.state.username==''&& this.state.password==''){
      console.log('enter value');
      this.setState({valid : true})
      return
    }
    console.log('from login now');
    this.props.navigation.navigate('Dash')
    this.props.login_now(this.state.username, this.state.password);
    // this.props.navigation

  }

  render() {
    return (
      <View style={{ flex: 1,justifyContent:'center', alignItems: 'center', marginTop: 50 }}>
        <TextInput
          style={{ height: 40,width:260,margin: 15,borderWidth:1,borderStyle:'solid', borderColor:'#ccc',borderRadius:6, padding:10,paddingLeft:15,paddingRight:15}}
          placeholder="Username"
          onChangeText={(username) => this.setState({ username })}
        />
        <TextInput
          style={{ height: 40,width:260,margin: 15,borderWidth:1,borderStyle:'solid', borderColor:'#ccc',borderRadius:6,padding:10,paddingLeft:15,paddingRight:15 }}
          placeholder="Password"
          onChangeText={(password) => this.setState({ password })}
        />
        {/* <Button
          onPress={this.Login_now}
          title="LOGIN ?"
        /> */}
        <TouchableOpacity    onPress={this.Login_now} >  
          <View   style={{ height: 40 ,borderRadius:6, marginTop: 10, width:120, backgroundColor:'#01b4bb', padding:20,justifyContent:'center', alignItems: 'center',}}  >
            <Text
            style={{color:"#fff"}}
            >Login</Text>
          </View>
        </TouchableOpacity>

      {  this.state.valid == true ? <TouchableOpacity onPress={this.closeit}  >
        <View    style={{backgroundColor:'orange', padding:10, marginTop:50}}  >

      
      <Text> Please, Enter Username and Password to Continue...  </Text>
      </View>
      </TouchableOpacity>   : null  }

      </View>
    );
  }
}

const mapStateToProps = (state) => {
	
	return {
	
	
	};
};

const mapDispatchToProps = (dispatch) => {
	console.log('from product dispatch', dispatch)
return {
		login_now: (ID, PASS) => dispatch({ type: "LOGIN", value:{ID:ID, key:PASS} }),

		

		
// 
};
};


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginScreen);
