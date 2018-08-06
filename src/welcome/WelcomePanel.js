import { Animated, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import colors from '../styles/colors';
import { formTypes } from '../auth/redux';
import SocialButton from '../auth/SocialButton';
import Expo from 'expo';
//import { signInWithGoogleAsync, signInWithFacebookAsync } from '../auth/socialauth'

class WelcomePanel extends React.Component {
  static propTypes = {
    switchFormType: PropTypes.func,
    formType: PropTypes.string,
    navigate: PropTypes.func,
  };

  sharedButtonProps = {
    borderRadius: 3,
    containerViewStyle: styles.buttonContainer,
    fontSize: 18,
  };

  defaultView = (
    <View style={styles.defaultViewContainer}>
      <Button
        {...this.sharedButtonProps}
        color={colors.white}
        backgroundColor={colors.red}
        title="Register"
        onPress={() => this.props.switchFormType(formTypes.SIGN_UP)}
      />
      <Button
        {...this.sharedButtonProps}
        color={colors.black}
        backgroundColor={colors.offWhite}
        title="Sign In"
        onPress={() => this.props.switchFormType(formTypes.LOGIN)}
      />
    </View>
  );

  async signInWithGoogleAsync() {
      try {
          const result = await Expo.Google.logInAsync({
              androidClientId: '506898842953-a5djvc12er7cbmv78ajfjidokjmlropn.apps.googleusercontent.com',
              iosClientId: '506898842953-8nise7b8pq8ifdp9qpjta6d5no0l5u93.apps.googleusercontent.com',
              scopes: ['profile', 'email'],
          });

          if (result.type === 'success') {
              return result.accessToken;
              this.props.navigate('Home');
          } else {
              return { cancelled: true };
          }
      } catch (e) {
          return { error: true };
      }
  }

  async signInWithFacebookAsync() {
      const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('206331633410454', {
          permissions: ['public_profile'],
      });
      if (type === 'success') {
          // Get the user's name using Facebook's Graph API
          const response = await fetch(
              `https://graph.facebook.com/me?access_token=${token}`);
          Alert.alert(
              'Logged in!',
              `Hi ${(await response.json()).name}!`,
          );
          this.props.navigate('Home');
      }
  }

  expandedView = formType => {
    const config = (type => {
      switch (type) {
        case formTypes.INITIAL:
          return {};
        case formTypes.LOGIN:
          return {
            preposition: 'in',
            switchText: 'Don\'t have an account yet? Register',
            otherFormType: formTypes.SIGN_UP,
          };
        case formTypes.SIGN_UP:
          return {
            preposition: 'up',
            switchText: 'Have an account? Sign in',
            otherFormType: formTypes.LOGIN,
          };
      }
    })(formType);

    return (
      <View style={styles.expandedViewContainer}>
        <SocialButton
                type="google"
                title={`Sign ${config.preposition} with Google`}
                style={styles.social}
                onPress={this.signInWithGoogleAsync}
                onLongPress={this.signInWithGoogleAsync}
        />
        <SocialButton type="facebook" title="Continue with Facebook" style={styles.social}
                onPress={this.signInWithFacebookAsync}
                onLongPress={this.signInWithFacebookAsync}/>
        <Text style={styles.text}>or</Text>
        <SocialButton
          type="email"
          title={`Sign ${config.preposition} with email`}
          style={styles.social}
          onPress={this.goToCredentials}
        />
        <Text
          style={[styles.text, styles.switchText]}
          onPress={() => this.props.switchFormType(config.otherFormType)}
        >
          {config.switchText}
        </Text>
      </View>
    );
  };

  goToCredentials = () => {
    this.props.navigate('Credentials');
  };

  render() {
    return (
      <Animated.View
        style={[
          styles.container,
          this.props.formType !== formTypes.INITIAL && styles.containerExpanded,
        ]}
      >
        {this.props.formType === formTypes.INITIAL
          ? this.defaultView
          : this.expandedView(this.props.formType)}
      </Animated.View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  containerExpanded: {
    position: 'absolute',
    bottom: 0,
  },
  buttonContainer: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 3,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  defaultViewContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  expandedViewContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  social: {
    marginBottom: 8,
    width: '100%',
    maxWidth: 322,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 18,
  },
  switchText: {
    paddingBottom: 0,
  },
});

export default WelcomePanel;
