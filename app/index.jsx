import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.accountHeading}>Create an account</Text>
      <Text style={styles.welcomepara}>Welcome! please enter your details.</Text>
      <View>
        <View>
          <Text style={styles.inputHeading}>Name</Text>
          <FontAwesome name="user" size={20} style={styles.icon} />
          <TextInput style={styles.input} placeholder='Enter you name'
            placeholderTextColor="#888888" />
        </View>
        <View>
          <Text style={styles.inputHeading}>Email</Text>
          <TextInput style={styles.input} placeholder='Enter your email' placeholderTextColor="#888888" />
        </View>
        <View>
          <Text style={styles.inputHeading}>Password</Text>
          <TextInput style={styles.input} placeholder='Enter your password' placeholderTextColor="#888888" />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.signupButton}>
            <Text style={styles.signupButtonText}>sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.loginSection}>
        <Text style={styles.loginSectionText}>Already have an account?</Text>
        <Link style={styles.loginLink} href={'/login'}>Log in</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#151515",
    flex: 1,
    padding: 30,

  },
  accountHeading: {
    color: '#FEFEFE',
    fontSize: 22,
    marginBottom: 9,
    fontWeight: 500,
    paddingTop: 50

  },
  welcomepara: {
    color: '#888888',
    marginBottom: 15,
  },
  inputHeading: {
    color: '#C9C9C9',
    fontWeight: 500,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#272728",
    elevation: 30,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#3d3d3f',
    marginBottom: 15,
    color: 'white'
  },
  icon: {
    position: 'absolute',
    left: 10,
    top: '50%',
    color: 'white'
  },
  signupButton: {
    borderWidth: 1,
    borderColor: '#C64C47',
    backgroundColor: "#C64C47",
    marginTop: 20,
    paddingVertical: 9,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9,
  },
  signupButtonText: {
    color: "white",
    textAlign: 'center',
    fontWeight: 600,
    fontSize: 20
  },
  loginSection:{
    flexDirection:'row',
    marginTop:20,
  },
  loginSectionText:{
    color:'#525252',
    fontSize:15
  },
  loginLink:{
    color:'white'
  }
});
