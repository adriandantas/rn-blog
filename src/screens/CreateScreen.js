import {View, StyleSheet, Text, TextInput, Button} from "react-native";
import React, {useContext, useState} from 'react';
import {Context} from "../context/BlogContext";

const CreateScreen = ({navigation}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const {addBlogPost} = useContext(Context);

    return (
        <View style={styles.form}>
            <Text style={styles.label}>Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text) => {
                setTitle(text);
            }}/>
            <Text style={styles.label}>Content:</Text>
            <TextInput style={styles.input} value={content} onChangeText={(text) => {
                setContent(text);
            }}/>
            <Button
                title="Add Blog Post"
                onPress={() => {
                    addBlogPost(title, content, () => {
                            navigation.navigate('Index');
                        }
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        margin: 8
    },
    input: {
        fontSize: 18,
        marginBottom: 16,
        padding: 8,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 4
    },
    label: {
        fontSize: 20,
        marginBottom: 8
    }
});
export default CreateScreen;