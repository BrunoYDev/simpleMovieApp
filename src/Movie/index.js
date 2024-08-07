import react, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

class Movie extends Component {

  render() {
    const {nome, foto, sinopse} = this.props.movie;
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.movieTitle}>{nome}</Text>
          <Image
            source={{uri: foto}}
            style={styles.moviePicture}
          />

        <View style={styles.btnReadMoreArea}>
            <TouchableOpacity style={styles.btnReadMore} onPress={()=>alert(sinopse)}>
                <Text style={styles.btnReadMoreText}>READ MORE</Text>
            </TouchableOpacity>
        </View>

        </View>
      </View>
    );
  }
}

export default Movie;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card:{
    shadowColor: 'black',
    backgroundColor: 'white',
    shadowOffset: {width:0,height:1},
    shadowOpacity: 0.8,
    margin: 15,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3
  },
  btnReadMoreArea:{
    alignItems: 'flex-end',
    marginTop: -40,
    zIndex: 9
  },
  btnReadMore:{
    width: 100,
    backgroundColor: '#09A6ff',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  btnReadMoreText:{
    textAlign: 'center',
    color: 'white'
  },
  movieTitle: {
    fontSize: 18,
    padding: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  moviePicture: {
    height: 250,
    zIndex: 1
  },
});
