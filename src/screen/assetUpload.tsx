import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import { launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

const UploadSongForm = () => {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [artwork, setArtwork] = useState('');
  const [songFile, setSongFile] = useState('');
  const [artworkPreview, setArtworkPreview] = useState<string | null>(null);

  // Upload file to Firebase Storage
  const uploadFileToFirebase = async (fileUri: string, storagePath: string): Promise<string> => {
    try {
      const reference = storage().ref(storagePath);
      await reference.putFile(fileUri); // Upload file
      const url = await reference.getDownloadURL(); // Get download URL
      return url;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  };

  // Handle artwork selection
  const handleSelectArtwork = async () => {
    try {
      const result = await launchImageLibrary({ mediaType: 'photo' });
      if (result.assets && result.assets.length > 0) {
        const asset = result.assets[0];
        setArtwork(asset.uri || '');
        setArtworkPreview(asset.uri || '');
      }
    } catch (error) {
      console.error('Error selecting artwork:', error);
    }
  };

  // Handle song file selection
  const handleSelectSongFile = async () => {
    try {
      const result = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.audio, DocumentPicker.types.video],
      });
      setSongFile(result.uri || '');
    } catch (error) {
      console.error('Error selecting song file:', error);
    }
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!category || !title || !artist || !artwork || !songFile) {
      alert('Please fill all fields and upload files.');
      return;
    }

    try {
      // Upload artwork and song to Firebase Storage
      const artworkUrl = await uploadFileToFirebase(artwork, `artwork/${title}-${Date.now()}.jpg`);
      const songUrl = await uploadFileToFirebase(songFile, `songs/${title}-${Date.now()}.mp3`);

      // Check if the category exists
      const categoryDoc = await firestore().collection('songsList').doc(category).get();

      if (categoryDoc.exists) {
        // Update the existing category
        await firestore()
          .collection('songsList')
          .doc(category)
          .update({
            songs: firestore.FieldValue.arrayUnion({
              title,
              artist,
              artwork: artworkUrl,
              url: songUrl,
            }),
          });
      } else {
        // Create a new category
        await firestore().collection('songsList').doc(category).set({
          category,
          songs: [
            {
              title,
              artist,
              artwork: artworkUrl,
              url: songUrl,
            },
          ],
        });
      }

      alert('Song uploaded successfully!');
      // Reset form
      setCategory('');
      setTitle('');
      setArtist('');
      setArtwork('');
      setSongFile('');
      setArtworkPreview(null);
    } catch (error) {
      console.error('Error uploading song:', error);
      alert('Failed to upload song. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Category</Text>
      <TextInput style={styles.input} value={category} onChangeText={setCategory} placeholder="Category" />

      <Text style={styles.label}>Title</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} placeholder="Title" />

      <Text style={styles.label}>Artist</Text>
      <TextInput style={styles.input} value={artist} onChangeText={setArtist} placeholder="Artist" />

      <Text style={styles.label}>Artwork</Text>
      {artworkPreview && <Image source={{ uri: artworkPreview }} style={styles.artworkPreview} />}
      <Button title="Select Artwork" onPress={handleSelectArtwork} />

      <Text style={styles.label}>Song File (MP3/MP4)</Text>
      <Button title="Select Song File" onPress={handleSelectSongFile} />

      <Button title="Upload Song" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { fontSize: 16, fontWeight: 'bold', marginVertical: 5 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginBottom: 10 },
  artworkPreview: { width: 100, height: 100, marginVertical: 10, borderRadius: 5 },
});

export default UploadSongForm;
