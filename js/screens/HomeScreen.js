import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

import { connect } from "react-redux";
import { authInfo } from './../reducers/auth';

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, marginTop: 50, }}>

        <Text  style={{fontSize:20, textAlign:'center'}} > Welcome :</Text>
        <Text  style={{fontSize:20,fontWeight:'700', textAlign:'center', marginTop:30}}>{ this.props.login_ID} </Text>
        <View style={{ flex: 1, marginTop:10,justifyContent:'center', alignItems: 'center',}}      >
        <Button
          onPress={() =>this.props.navigation.navigate('Login')}
          title="Click here to log out"
        />
        </View>
        {/* <Text>Gopal</Text> */}

     
      </View>
    );
  }
}


const mapStateToProps = (state) => {
	console.log("mapStateToProps",state.authInfo.login);
	return {
	
    login_ID: state.authInfo.login,
    login_PASS: state.authInfo.password
	};
};

const mapDispatchToProps = (dispatch) => {
	console.log('from product dispatch', dispatch)
return {
		// login_now: (ID, PASS) => dispatch({ type: "LOGOUT", value:{ID:ID, key:PASS} }),

		

		
// 
};
};


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeScreen);
