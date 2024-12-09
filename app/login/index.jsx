import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();
  const handleLogin=()=>{
    
    router.push('/(tab)');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.accountHeading}>Log in to your account</Text>
      <Text style={styles.welcomepara}>Welcome! please enter your details.</Text>
      <View>
        <View>
          <Text style={styles.inputHeading}>Email</Text>
          <TextInput style={styles.input} placeholder='Enter your email' placeholderTextColor="#888888" />
        </View>
        <View>
          <Text style={styles.inputHeading}>Password</Text>
          <TextInput style={styles.input} placeholder='Enter your password' placeholderTextColor="#888888" />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.signupButton} onPress={handleLogin}>
            <Text style={styles.signupButtonText}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footerSection}>
        <Text style={styles.loginSectionText}>Don't have an account?</Text>
        <Link style={styles.signUpLink} href={'/'}>Sign in</Link>
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
  footerSection: {
    flexDirection: 'row',
    marginTop: 20,
  },
  loginSectionText: {
    color: '#525252',
    fontSize: 15
  },
  signUpLink: {
    color: 'white'
  }
});
