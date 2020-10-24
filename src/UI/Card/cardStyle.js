import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        borderWidth: 0.25,
        borderColor: '#ccc',
        marginBottom: 10,
    },
    cardHeader: {
        paddingTop: 15,
        paddingHorizontal: 15
    },
    cardHeaderTitle: {
        fontWeight: "bold"
    },
    cardBody: {
        marginVertical: 5,
        paddingHorizontal: 15,
        paddingBottom: 10,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    spaced: {
        justifyContent: 'space-around',
    },
    cardFooter: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#CCCCCC26',
        borderColor: '#CCCCCC',
        borderTopWidth: 1,
    },
    
});

export default styles;