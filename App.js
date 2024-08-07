import React, {Component} from 'react';

import api from './services/api';

import {ActivityIndicator, FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import Movie from './src/Movie';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const response = await api.get('r-api/?api=filmes');
    this.setState({
      movies: response.data,
      loading: false
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator color='white' size={100}/>
            <Text style={styles.loading}>Please Wait</Text>
          </View>
        ) : (
          <FlatList
            data={this.state.movies}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <Movie movie={item} />}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#09A6ff',
  },
  loading: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default App;
